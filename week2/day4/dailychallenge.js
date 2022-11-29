let star = ("")

const words = prompt("several words")

const array = words.split(" ")

console.log(array) 

console.log("array length " + array.length)

let temp = ""

// function long(){
//     let longest = 0
//     for(let i = 0; 1 < array.length; i++){
//         // if(array[i].length > longest)
//         // longest = array[i].length
//         console.log(array[i])
//     }
//     return longest
// }
// console.log(long())

for (i = 0; i< array.length; i++){
    if(temp.length <= array[i].length)
    temp = array[i]
    }
    console.log("*" .repeat(temp.length+4))
for (i = 0; i< array.length; i++){
    let longest = temp.length-array[i].length
    console.log("* " + array[i] + " ".repeat(longest) + " *")
    
    }
    console.log("*" .repeat(temp.length+4))

