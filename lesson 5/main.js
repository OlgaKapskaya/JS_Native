// const names = ['Bob', 'Alex', 'Donald',3, 'ann', '!', 'Igor','Юра']
//
// console.log([...names].sort())
// console.log(names)
// console.log(names.reverse())
// console.log(names)
//
// const numbers = [9, 10, 7, 89, 54, 6, 32]
// console.log(numbers.sort())
// console.log(numbers.sort((a,b) => a - b))
// const compFn = (a,b) => { //po vozrastaniu
//     if (a <= b) {
//         return -10
//     } else {
//         return 10
//     }
// }
// const compFn1 = (a,b) => { return a - b }
// // console.log(numbers.sort(compFn))

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 95
    },
    {
        name: "Alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
    {
        name: "Helge",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 121
    },
    {
        name: "alex",
        age: 23,
        isMarried: true,
        scores: 89
    },
];
const sortedByAge = students.sort((a ,b) => a.age - b.age)
console.log(sortedByAge)
const sortedByScores = students.sort((a ,b) => a.scores - b.scores)
console.log(sortedByScores)
const sortedByAlf = students.sort((a,b) => {
    if (a.name.toLowerCase() <= b.name.toLowerCase()) return -10
    else return 10
})
console.log(sortedByAlf)
const sortedByAlf1 = students.sort((a,b) => a.name.localeCompare(b.name))
console.log(sortedByAlf1)

const numbers1 = [12, 34, 23, 67, 55, 99, 78]


const numbers = [12, 79, 34, 23, 67, 55, 99, 78, 10]
let length = numbers.length


//sorted bubles
for (let j=0; j<numbers.length - 1; j++) {
    let isSorted = true
    for (let i=0; i < numbers.length - j - 1; i++) {

        if (numbers[i] > numbers[i + 1]) {
            isSorted = false;
            // let temp = numbers[i]
            // numbers[i] = numbers[i+1]
            // numbers[i+1] = temp
           [numbers[i+1], numbers[i]] = [numbers[i], numbers[i+1]]
        }
    }
    if (isSorted) break
}
console.log(numbers)
