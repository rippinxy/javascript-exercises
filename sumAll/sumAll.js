let sumAll = function() {
    let lowEnd = 10;
    let highEnd = "90";
    let arr = [];

    if (lowEnd <= 0 || highEnd <= 0 || typeof lowEnd != "number" || typeof highEnd != "number") {
        return "ERROR"
    }

    else if (lowEnd <= highEnd) {
        while(lowEnd <= highEnd){
        arr.push(lowEnd++)
        }
    }
    else {
        while(highEnd <= lowEnd){
        arr.push(highEnd++)
        }
    }
    function getSum(total, num){
        return total + num;
    }
    let sum = arr.reduce(getSum);
    return sum;
}

module.exports = sumAll
