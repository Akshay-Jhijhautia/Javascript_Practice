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

const query = `SELECT matches_per_player.player_name AS player, matches_per_player."matchesPlayed"
               FROM (
               SELECT player_name, COUNT(player_name) AS "matchesPlayed"
               FROM worldcupplayers
               GROUP BY player_name
               ) AS matches_per_player
               JOIN (
               SELECT player_name, COUNT(player_name) AS "No Card Games"
               FROM worldcupplayers
               WHERE event NOT LIKE '%R%' AND event NOT LIKE '%Y%'
               GROUP BY player_name
               ) AS no_card_matches_per_player
               ON matches_per_player.player_name = no_card_matches_per_player.player_name
               WHERE matches_per_player."matchesPlayed" = no_card_matches_per_player."No Card Games"
               ORDER BY matches_per_player."matchesPlayed" DESC, matches_per_player.player_name ASC
               LIMIT 10`;

client.query(query)
      .then((res) => {
        return fs.writeFile(path.join(__dirname,'../output/top10Players.json'),JSON.stringify(res.rows))
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