//Leet Code Url: https://leetcode.com/problems/palindrome-number
// Easy

function isPalindrome(x: number): boolean {
    const reversed = `${x}`.split('').reverse().join('');
    return `${x}` === reversed;
};


//Approach 2 (lengthy and same)
// function isPalindrome(x: number): boolean {
    
//     let numArr: number[] = [];

//     if(x<0)
//         return false;
        
//     //Breaking the number
//     while(x){
//         numArr.push(Math.trunc(x % 10));
//         x = Math.trunc(x/10);
//     }
    
//     let count = 0;
//     let n = numArr.length - 1;
//     // checking if array is paliidrome or not
//     while(count < numArr.length/2){
//         if(numArr[count] !== numArr[n-count])
//             return false;
//         count++;
//     }

//     return true;
// };

console.log(isPalindrome(121));