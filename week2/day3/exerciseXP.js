//EXERCISE 1

// const people = ["Greg", "Mary", "Devon", "James"];

// people.splice(0, 1)//removed "Greg" from array.
// people.splice(2, 1, "Jason")//replaced "James" with "Jason".
// people.splice(3, 0, "David")//add "David" to array.

// console.log(people)

// console.log(people.indexOf("Mary"));

// let people2 = people.slice(1,3)//new array (people2) is the same as "people" array but it's only from 1 to 3.
// console.log(people2)

// console.log(people.indexOf("Foo"))

// let last = [people[2]]//new array is "2" from the "people" array.
// console.log(last)

// for (let index = 0; index < people.length; index++){
//     console.log (people[index] )
//     if(people[index]=="Jason"){
//         break;
//     }
// }

//EXERCISE 2

// const colors = ["red", "orange", "yellow", "green", "blue"]
// const suffix = ["st", "nd", "rd", "th"]

// for (index = 0; index < colors.length; index++){
//     if (index < 3){
//         console.log("my " + (index+1) + (suffix[index]) + " is " + (colors[index]))
//     }
    // else {
    //     console.log(`my ${index+1}${suffix[3]} is ${colors[index]}`)
    // }
//}


//EXERCISE 3

// let number = prompt("number")
// console.log(number)

// while(number < 10){
//     number++
//     console.log(number)
// }


//EXERCISE 4

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }
// console.log(building.numberOfFloors)
// console.log(building.numberOfAptByFloor.firstFloor)
// console.log(building.numberOfAptByFloor.thirdFloor)
// console.log(building.nameOfTenants[1])
// console.log(building.numberOfRoomsAndRent["dan"][0])

// const sarahs = building.numberOfRoomsAndRent["sarah"][1]
// const dans = building.numberOfRoomsAndRent["dan"][1]
// const davids = building.numberOfRoomsAndRent["david"][1]
// const sarahDavid = sarahs + davids

// if(sarahDavid > dans){
//     dansRent = dans + 200
//     console.log(dansRent)
// }else{
// }


//EXERCISE 5

// const family = {
//     dad: "daddy",
//     mom: "mommy",
//     son: "sonny",
// }
// console.log(family)
// for(item in family){
//     console.log(item)
//     console.log(family[item])
// }

// EXERCISE 6

// const details = {
//     my: "name",
//     is: "Rudolf",
//     the: "raindeer"
//   }
//   for(value in details){
//     console.log(value)
//     console.log(details[value])
//   }

// EXERCISE 7

// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// names.sort()
// const newNames = []
// for(i = 0; i < names.length; i++){
//   const secret = names[i][0]
//   newNames.push(secret)
// }console.log(newNames)