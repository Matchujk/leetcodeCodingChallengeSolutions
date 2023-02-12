/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let array = x + "";
    let arraySplit = array.split('').reverse()
    let returnNumber = Number(arraySplit.join(''))
    if(x === returnNumber && x >= 0){
        return true
    } else {
        return false
    }
};