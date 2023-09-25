// https://leetcode.com/problems/group-anagrams/

function groupAnagrams(strs: string[]): string[][] {
    const map = {};
    //By sorting method
    for(const s of strs){
        //sorting the array and checking if key exists in map
        const key = s.split('').sort().join('');
        if(map[key]){
            map[key].push(s);
        }else{
            map[key] = [s];
        }
    }
    return Object.values(map);
};