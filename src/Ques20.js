
// Intersection of Two Arrays
function intersectArrays(array1, array2) {
    return array1.filter(value => array2.includes(value));
}
console.log(intersectArrays([1, 2, 3, 4, 5], [2, 4, 6, 8]));  // [2, 4]
