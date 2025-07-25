// Variable Scoping 
// Note : let and const so that predictability is maintained throughout the code .As var supports hoisting
// Global Scoping
// Function Scoping : agar variable function ke andar dfine kiya hain toh uska scope kya hoga
// Block Scoping
let age=15;//global scope : kha bhi hum isko use kr sakte hain
// console.log(age);
// {
//     console.log(age);//checking if global variable is accessible in the block 
// }
// if(true){
//     console.log(age)
// }
// for(let i=0;i<2;i++){
// console.log(age);
// }
// function sayHello(){
//     console.log(age);
// }
// sayHello();
function sayHello(){
    var fullname="Earth"//name is defined in the function so we cannot access it out of the curly brackets
    console.log("Hello",fullname)
}
// console.log(fullName) gives error
sayHello();
// Remember :var is not block scoped
{
    var height=180;
}
console.log(height);

// let and const are block scoped
// {
//     let age1=100;
// }
// console.log(age1); gives error


// Temporal Dead Zone
console.log(marks) // let keyword ke through create kiya hua variable hoist nhi hota
console.log("Mom , you are")
console.log("great")
let marks=100// from line no.40 to 43 :Temporal dead zone, that is we cannot access marks value even if it exists
console.log(100)
