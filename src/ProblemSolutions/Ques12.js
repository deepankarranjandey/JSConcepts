
//Average of an Array

function averageArray(array) {
    return array.reduce((acc, val) => acc + val, 0) / array.length;
}
console.log(averageArray([1, 2, 3, 4, 5]));  // 3
