// EXERCISE 1

// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // #1.1 - run in the console:
// funcOne()
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ? 
// ANSWER: "inside the funcOne function 3"

// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?
// // ANSWER "inside the funcThree function 0"


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()
// // ANSWER: "inside the funcFive function hello"


// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?
// // // ANSWER: "inside the funcFive function test"

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// //#5.1 - run the code in the console
// //#5.2 What will happen if the variable is declared 
// //with const instead of let ?
// // ANSWER:  "outside of the if block 2", "in the if block 5"

//EXERCISE 2

const winBattle=()=> true

function experiencePoints(win){
    const winBattle = ? win ===10 : < 1
    return winBattle
}

console.log(experiencePoints)

//EXERCISE 3

