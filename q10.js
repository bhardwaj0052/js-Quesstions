const sentences = ["Hello, world!", "flatMap is neat.", "Isn't it?"];
function tokenize(sentences) {
 return sentences.flatMap((sentence) =>
    sentence.toLowerCase().match(/[a-z']+/g)
  );
}
console.log(tokenize(sentences));
// ["hello","world","flatmap","is","neat","isn't","it"]
