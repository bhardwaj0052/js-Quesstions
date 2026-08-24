const sentences = [
  "the quick brown fox jumps over the lazy dog",
  "the dog barks at the quick fox",
];
function wordFrequency(sentences) {
  const fm = sentences.flatMap((sentence) =>
    sentence.toLowerCase().match(/[a-z']+/g),
  );
  const r = fm.reduce((acc, cur) => {
    if(cur.length>3){
        acc[cur]=(acc[cur] ?? 0)+1;
    }
    return acc
  }, {});
  const pair = Object.keys(r).map((item)=>[item, r[item]]);
  return pair.sort((a,b)=>{
    if(b[1]!==a[1]){
        return b[1]-a[1];
    }
    return a[0].localeCompare(b[0]);
  })
}
console.log(wordFrequency(sentences));
// [["quick",2],["fox",2],["barks",1],["brown",1],["dog",2],["jumps",1],["lazy",1],["over",1]]
// (order: count desc, then alpha)
