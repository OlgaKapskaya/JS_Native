function palindrome(str) {
    let newStr = str.replace(/[.*+?^${}()|_,\-\[\]\\]/g, '').toLowerCase().split(' ').join('')
    console.log(newStr)
    let str2 = [...newStr].reverse().join("").split(' ').join('')
    console.log(str2)
    return str2 === newStr
}

console.log(palindrome("eye")); //true
console.log(palindrome("_eye")); //true
console.log(palindrome("not a palindrome")); //false
console.log(palindrome("My age is 0, 0 si ega ym.")); //true
console.log(palindrome("0_0 (: /-\ :) 0-0")); //true
console.log(palindrome("A man, a plan, a canal. Panama")); //true