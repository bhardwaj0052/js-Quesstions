// Use reduce to group an array of words into anagram buckets, returned as an object keyed by the
// sorted-letters signature.
const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
function groupAnagrams(words) {
    const ana= words.reduce((a,c)=>{
        const key = c.split("").sort().join("");
        a[key] = a[key] ?? [];
        a[key].push(c);
        return a;
    },{})
    return ana
}
console.log(groupAnagrams(words));
// { aet: ["eat","tea","ate"], ant: ["tan","nat"], abt: ["bat"] }
