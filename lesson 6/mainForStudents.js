const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 90,
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
    },
    {
        id: 5,
        name: "Helen",
        age: 20,
        isMarried: false,
        scores: 110
    },
    {
        id: 6,
        name: "Ann",
        age: 20,
        isMarried: false,
        scores: 105
    },
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

const superUser = {
    name: "Bob",
    age: 23,
    friends: [
        {
            id: 1,
            name: "Bob",
            age: 22,
            isMarried: true,
            scores: 85
        },
        {
            id: 2,
            name: "Alex",
            age: 21,
            isMarried: true,
            scores: 90,
        },
        {
            id: 4,
            name: "John",
            age: 19,
            isMarried: false,
            scores: 100
        }
    ]
}


//1. Создайте поверхностную копию объекта user
let copyUser = {...user};

//Проверка:
// console.log(user===copyUser) //false
// console.log(user.friends===copyUser.friends) //true

//2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: user.friends.map(elem => ({...elem}))};

//Проверка:
//console.log(user===deepCopyUser) //false
//console.log(user.friends===deepCopyUser.friends) //false

//3. Поверхностная копия массива students
let copyStudents = [...students];

//Проверка:
// console.log(students === copyStudents) //false
// console.log(deepCopyStudents[0] === students[0]) //true
// console.log(deepCopyStudents[1] === students[1]) //true
// console.log(deepCopyStudents[2] === students[2]) //true
// console.log(deepCopyStudents[3] === students[3]) //true
// console.log(deepCopyStudents[4] === students[4]) //true
// console.log(deepCopyStudents[5] === students[5]) //true


//4*. Полная (глубокая) копия массива students (map)
let deepCopyStudents = students.map(elem => {
    return (
        {...elem}
    )
});

//Проверка:
// console.log(deepCopyStudents === students) //false
// console.log(deepCopyStudents[0] === students[0]) //false
// console.log(deepCopyStudents[1] === students[1]) //false
// console.log(deepCopyStudents[2] === students[2]) //false
// console.log(deepCopyStudents[3] === students[3]) //false
// console.log(deepCopyStudents[4] === students[4]) //false
// console.log(deepCopyStudents[5] === students[5]) //false


// NB!!! Далее все преобразования выполняем не модифицируя исходный массив
// Вывод результатов - в консоль

//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
let sortedByName = [...deepCopyStudents].sort((a, b) => a.name.localeCompare(b.name));
//console.log(sortedByName);

//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
let sortedByScores = deepCopyStudents.sort((a, b) => b.scores - a.scores);
//console.log(sortedByScores);

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = students.filter(elem => elem.scores >= 100);
//console.log(bestStudents)

//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

let topStudents = deepCopyStudents.splice(0, 3);
// console.log(topStudents)
// console.log(deepCopyStudents)

//6b. Объедините массивы deepCopyStudents и topStudents так,
//чтоб сохранился порядок сортировки (spread-оператор || concat)
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
//console.log(newDeepCopyStudents)


//7. Сформируйте массив холостых студентов (filter)
let notMarriedStudents = students.filter(elem => !elem.isMarried);
//console.log(notMarriedStudents)

//8. Сформируйте массив имён студентов (map)
let studentsNames = students.map(elem => elem.name);
//console.log(studentsNames)

//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
let namesWithSpace = studentsNames.join(' ');
//console.log(namesWithSpace)
let namesWithComma = studentsNames.join();
//console.log(namesWithComma)

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
let trueStudents = students.map(elem => ({...elem, isStudent: true}));
//console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = students.map(elem => elem.name === 'Nick' ? {...elem, isMarried: true} : elem);
//console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = students.find(elem => elem.name === "Ann");
//console.log(ann)

// И поднимаем руку!!!!

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
let bestStudent = students.reduce((rez, elem) => {
    return rez.scores > elem.scores ? rez : elem
});

let bestStudentNotArray = (students) => {
    let max = students[0].scores
    let bestStudent = students[0]
    for (let i = 0; i < students.length; i++) {
        if (max <= students[i].scores) {
            max = students[i].scores
            bestStudent = students[i]
        }
    }
    return bestStudent
}
//console.log(bestStudent)
//console.log(bestStudentNotArray(students))

//13. Найдите сумму баллов всех студентов (reduce)
let scoresSum = students.reduce((rez, elem) => rez + elem.scores, 0);
//console.log(scoresSum)


// 14. Д.З.:
// Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
const addFriends = (students) => {
    let studentsNames = students.map(st => st.name)
    return students.map(elem => ({...elem, friends: studentsNames.filter(el => el !== elem.name)}))
}
//console.log(addFriends(students));

// 15. Напишите функцию getBestStudents, которая принимает параметром массив
// students  и количество лучших студентов, которое надо получить в
// новом массиве.
// getBestStudents(students) => [{name: "Nick", age: 20, isMarried: false, scores: 120}]
// getBestStudents(students, 3)
// getBestStudents(students, 10)

const getBestStudents = (students, count = 1) => {
    let rez = [...students].sort((a,b) => b.scores - a.scores)
    if (count <= students.length) {
        return rez.splice(0, count)
    } else {
        for (let i=students.length; i < count; i++) {
            rez[i] = null
        }
        return rez
    }
}

//console.log(getBestStudents(students))
function toCsvText(array) {
   return array.map(elem => elem.join(',')).join('\n')

}
console.log(toCsvText([
    [ 0, 1, 2, 3, 45 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]
]))





