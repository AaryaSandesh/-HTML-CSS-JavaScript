// Hoisting :process that shifts variable declaration or function declaration to the top in their scope
sayMyName("aarya")
function sayMyName(finalName) {
    console.log(finalName)
}
//Generally function declaration ke baad main we call the function
// sayMyName("viru")
// The created function automatically shifts the function above the function call if not ...:Hoisting

// var hoisting : "var" keyword related
console.log(age) //Doesnot gives error but gives undefined
// Becoz just variable declaration shifts upward not the assigned value
var age = 25

// using let and cons keyword
// console.log(age1)
// let age1=25
// This will give an error and same for const


// Therefore not recommended to use "var" keyword


// If you create a function using function expression it doesnt work
// sayHello();
// let sayHello=function(){
//     console.log("Hello Jee , kaise ho");
// }
// This gives an  referance error
// var greet2; this goes like this above and then provides undefined value
console.log(greet2)//if we try to get the referance of the function then
var greet2=function(){
    console.log("Namaste Duniya");
}
// class hoisting : not possible , gives error
//class : blueprint 
 //object : instance of class 
// const obj1 = new Human()
class Human { //this a class

}
const obj1 = new Human()// object declaration


// Function Call Stack :
// Container which stores data in the form of LIFO : stack
// It is basically a simple function behaviour for multiple function call

//  Functions : first class citizens
//  1.-- can be assigned to variables
let greet = function () {
    console.log("Greetings for the day")
}
greet()
//  2.--can be passed as an arguement
function greetme( fullName) {//passed as an arguement
    console.log("Hello", fullName)
    greet1()
}
function greet1() {
    console.log("Greetings for the day")
}
greetme("cutiee")
//  3.--can be returned function
function solve(number) {
    return function (number) {
        return number * number
    }
}
let ans = solve(5)//there is function(number) here in the answer
let finalans = ans(10)
console.log(finalans)
//  -- use function in Data Struct
const arr = [
    function (a, b) {
        return a + b
    },
    function (a, b) {
        return a - b
    },
    function (a, b) {
        return a * b
    }
]
let first = arr[0]//a+b vala function itha yenar mg
let ans1 = first(5, 10)//a , b madhe 5 and 10 value janar
console.log(ans1)
//  -- used as property
let obj={
    age:25,
    wt:36,
    ht:180,
    greet: ()=>{
        console.log("Hello Dunia");//as a property of object
    }
}
console.log(obj.age);
obj.greet();
