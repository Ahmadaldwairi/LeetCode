/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const toString = String(x); 
    const reversedStr = toString.split('').reverse().join('');
    return toString === reversedStr; 
};