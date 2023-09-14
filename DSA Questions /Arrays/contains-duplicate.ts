// https://leetcode.com/problems/contains-duplicate/description/
// Easy
//Approach 1: Using Map
function containsDuplicate(nums: number[]): boolean {
    const numberMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        if (numberMap.has(nums[i])) {
            return true;
        }
        numberMap.set(nums[i], i);
    }
    return false;
};

//Approach 2: Using Set
// function containsDuplicate(nums: number[]): boolean {
//     return new Set(nums).size !== nums.length;
// }

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))