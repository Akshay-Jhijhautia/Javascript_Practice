function cityData(matches){
    // let cities = matches.map((cityData) => cityData['City'].trim());
    // let matchesPlayedPerCity = cities.reduce((accumulator,cities) => {
    //     if(!accumulator[cities]){
    //         accumulator[cities] = 1;
    //     } else {
    //         accumulator[cities]++;
    //     }
    //     return accumulator;
    // },{})
    const matchesPlayedPerCity = matches.reduce((accumulator, match)=> {
        if(match['City'] != ''){
            if(accumulator[match['City']]){
                accumulator[match['City']]++;
            } else {
                accumulator[match[['City']]] = 1;
            }
        }
        return accumulator;
    },{})
    return matchesPlayedPerCity;
}


module.exports = cityData;