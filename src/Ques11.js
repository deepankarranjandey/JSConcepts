// Sum of Array Elements

function sumArray(array) {
    return array.reduce((acc, val) => acc + val, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));  // 15
