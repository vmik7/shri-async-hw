const {
    AsyncArray,
    add, subtract, multiply, divide, mod,
    less, equal, lessOrEqual,
    sqrt,
} = Homework;

function exec(fn, ...args) {
    return new Promise(resolve => fn(...args, resolve))
}

async function getAverage(array, cb) {

    let length = await exec(array.length);

    let sum = 0;
    let i = 0;

    while (await exec(less, i, length)) {
        let currentValue = await exec(array.get, i);
        sum = await exec(add, sum, currentValue);
        i = await exec(add, i, 1);
    }

    let answer = await exec(divide, sum, i);

    cb(answer);
}

// Массив для примера
let a = new AsyncArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

console.log('ищем среднее арифметическое массива');
getAverage(a, result => {
    console.log('результат', result);
});
a.print();