const {Client} = require('pg');
const path = require('path');
const fs = require('fs').promises;


const client = new Client({
    host : 'localhost',
    user : 'postgres',
    port : 5432,
    password : 'root',
    database: 'fifa'
});

client.connect();

const query = `SELECT team, COUNT(team) AS winner
               FROM(
               SELECT home_team_name AS team
               FROM worldcupmatches
               WHERE home_team_goals > away_team_goals
               UNION ALL
               SELECT away_team_name AS team
               FROM worldcupmatches
               WHERE away_team_goals > home_team_goals
               ) AS COMBINED
               GROUP BY team`;



client.query(query)
      .then((res) => {
        return fs.writeFile(path.join(__dirname,'../output/matchesWonPerTeam.json'),JSON.stringify(res.rows))
      })
      .then(() => {
        console.log("Data Written in JSON File");
      })
      .catch((error)=> {
        console.log(error);
      })
      .finally(() => {
        client.end();
      })