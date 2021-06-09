const { AsyncArray } = Homework;

const api = {
    length: (arr) => new Promise(resolve => arr.length(resolve)),
    set: (arr, index, value) => new Promise(resolve => arr.set(index, value, resolve)),
    get: (arr, index) => new Promise(resolve => arr.get(index, resolve)),
    push: (arr, value) => new Promise(resolve => arr.push(value, resolve)),
    pop: (arr) => new Promise(resolve => arr.pop(resolve)),

    add: (a, b) => new Promise(resolve => Homework.add(a, b, resolve)),
    subtract: (a, b) => new Promise(resolve => Homework.subtract(a, b, resolve)),
    multiply: (a, b) => new Promise(resolve => Homework.multiply(a, b, resolve)),
    divide: (a, b) => new Promise(resolve => Homework.divide(a, b, resolve)),
    mod: (a, b) => new Promise(resolve => Homework.mod(a, b, resolve)),
    less: (a, b) => new Promise(resolve => Homework.less(a, b, resolve)),
    equal: (a, b) => new Promise(resolve => Homework.equal(a, b, resolve)),
    lessOrEqual: (a, b) => new Promise(resolve => Homework.lessOrEqual(a, b, resolve)),
    sqrt: (x) => new Promise(resolve => Homework.sqrt(x, resolve))
}


async function getAverage(array, cb) {

    let length = await api.length(array);

    let sum = 0;
    let i = 0;

    while (await api.less(i, length)) {
        let currentValue = await api.get(array, i);
        sum = await api.add(sum, currentValue);
        i = await api.add(i, 1);
    }

    let answer = await api.divide(sum, i);

    cb(answer);
}

// Массив для примера
let a = new AsyncArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

console.log('ищем среднее арифметическое массива');
getAverage(a, result => {
    console.log('результат', result);
});
a.print();