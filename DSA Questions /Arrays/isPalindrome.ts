//Leet Code Url: https://leetcode.com/problems/palindrome-number

function isPalindrome(x: number): boolean {
    const reversed = `${x}`.split('').reverse().join('');
    return `${x}` === reversed;
};