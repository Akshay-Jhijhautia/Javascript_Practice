function noOfRedCardsIssuedPerTeam(playersData,matches,anyYear){
    let mapYearData = new Set();
    let years = anyYear
    matches.filter((year) =>{
        if(year['Year'] === years){
            mapYearData.add(year['MatchID']);
        }});
    let teamsPlayedIn2014 = playersData.filter((teamsIn2014) => mapYearData.has(teamsIn2014['MatchID']));    
    let regex = /R/g;
    let regex1 = /SY/g;
    let numberOfRedCardIssuePerTeam = teamsPlayedIn2014.reduce((accumulator, redCards) => {
        if(redCards['Event'] !== ''){
            let count = (redCards['Event'].match(regex) || []).length;
            let count1 = (redCards['Event'].match(regex1) || []).length;
            if((count + count1) > 0){
                if(accumulator[redCards['Team Initials']]){
                    accumulator[redCards['Team Initials']] += (count + count1);
                } else {
                    accumulator[redCards['Team Initials']] = (count + count1);
                }
            }
        }
        return accumulator;
    },{})
    return numberOfRedCardIssuePerTeam;
}

module.exports = noOfRedCardsIssuedPerTeam;