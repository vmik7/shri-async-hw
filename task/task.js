async function getAverage(array, cb) {
    let length = await new Promise((resolve, reject) => {
        array.length(result => resolve(result));
    }).catch(console.log);

    let sum = 0;
    let i = 0;

    let isLess = await new Promise((resolve, reject) => {
        less(i, length, result => resolve(result));
    }).catch(console.log);

    while (isLess) {
        let currentItem = await new Promise((resolve, reject) => {
            array.get(i, result => resolve(result));
        }).catch(console.log);

        sum = await new Promise((resolve, reject) => {
            add(sum, currentItem, result => resolve(result));
        }).catch(console.log);

        i = await new Promise((resolve, reject) => {
            add(i, 1, result => resolve(result));
        }).catch(console.log);

        isLess = await new Promise((resolve, reject) => {
            less(i, length, result => resolve(result));
        }).catch(console.log);
    }

    let answer = await new Promise((resolve, reject) => {
        divide(sum, length, result => resolve(result));
    }).catch(console.log);

    cb(answer);
}