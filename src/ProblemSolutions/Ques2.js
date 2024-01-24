
// Longest Word in a Sentence
function longestWord(sentence)
{
    return sentence.split(' ').reduce((longest, currentWord) =>
    {
        return currentWord.length > longest.length ? currentWord : longest;
    }, ""
    );
}

console.log(longestWord("Find the longest word in this sentence"));