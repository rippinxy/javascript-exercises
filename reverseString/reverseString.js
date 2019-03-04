const reverseString = function() {
    
    let str = '123! abc!';
    let strArr = str.split("");
    let strrev = strArr.reverse();
    let joined = strrev.join("");
    return joined
    

}

module.exports = reverseString
