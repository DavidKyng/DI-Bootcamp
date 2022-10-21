const sentence = "this is not that bad"
const wordNot = sentence.indexOf("not")
const wordBad = sentence.indexOf("bad")

console.log(wordNot)
console.log(wordBad)

let a = sentence.substring(0, wordNot)
let b = sentence.substring(wordBad + 3, sentence.length)

if (wordBad > wordNot) {
    console.log(a + "good" + b) 
}
else {
    console.log(sentence)
}

