const removeFromArray = function() {
    let forDeletion = ["hey", 3]
    let arr = ["hey", 2, 3, "ho"];
    arr = arr.filter(item => !forDeletion.includes(item)) 
    return arr

}

module.exports = removeFromArray
