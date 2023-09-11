//Leet Code Url: https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): number[] {
    //Creating a map for storing previous values
    const numberMap = new Map();

    for (let i = 0; i < nums.length; i++) {

        //Subtracting the number from target
        /*i.e
            a + b = target
            a = target - b
            we are finding this a
            and a and b are any two values of the array
        */
        let difference = target - nums[i];

        if (numberMap.has(difference)) return [numberMap.get(difference), i];

        //Storing number and its index on which we checked
        numberMap.set(nums[i], i);
    }
    return [];
};

console.log(twoSum([2, 7, 11, 15], 9));