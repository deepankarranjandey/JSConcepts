

// Second Largest Element in Array

function secondLargest(array) {
    const sortedArray = array.sort((a, b) => b - a);
    return sortedArray[1];
}
console.log(secondLargest([1, 3, 5, 7, 9]));  // 7
