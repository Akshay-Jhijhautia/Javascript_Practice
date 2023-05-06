function teams(matches){
    let winnerTeam;
    let matchesWonPerTeam = matches.reduce((accumulator, match) => {
        if(match['Home Team Goals'] > match['Away Team Goals']){
            winnerTeam = match['Home Team Name'];
            if(accumulator[winnerTeam]){
                accumulator[winnerTeam]++;
            } else {
                accumulator[winnerTeam] = 1;
            }
        } else if(match['Home Team Goals'] < match['Away Team Goals']){
            winnerTeam = match['Away Team Name'];
            if(accumulator[winnerTeam]){
                accumulator[winnerTeam]++;
            } else {
                accumulator[winnerTeam] = 1;
            }
        }
        return accumulator;
    },{})
    return matchesWonPerTeam;
}

module.exports = teams;