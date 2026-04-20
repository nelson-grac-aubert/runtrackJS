let year;

function isBisextile (year) { 
    if (year % 4 == 0) {
        return true;
    }
    else { 
        return false;
    }
}

console.log(isBisextile(2000));
console.log(isBisextile(1999));