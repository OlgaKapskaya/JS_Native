//1. Реализуйте функцию, которая принимает параметром подсторку,
// число повторов и разделитель, а возвращает сторку, состоящую из указанного количества
// повторов подстроки с использованием разделителя.

const repeatString = (str, count, r) => str.concat(r).repeat(count).slice(0,-1)
// console.log(repeatString("yo", 3, " "))
// console.log(repeatString("yo", 3, ","))

//2. Реализуйте функцию, которая принимает параметром сторку и подстроку,
// а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.

const checkStart = (str, incStr) => str.toUpperCase().startsWith(incStr.toUpperCase())
// console.log(checkStart("Incubator", "inc"))
// console.log(checkStart("Incubator", "yo"))

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов),
// а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.

const truncateString = (str, count) => str.substring(0, count) + '...'
//console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10))

//4. Реализуйте функцию, которая принимает параметром сторку (предложение)
// и возвращает самое короткое слово в предложении, если в параметрах пустая строка или не строка,
// то возвращает null.

const getMinLengthWord = (str) => (typeof str === 'string' && str !== "")
    ? str.split(" ").sort((a,b) => a.length - b.length)[0]
    : null

// console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"))
// console.log(getMinLengthWord(""))
// console.log(getMinLengthWord(123))

//5. Реализуйте функцию, которая принимает параметром сторку (предложение)
// и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.

const setUpperCase = (str) => str
    .toLowerCase()
    .split(" ")
    .map((elem)=>elem[0].toUpperCase().concat(elem.substring(1, elem.length)))
    .join(" ")
//console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"))

// !!!!!!!!!!!!!!!!!!После решения 5 задач - поднимаем руку!!!!!!!!

//6. Реализуйте функцию, котрая принимает параметрами строку и подстроку. Если все
// символы подстроки содержаться в стороке - возвращает true, если нет -
// возвращает false. Проверка проводится без учёта регистра и без учёта
// повторяющихся символов.
// * с учётом повторяющихся символов в подстроке

const isIncludes = (str, incStr) => {

    let count = 0
    let rez = str.toLowerCase()
    let search = incStr.toLowerCase()

    for (let i = 0; i<rez.length; i++) {
        for (let j = 0; j< search.length; j++) {
            if (search[j] === rez[i]) count++
        }
    }

    return count >= search.length
}



console.log(isIncludes("Incubator", "Cut"))
console.log(isIncludes("Incubator", "table"))
console.log(isIncludes("Incubator", "inbba"))
console.log(isIncludes("Incubator", "inba"))
console.log(isIncludes("Incubator", "Incubatorrr"))
console.log(isIncludes("Incubator", "aaaaaaaaaaaa"))

// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// isIncludes("Incubator", "inbba") => true //*false
// isIncludes("Incubator", "inba") => true  //*true
// isIncludes("Incubator", "Incubatorrr")=> true //*false




