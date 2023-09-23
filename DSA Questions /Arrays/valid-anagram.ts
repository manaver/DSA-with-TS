// https://leetcode.com/problems/valid-anagram/

function isAnagram(s: string, t: string): boolean {

    if(s.length !== t.length) return false;

    let charMap = new Map<string, number>();
    
    Array.from(s).map((ch) => {
        charMap.set(ch, (charMap.get(ch) ?? 0) + 1)
    });

    Array.from(t).map((ch) => {
        let value = charMap.get(ch)
        if (value && value >= 0 && charMap.has(ch)) {
            if (value == 1) {
                charMap.delete(ch);
            } else {
                charMap.set(ch, value - 1);
            }
        } else {
            return false;
        }
    });
    return charMap.size === 0;
};


let s = "aa", t = "aa";
console.log(isAnagram(s, t));