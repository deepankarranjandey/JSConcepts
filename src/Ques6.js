
//  Number of Vowels in a String

function countVowels(str)
{
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
    
}

console.log(countVowels("hello"));
