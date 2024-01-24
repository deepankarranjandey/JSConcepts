

// Longest Common Prefix


function longestCommonPrefix(strings) {
    if (!strings.length) return '';

    for (let i = 0; i < strings[0].length; i++) {
        for (let string of strings) {
            if (string[i] !== strings[0][i]) {
                return string.substring(0, i);
            }
        }
    }
    return strings[0];
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));  // "fl"
