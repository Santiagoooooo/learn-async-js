function sumRow(row) {
    return new Promise(resolve => {
        setTimeout(() => {
            const sum = row.reduce((acc, val) => acc + val, 0);
            resolve(sum);
        }, 0);
    });
}

async function sum2DArrayConcurrently(array2D) {
    const promises = array2D.map(row => sumRow(row));
    const rowSums = await Promise.all(promises);
    return rowSums.reduce((acc, val) => acc + val, 0);
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Using the async function
(async () => {
    try {
        const sum = await sum2DArrayConcurrently(array2D);
        console.log(`Concurrent Sum with async/await: ${sum}`);
    } catch (error) {
        console.error(error);
    }
})();
