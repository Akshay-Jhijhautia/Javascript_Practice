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

const query = `SELECT refree, World_Cups FROM 
              (SELECT refree, COUNT(DISTINCT year) AS World_Cups 
               FROM worldcupmatches
               GROUP BY refree
               ) AS referee_worldcup
               WHERE World_Cups > 1
               ORDER BY World_Cups DESC, refree ASC`;



client.query(query)
      .then((res) => {
        return fs.writeFile(path.join(__dirname,'../output/refreeInMultipleWorldCups.json'),JSON.stringify(res.rows))
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