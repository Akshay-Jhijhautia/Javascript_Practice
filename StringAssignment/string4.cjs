// ==== String Problem #4 ====
// Given an object in the following format, return the full name in title case.
// {"first_name": "JoHN", "last_name": "SMith"}
// {"first_name": "JoHN", "middle_name": "doe", "last_name": "SMith"}

function titleCase(object){
    let name = Object.values(object);
    let fullName = name.join(" ").toLowerCase();
    let letter = fullName.split(" ");
    for(let i = 0; i<letter.length; i++){
        letter[i] = letter[i].charAt(0).toUpperCase() + letter[i].slice(1);
    }
    return letter.join(" ");
}


module.exports = titleCase;

