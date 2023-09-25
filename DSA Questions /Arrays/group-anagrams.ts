// https://leetcode.com/problems/group-anagrams/

//Method 1: By sorting
function groupAnagramsBySort(strs: string[]): string[][] {
    const map = {};
    //By sorting method
    for (const s of strs) {
        //sorting the array and checking if key exists in map
        const key = s.split('').sort().join('');
        if (map[key]) {
            map[key].push(s);
        } else {
            map[key] = [s];
        }
    }
    return Object.values(map);
};

//Method 2: By prime number
function groupAnagramsByPrime(strs: string[]): string[][] {
    const map = {};
    //By prime number method
    for (const s of strs) {
        //creating an array of prime number of 26 chars
        const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
        
        let key = 1;
        for(let i=0; i<s.length; i+=1){
            const ascii = s.charCodeAt(i);
            key *= prime[ascii-97]
        }

        if (map[key]) {
            map[key].push(s);
        } else {
            map[key] = [s];
        }
    }
    return Object.values(map);
};