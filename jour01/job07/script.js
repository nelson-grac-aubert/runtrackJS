// .getMonth() returns 0 - 11 : we use this as an index to match a full letter name
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


function determineIfWeekend(dateToCheck) {

    // Parse date for clarity 
    const DAY = dateToCheck.getDate();
    const MONTH = dateToCheck.getMonth();
    const YEAR = dateToCheck.getFullYear();

    // 0 sunday, 6 saturday
    if (dateToCheck.getDay() == 0 || dateToCheck.getDay() == 6) {

        return true;

    }

    return false;
}

function determineIfHoliday(dateToCheck) {

    // 1er janvier, , 1ermai, 8 mai, Ascension, lundi de Pentecôte, 
    // 14 juillet, Assomption (15 août), Toussaint, 11 novembre, 25 décembre.
    const FRENCH_HOLIDAYS = [[0, 1], [4, 1], [6, 14], [7, 15], [10, 1], [10, 11], [11, 25]]
    // Parse date for clarity 
    const DAY = dateToCheck.getDate();
    const MONTH = dateToCheck.getMonth();
    const YEAR = dateToCheck.getFullYear();
    // create a [month, day] to check if its a national holiday
    const COMPARATOR = [MONTH, DAY]; 

    // .some : return true if the callback function is true for any element of the array.some(callback)
    const isFixHoliday = FRENCH_HOLIDAYS.some(([m, d]) => m === MONTH && d === DAY);

    if (isFixHoliday) {

        return true;

    }  

    return false;

}

function displayIfHolidayOrWeekEnd(dateToCheck) {

    // Parse date for clarity 
    const DAY = dateToCheck.getDate();
    const MONTH = dateToCheck.getMonth();
    const YEAR = dateToCheck.getFullYear();

    if (determineIfHoliday(dateToCheck)) { 
        console.log(`No, the ${DAY} of ${MONTHS[MONTH]}, ${YEAR} is a national holiday`);
        return true;
    }
    else if (determineIfWeekend(dateToCheck)) {
        console.log(`No, the ${DAY} of ${MONTHS[MONTH]}, ${YEAR} is on a Week-end`);
        return true;
    }
    else { 
        console.log(`Yes, you can work on the ${DAY} of ${MONTHS[MONTH]}, ${YEAR}`);
        return false;
    }

}

const d = new Date("July 21, 1983 01:15:00");
const d1 = new Date("July 22, 1983 01:15:00");
const d2 = new Date("July 23, 1983 01:15:00");
const d3 = new Date("July 24, 1983 01:15:00");
const d4 = new Date("July 25, 1983 01:15:00");
const d5 = new Date("July 26, 1983 01:15:00");
const d6 = new Date("July 27, 1983 01:15:00");

const h = new Date("May 1, 2000 01:15:00");
const h1 = new Date("May 2, 2000 01:15:00");

displayIfHolidayOrWeekEnd(d);
displayIfHolidayOrWeekEnd(d1);
displayIfHolidayOrWeekEnd(d2);
displayIfHolidayOrWeekEnd(d3);
displayIfHolidayOrWeekEnd(d4);
displayIfHolidayOrWeekEnd(d5);
displayIfHolidayOrWeekEnd(d6);

displayIfHolidayOrWeekEnd(h);
displayIfHolidayOrWeekEnd(h1);