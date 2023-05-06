const csv = require('csvtojson');
const fs = require('fs');

const matchPerCity = '../data/WorldCupMatches.csv';
const playersData = '../data/WorldCupPlayers.csv';
const cityData = require('./matchesPlayedPerCity.cjs');
const teams = require('./matchesWonPerTeam.cjs');
const noOfRedCardsIssuedPerTeam = require('./numberOfRedCardsIssuedPerTeam.cjs');
const top10PlayersWithHighestGoals = require('./top10PlayersWithHighestProbability.cjs');

csv()
.fromFile(matchPerCity)
.then((totalMatches)=>{
    let city = cityData(totalMatches);
    fs.writeFile('../public/output/matchesPlayedPerCity.json', JSON.stringify(city), (err) => {
        if(err){
            console.log(err);
        } else {
            console.log("Match per City, written Successfully in JSON file");
        }
    })
});

csv()
.fromFile(matchPerCity)
.then((totalWorldCups)=>{
    let team = teams(totalWorldCups);
    fs.writeFile('../public/output/matchesWonPerTeam.json', JSON.stringify(team), (err) => {
        if(err){
            console.log(err);
        } else {
            console.log("Match Won per team,  Written Successfully in JSON file");
        }
    })
});

csv()
.fromFile(playersData)
.then((playersData)=>{
    csv()
    .fromFile(matchPerCity)
    .then((matchesPerCity)=>{
            let year = '2014';
            let data = noOfRedCardsIssuedPerTeam(playersData,matchesPerCity,year);
            fs.writeFile('../public/output/noOfRedCardsIssuedPreTeam.json', JSON.stringify(data), (err) => {
            if(err){
                console.log(err);
            } else {
                console.log("Number of Red Cards Issued Per Team In 2014, written Successfully in JSON file");
            }
        })
    })
});

csv()
.fromFile(playersData)
.then((playerWithMostGoal)=>{
    let topTen = top10PlayersWithHighestGoals(playerWithMostGoal);
    fs.writeFile('../public/output/top10PlayersWithHIghestProbability.json',JSON.stringify(topTen), (err) => {
        if(err){
            console.log(err)
        } else {
            console.log("Data for top 10 players with highest number of goals, written successfully in JSON file");
        }
    })
});