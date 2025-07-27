// Error Handling :
// Konsa bhi event jisase normal flow of event disrupt ho jaye use hum Error kehte hain
// Types : Compile Time Error (can be caought during parsing of the js code before the execution of program)
// Run Time Error(whenever the code is executing tabhi error aata hain)


// Compile time error
// 1.syntax error
// console.log(1;

//Runtime error
// 2.Reference Error
// console.log(x)

// Handling
// Try-catch Block
try{//wohwala code write kro jahanpe apka error aa sakta hain
    console.log("try block starts here")
console.log(x) //reference error
console.log("Try block ends here")
// a

// b

// c
}
catch(error){//jo error aata hain woh hum yahapr catch kr sakte hain .So, after 18th line 26th line will directly run
    // define krte hain ki error ke sath hum kya krna chahte hain
    // "e" is variable that catches error
    //Eg] retry logic , fallback ,custome error etc
    console.log("I am inside catch block")
    console.log("Your error is here :",error)
}
// If there is no error catch doesnt execute after try block lines are run we come out directly

// finally :will run everytime no dependancy on try block error .
finally{
    console.log("I will run everytime")
}


// If we on our own wants to through the error
// throw keyword
try{
    console.log(x);
}
catch(err){
    throw new Error("Bhai pehle declare krdo fhir print krna")
}

let errorCode =100;
if(errorCode ==100){
    throw new Error ("Invalid Json")
}