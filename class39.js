// Closure :Binding a function with its requires data it becomes a closure.It is a top level entity
// To build a closure we need two entities :
// 1.function
// 2.Required data of that function or Lexial Scope  or Surrounding state
 
function init(){
    let name="Mozilla"//let -> is my block scoped
    function displayName(){
        //displayNmae is the inner function that forms a closure
        let name="Firefox"
        console.log(name)//use variable declared in the parent function
    }
    displayName()
}
init()
// Inshort closure is a combination of function and its lexial scope
// Note : That as Firefox is near the console , the function prints firefox
// If the firefox is not available we print "Mozilla"


// code 2:
let name="Aarya";
function init1(){
 function displayName1(){
        console.log(name)//use variable declared in the parent function
    }
    displayName1()
}
init1()

// code 3:
function outerFunction(){
    {
      let name="Sushant" //this name is acccessible within this curly brackets only hence we cannot print name 
    }
    function innerFunction(){
        console.log(name)
    }
    innerFunction()
}
outerFunction()

// See if the inner function value is dependant on the outerFunction variable.If that variable is cleaned from memory space
// Then what will inner function print?
function outer(){
    let name="Babbar";
    function inner(){
        console.log(name)
    }
     return inner;
}
let inn=outer();//the reference of the inner function is being return here
// So the memory of name variable may have been freed as it is out of curly brackets
inn();//The value of the function i.e. "Babbar" is being printed
// This is inn() is actually mappe dto inner(), actually we are calling the inner function
// This is the concept of closure
// We get the data through its referance . In short the copy of data is not made, the references are being shared
// In real, the name variable and its value is being bounded with the inner() function