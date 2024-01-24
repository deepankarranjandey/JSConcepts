// Check if Array is Sorted

function isArraySorted(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) return false;
    }
    return true;
}
console.log(isArraySorted([1, 2, 3, 4, 5]));  // true
