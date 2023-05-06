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

const query = `SELECT Team, SUM(goals) as goals from
              (SELECT home_team_name as Team,home_team_goals as goals, year from worldcupmatches where home_team_goals > away_team_goals
               UNION ALL 
               SELECT away_team_name as Team,away_team_goals as goals, year from worldcupmatches where home_team_goals < away_team_goals) 
               AS COMBINED
               WHERE year IN
              (SELECT year FROM worldcups
               WHERE country = 'Germany') 
               GROUP BY Team
               ORDER BY goals DESC
               LIMIT 8`;



client.query(query)
      .then((res) => {
        return fs.writeFile(path.join(__dirname,'../output/top8TeamsScoredMostGoals.json'),JSON.stringify(res.rows))
      })
      .then(() => {
        console.log("Data Written in JSON File");
      })
      .catch((error)=> {
        console.log(error);
      })
      .finally(() => {
        client.end();
      });