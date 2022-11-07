function palindrome(str) {
    let newStr = str.replace(/[.*+?^${}()|_,\-\[\]\\]/g, '').toLowerCase().split(' ').join('')
    console.log(newStr)
    let str2 = [...newStr].reverse().join("").split(' ').join('')
    console.log(str2)
    return str2 === newStr
}
// console.log(palindrome("eye")); //true
// console.log(palindrome("_eye")); //true
// console.log(palindrome("not a palindrome")); //false
// console.log(palindrome("My age is 0, 0 si ega ym.")); //true
// console.log(palindrome("0_0 (: /-\ :) 0-0")); //true
// console.log(palindrome("A man, a plan, a canal. Panama")); //true

function convertToRoman(num) {
    const numerals = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
    let romanNumber = ''
    for (let i in numerals ) {
        while ( num >= numerals[i] ) {
            romanNumber += i;
            num -= numerals[i];
        }
    }
    return romanNumber;
}
//console.log(convertToRoman(36));

function noOdds( values ){
    return values.filter(elem => elem%2 === 0)
}
function include(arr, item){
    return arr.indexOf(item) !== -1
}
// console.log(include([1, 2, 3, 4], 3));
// console.log(include([1, 2, 4, 5], 3));
// console.log(include([], 3));