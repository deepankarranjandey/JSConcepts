
// Reverse Order of Words

function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
}
console.log(reverseWords("Hello World"));  // "World Hello"
