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
    const numerals = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1}
    let romanNumber = ''
    for (let i in numerals) {
        while (num >= numerals[i]) {
            romanNumber += i;
            num -= numerals[i];
        }
    }
    return romanNumber;
}

//console.log(convertToRoman(36));

function noOdds(values) {
    return values.filter(elem => elem % 2 === 0)
}

function include(arr, item) {
    return arr.indexOf(item) !== -1
}

// console.log(include([1, 2, 3, 4], 3));
// console.log(include([1, 2, 4, 5], 3));
// console.log(include([], 3));

function telephoneCheck(str) {
    let regexp = /^(1)?[- ]?\(?(?:\d{3})\)?[- ]?\d\d\d[- .]?\d\d\d\d$/
    let str1 = str.replace(/\s/g, '')
    let arr = str1.split('')
    if (arr.includes('(')) {
        if (!arr.includes(')')) return false
    }
    if (arr.includes(')')) {
        if (!arr.includes('(')) return false
    }
    return regexp.test(str)
}

// console.log(telephoneCheck("555-555-5555")); //true
// console.log(telephoneCheck("1 555-555-5555")); //true
// console.log(telephoneCheck("555-5555")); //false
// console.log(telephoneCheck("2 (757) 622-7382")); //false
// console.log(telephoneCheck("1 555)555-5555")); //false
// console.log(telephoneCheck("1 (555) 555-5555")); //true
// console.log(telephoneCheck("(555)555-5555")); //true
// console.log(telephoneCheck("555)-555-5555")); //false
// console.log(telephoneCheck("(555-555-5555")); //false

function checkCashRegister(price, cash, cid) {
    let CurrencyUnit = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    }
    let cidReverse = cid.reverse()
    let keys = Object.keys(CurrencyUnit).reverse()
    let totalCash = 0
    let change = []
    let mustReturn = cash - price

    for (let i = 0; i < cidReverse.length; i++) {
        totalCash += cidReverse[i][1]
        if (Math.floor(mustReturn / CurrencyUnit[cidReverse[i][0]]) !== 0) {
            if (Number(mustReturn).toFixed(2) > 0) {
                let count = Math.floor(mustReturn / CurrencyUnit[cidReverse[i][0]])
                let totalCountMoney = (cidReverse[i][1] / CurrencyUnit[cidReverse[i][0]])

                let countToPay = count <= totalCountMoney ? count : totalCountMoney
                let summa = countToPay * CurrencyUnit[cidReverse[i][0]]
                mustReturn = Number(mustReturn - summa).toFixed(2)
                change.push([keys[i], summa])
            }
        }
    }

    if (mustReturn > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []}
    }
    if (cash - price === totalCash) {
        return {status: "CLOSED", change: [...cid.reverse()]}
    } else return {status: "OPEN", change}

}

// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01],
//     ["NICKEL", 2.05], ["DIME", 3.1],
//     ["QUARTER", 4.25], ["ONE", 90],
//     ["FIVE", 55], ["TEN", 20],
//     ["TWENTY", 60], ["ONE HUNDRED", 100]])); //{status: "OPEN", change: [["QUARTER", 0.5]]}
// console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05],
//     ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90],
//     ["FIVE", 55], ["TEN", 20], ["TWENTY", 60],
//     ["ONE HUNDRED", 100]])); //{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1],
// // ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01],
//     ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0],
//     ["TWENTY", 0], ["ONE HUNDRED", 0]])); //{status: "INSUFFICIENT_FUNDS", change: []}
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0],
//     ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0],
//     ["ONE HUNDRED", 0]])); //{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0],
// // ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));


function remainder(n, m) {
    let max = Math.max(n, m)
    let min = Math.min(n, m)
    return min !== 0 ? max % min : NaN
}

//
// console.log(remainder(13, 72))
function flattenAndSort(array) {
    let rezArray = []
    array.forEach( arr => rezArray = rezArray.concat(arr))
    return rezArray.sort((a,b) => a - b);
}

//console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))
multiplicationTable = function(size) {
    let rezArray = []
    let temp = []
    for (let i=0; i<size; i++){
        let xArray = []
        for (let j=0; j<size; j++){
            if (i <= 0) {
                xArray[j] = (j+1)
            } else {
                xArray[j] = (temp[j]*(i+1))
            }
        }
        rezArray.push(xArray)
        temp = rezArray[0]
    }
    return rezArray
}
// console.log(multiplicationTable(3))
// console.log(multiplicationTable(5))

function getDrinkByProfession(param){
    let paramToLowerCase = param.toLowerCase()
    switch (paramToLowerCase) {
        case "jabroni": return "Patron Tequila"
        case "school counselor": return "Anything with Alcohol"
        case "programmer": return "Hipster Craft Beer"
        case "bike gang member": return "Moonshine"
        case "politician": return "Your tax dollars"
        case "rapper": return "Cristal"
        default: return "Beer"
    }
}
function firstNonConsecutive (arr) {
    for (let i=0; i<arr.length-1; i++){
        if (arr[i] !== arr[i+1]-1){
            return arr[i+1];
        }
    }
    return null;
}

// console.log(firstNonConsecutive([1,2,3,4,6,7,8]))
function checkExam(array1, array2) {
    let result = 0;
    for (let i=0; i<array1.length; i++){
        if (array1[i] === array2[i]) result += 4
        if (array1[i] !== array2[i] && array2[i] !== '') result -= 1
    }
    return result > 0 ? result : 0
}
//
// console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])) //6
// console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])) //16

function expressionMatter(a, b, c) {
    let rez1 = a * ( b + c )
    let rez2 = a * b * c
    let rez3 = a + b * c
    let rez4 = ( a + b ) * c
    let rez5 = a + b + c
    return Math.max(rez1, rez2, rez3, rez4, rez5);
}

// console.log(expressionMatter(2, 1, 2)) //6
// console.log(expressionMatter(2, 1, 1)) //4
// console.log(expressionMatter(10, 5, 6)) //300
// console.log(expressionMatter(1, 10, 1)) //12

function largestPairSum (numbers) {
    let temp = numbers.sort((a,b)=>b-a)
    return temp[0]+temp[1]
}
function accum(s) {
    let temp = s.split('')
    let rez = []
    for (let i=0; i < temp.length; i++){
        if (i===0) rez.push(temp[i].toUpperCase())
        else {
            let temp_ = ''
            for (let j = 0; j < i+1; j++) {
                if (j===0) temp_+=temp[i].toUpperCase()
                else temp_+=temp[i].toLowerCase()
            }
            rez.push(temp_)
        }
    }
    return rez.join('-')
}

// console.log(accum("ZpglnRxqenU"))
