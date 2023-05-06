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

const query = `SELECT minute, COUNT(minute) AS "Goals Scored" FROM
              (SELECT CAST(SUBSTR(value, 2, LENGTH(value) - 2) AS INTEGER) AS minute FROM
              (SELECT UNNEST(STRING_TO_ARRAY(event, ' ')) AS value
              FROM worldcupplayers) AS A
              WHERE value LIKE 'G%') AS B
              GROUP BY MINUTE
              ORDER BY MINUTE`



client.query(query)
      .then((res) => {
        return fs.writeFile(path.join(__dirname,'../output/goalsScoredPerMinute.json'),JSON.stringify(res.rows))
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