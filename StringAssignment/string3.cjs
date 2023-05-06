// Given a string in the format of "10/1/2021", print the month in which the date is present in.

function convertDate(date){
    let checkDate = date.split("/");
    
    switch(checkDate[1]){
        case '1' :
            return 'January';
        case '2' :
            return 'February';
        case '3' :
            return 'March';
        case '4' :
            return 'April';
        case '5' :
            return 'May';
        case '6' :
            return 'June';
        case '7' :
            return 'July';
        case '8' :
            return 'August';
        case '9' :
            return 'September';
        case '10' :
            return 'October';
        case '11' :
            return 'November';
        case '12' :
            return 'December';                 
        default : return 'Not a valid date/month';    
    }
}

//convertDate("10/2/2021");

module.exports = convertDate;
