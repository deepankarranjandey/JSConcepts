
// Merge and Sort Arrays

function mergeSortArrays(array1, array2) {
    return array1.concat(array2).sort((a, b) => a - b);
}
console.log(mergeSortArrays([1, 3, 5], [2, 4, 6]));  // [1, 2, 3, 4, 5, 6]
