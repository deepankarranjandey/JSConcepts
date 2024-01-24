

// Remove Duplicate Elements from Array

function removeDuplicates(array)
{
    return[...new Set(array)];
}

console.log(removeDuplicates([1,2,3,3,4,4,5]));