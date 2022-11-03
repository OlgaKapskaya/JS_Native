// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    //console.log(nums)
    return nums.reduce((sum, elem) => sum + elem)
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number,b: number,c: number): string {
    if ( a+b <= c || b+c <= a || c+a <= b) return '00'
    else if (a === b && b === c) return '10'
    else if ( a===b || b===c || a===c) return '01'
    else return "11"
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number{
    if (number === 0 || number < 10 ) return number
    else {
        let rez = 0
        let str = number.toString()
        for (let i=0; i<str.length; i++){
            rez += +str[i]
        }
        return rez
    }
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let evenSum = 0
    let oddSum = 0
    for (let i=0; i<arr.length; i++) {
        if (i%2 === 0) {
            evenSum += arr[i]
        } else {
            oddSum += arr[i]
        }
    }
    return evenSum > oddSum
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


// export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
//     return array.filter( elem => elem > 0 && Number.isInteger(elem)).map(elem => elem**2)
// }

export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    let rez = []
    for (let i = 0; i< array.length; i++){
        if (array[i] > 0 && Number.isInteger(array[i])) {
            rez.push(array[i]**2)
        }
    }
    return rez
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    if (N === 0) return 0
    return N + sumFirstNumbers(N-1)
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]

    if (amountOfMoney <= 0) return [0]
    let rez = []
    while (amountOfMoney > 0) {
        for (let i=0; i<banknotes.length; i++){
            if (Math.floor(amountOfMoney / banknotes[i]) !== 0) {

                let count = Math.floor(amountOfMoney / banknotes[i])

                for (let j=0; j<count; j++) {
                    rez.push(banknotes[i])
                }
                amountOfMoney -= banknotes[i] * count
            }
        }
    }
    return rez
}
