// EXERCISE 1

// function infoAboutMe(){
//     console.log("My name is Abe, I'm 4 and I like stuff.")
// }
// infoAboutMe()

// function infoAboutPerson(personName, personAge, personFavoriteColor){
//     console.log("Your name is " + personName +", you are " + personAge + " years old, your favorite color is " + personFavoriteColor)
// }
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

//EXERCISE 2

// function calculateTip(){
//     const bill = prompt("bill")
//     const tipOne = 1.2
//     const tipTwo = 1.15
//     const tipThree = 1.1
//     console.log(bill)
//     if(bill < 50){
//         console.log(bill*tipOne)
//     }
//     else if(bill > 50 && bill < 200){
//         console.log(bill*tipTwo)
//     }
//     else if(bill > 200){
//         console.log(bill*tipThree)
//     }
// }
// calculateTip()

// EXERCISE 3

// function isDivisible(divisor){
//     let sum = 0
//     for(let i=0; i<500; i++){
//         if(i %divisor === 0){
//             console.log(i)
//             sum = sum + i
//         } 
//     }console.log(sum)
// }
// isDivisible(45)

// EXERCISE 4

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// } 

// const shoppingList = ["banana", "orange", "apple"]
// console.log(shoppingList)
// const banana = console.log(prices.banana)
// const orange = console.log(prices.orange)
// console.log(banana + orange)

// function myBill(){
//     let sum = 0
//     for(let item of shoppingList){
//         // console.log(item)
//      console.log(stock[item]) 
//      if(stock[item] > 0){
//         sum += prices[item]
//      }
//     }
//     return sum
// }
// console.log(myBill())

//EXERCISE 5

// function changeEnough(itemPrice, amountOfChange){
//     let sum = 0
//     let amounts = [25, 10, 5, 1]
//     for(i=0; i<amountOfChange.length; i++){
//         let amountOne = amounts[i]*amountOfChange[i]
//         sum += amountOne
//     }
//     if(sum/100 >= itemPrice){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(changeEnough(4.25, [25, 20, 5, 0]))

// EXERCISE 6

function hotelCost(){
    let question = + prompt("How many nights will you be staying?")
    while(question == "" || isNaN (question)){
        question = + prompt("How many nights will you be staying?")
    }
    return 140*question
}
console.log(hotelCost())

function planerideCost(){
    let question = prompt("What is your destination?")
    while(question == "" || isNaN (question)){
        question = + prompt("What is your destination?")
    }
    if(question == "London"){
        return 183
    }else if(question == "Paris"){
        return 200
    }else{
        return 300
    }

}
console.log(planerideCost())