
// Remove Specific Element from Array
function removeElement(array, element) {
    return array.filter(el => el !== element);
}
console.log(removeElement([1, 2, 3, 4, 5], 3));  // [1, 2, 4, 5]
