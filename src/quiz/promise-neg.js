function checkRowForNegative(row) {
    return new Promise(resolve => {
        setTimeout(() => {
            const hasNegative = row.some(val => val < 0);
            resolve(hasNegative ? row : null);
        }, 0);
    });
}

function logRowsWithNegatives(array2D) {
    const promises = array2D.map(row => checkRowForNegative(row));
    return Promise.all(promises).then(rows => {
        rows.forEach((row, index) => {
            if (row) {
                console.log(`Row ${index} contains a negative number:`, row);
            }
        });
    });
}

const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

logRowsWithNegatives(array2D)
    .then(() => console.log('Finished checking all rows.'))
    .catch(error => console.error(error));
