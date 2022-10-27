let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
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
        age: 25,
        isMarried: false,
        scores: 100
    }
];


//.reduce()
console.log(students.reduce((rez, elem) => {
   return rez.scores > elem.scores ? rez : elem
}))

console.log(students.reduce((rez, elem) => {
    const newStudent = {...elem, scores: elem.scores+10}
    rez.push(newStudent)
    return rez
}, []))



console.log(students.reduce((rez, elem) => {
    const newStudent = {...elem}
    if (newStudent.scores>=100){
        rez.push(newStudent)
    }
    return rez
}, []))


console.log(students.reduce( (rez, elem) => {
    rez[elem.name] = {...elem}
    delete rez[elem.name].name
    return rez
}, {}))