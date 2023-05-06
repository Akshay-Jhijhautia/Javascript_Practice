function top10PlayersWithHighestGoals(playersData){
    let noOfGoalsScoredByEachPlayer = playersData.reduce((accumulator, player) => {
        let regex = /G/g;
        let regex1 = /OG/g;
        let count = (player['Event'].match(regex) || []).length;
        let count1 = (player['Event'].match(regex1) || []).length;
        if((count - count1) > 0){
            if(accumulator[player['Player Name']]){
                accumulator[player['Player Name']] += (count - count1);
            } else {
                accumulator[player['Player Name']] = (count - count1);
            }
        }
        return accumulator;
    },{});
    let noOfMatchesPlayedByEachPlayer = playersData.reduce((accumulator,matches) => {
        if(accumulator[matches['Player Name']]){
            accumulator[matches['Player Name']]++;
        } else {
            accumulator[matches['Player Name']] = 1;   
        }
        return accumulator;
    },{});
    
    let highestProbability = Object.keys(noOfGoalsScoredByEachPlayer).reduce((accumulator, probability) => {
        let goals = noOfGoalsScoredByEachPlayer[probability];
        let matches = noOfMatchesPlayedByEachPlayer[probability];
        let averageGoals = goals / matches;
        accumulator[probability] = averageGoals;
        return accumulator;
      }, {});

    const sortData = Object.entries(highestProbability).sort(([,a],[,b]) => b-a);
    
    let topTenPlayersWithHighestProbability = {};
    for(let index = 0; index < 10; index++){
        topTenPlayersWithHighestProbability[sortData[index][0]] =  sortData[index][1];
    }
    return topTenPlayersWithHighestProbability;
}

module.exports = top10PlayersWithHighestGoals;