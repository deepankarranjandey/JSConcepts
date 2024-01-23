// Check Palindrome

function isPalindrome(str)
{
    const reversed=str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("1231"));