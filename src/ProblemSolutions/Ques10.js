//Remove All Whitespace

function removeWhitespace(str) {
    return str.replace(/\s+/g, '');
}
console.log(removeWhitespace("Hello World"));  // "HelloWorld"
