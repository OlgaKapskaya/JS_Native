const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

/*const getNames = (arr) => {
    let result = [];
   for (let i=0; i<arr.length; i++){
       result.push(arr[i].name)
   }
   return result;
}
console.log(getNames(students));

const getData = (arr) => {
    let rez = [];
    for (let i=0; i<arr.length; i++){
        rez.push(`${arr[i].name}, ${arr[i].age} yo, ${arr[i].scores} scores`);
    }
    return rez;
}
console.log(getData(students));*/

//.map()
const easyMap = (arr, fn) => {
    const rez = [];
    for (let i = 0; i < arr.length; i++) {
        const newValue = fn(arr[i]);
        rez[i] = newValue;
    }
    return rez;
}
/*
console.log(easyMap(students, (elem) => elem.name));
console.log(easyMap(students, (elem) => `${elem.name}, ${elem.age} yo, ${elem.scores} scores`));
console.log(easyMap(students, (elem) => elem.scores))

console.log(students.map(elem => elem.name));
console.log(students.map((elem) => `${elem.name}, ${elem.age} yo, ${elem.scores} scores`));
*/

//.filter()
const easyFilter = (arr, term) => {
    let rez = [];
    for (let j = 0; j < arr.length; j++) {
        if (term(arr[j]) === true) {
            rez.push(arr[j]);
        }
    return rez
    }
}

console.log(easyFilter(students, ((elem) => elem.scores >= 80)));
console.log(students.filter(elem => elem.scores >= 80));

//.find()
const easyFind = (arr, fn) => {
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) {
            return arr[i]
        }
    }
}

console.log(easyFind(students, ((elem) => elem.scores === 89)));
console.log(students.find((elem) => elem.scores === 89));

const easyJoin = (arr, separator = ",") => {
    let rez = "";
    for (let i=0; i<arr.length; i++){
        if (i<arr.length-1) {
            rez += arr[i] + separator
        } else {
            rez += arr[i]
        }
    }
    return rez;
}
console.log(easyJoin(["Bob", "Nick"], "-"));
console.log([].join(","));
