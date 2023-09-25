// https://leetcode.com/problems/find-the-difference/description/
function findTheDifference(s: string, t: string): string {
    let charCode = t.charCodeAt(0);
    for(let i=0; i<s.length; i++){
        charCode += t.charCodeAt(i+1) - s.charCodeAt(i);
    }
    return String.fromCharCode(charCode);
};