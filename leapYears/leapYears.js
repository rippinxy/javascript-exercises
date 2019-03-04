const leapYears = function() {
    let inputYear = 700;
    let check1 = inputYear / 4;
    let check2 = inputYear / 100;
    let check3 = inputYear / 400;
    
    //if (check1 != Math.floor(check1)){
        //return false;
    //}    
    if (check1 == Math.floor(check1) && check2 != Math.floor(check2)) {
        return true;
    }
    else if (check2 == Math.floor(check2) && check3 == Math.floor(check3)){
        return true;
    }
    return false;

}

module.exports = leapYears
