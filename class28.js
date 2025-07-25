// Class:
// We will get class state/properties and another class behaviour/functionalities
class Human{
    //properties
   age=13;//default way public : inside the class as well as outside the class
   #wt=80;//private : cannot be accessed outside the class
   ht=180;
constructor (newAge, newHeight,newWeight){
this.age=newAge;
this.ht=newHeight;
this.#wt=newWeight
}
    // behaviour
    walking(){
        // console.log("I am Walking",#wt); private object cannot be accessed 
        console.log("I am walking",this.#wt)//points to the current object created
        // The object can be created within the function using "this" keyword and the property
        console.log("I am walking")
    }
    running(){
        console.log("I am running")
    }
   // Private property ko class ke bahar access krne ke liye we use "getter"
// "setter" sets the value of object , update or modify it
    get fetchWeight(){
    return this.#wt;
}
set modifyWeight(val){
  this.wt=val;
}
}
let obj=new Human(50,190,101);
console.log(obj.age)
console.log(obj.fetchWeight);
// console.log(obj.#wt);
obj.walking();


// parameters allows to use functions with default values
function sayName(myName="Krishna"){ //krishna is default name whenever you do not pass anything
    console.log("My name is",myName)
}
sayName("arya patil");

function sayName1(fName,lName="Singh"){
    console.log("My name is:",fName," ",lName)
}
sayName1("Uday")

function sayName2(fName="Uday",lName=fName.toUpperCase()){
    console.log("My Name is:",fName," ",lName)
}
sayName("Aarya","Patil")
sayName("aarya")


function solve(value="aryaaaa"){
   console.log("Hello Jee",value) 
}
solve(15);
solve("arya")
// we can pass object too in the same function
function solve1(value={age:15,wt:90,ht:190}){
    console.log("Hello jee",value)
}
solve1();

// we can pass array too
function solve2(value=["aarya","krishna","radha"]){
    console.log("hello",value)
}
solve2();
// if we will pass null value or undefined value to the function
function solve3(value="Rahul"){
    console.log("Hello Jee-->",value)
}
solve3(null);
solve3(undefined);//this will print default value

function getAge(){
    return 190
}

// default parameter as function
function utility(name="Arya",age=getAge()){
    console.log(name," ",age)
}
utility("Love",20)
utility();