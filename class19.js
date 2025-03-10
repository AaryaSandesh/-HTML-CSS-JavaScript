// <!-- Variables : named memory location -->
// <!-- let , var and cons are used for variable creation -->
//  let age=25; 
//  memory block store 25 at particular address
// var a=50;
// use krna band kiya hain. As var has a scope just inside a function.
// If not written in function then comes under global scope
// const a=50;

var age = 25; //global scope
if(true){
    console.log(age);
}

function solve(){
    var age=25; //local or functional scope
    console.log(age);
}
// console.log(age); -->gives an error
solve();
// var gives debugging issues when globally scoped
//ex} var x=10;
// var x=12;
// reassignment possible

// Hence use let and cons
// the variables created using let are blocked scoped 
let a=10;
console.log(a);

// {
//     let b=20;
// }
// console.log(b); throws erroe as b is defined inside the block
// let a=20; redeclaration is not possible
// a=30 this is possible

// .ek variable maine create kr diya uske andar main alag datatypes ki value daal sakta hu
let c=10;
 c="babbar";
 c=true;
 c=null;

 const d=25;
//This value of d never changes

// Variable naming convention
//1]it can start with number,_,$
//2]no space
//3]camelcase : ageOfStudent
//4]meaningful names
//5]no reserved keywords





