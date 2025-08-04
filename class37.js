// Promise is a object that handles the completion value and returning value of asynchronous code
// 3 states :
// 1.Pending : initial state , neither fulfilled nor rejected
// 2.fulfilled / resolved : operation was completely successful
// 3.rejected : meaning that the operation failed
// This method les asynchronous method return values like synchronous method
// Instead of immediately returning the final value , the asynchronous method return a promise to supply the value at some point in future
// let firstPromise=new Promise((resolve, reject)=>{
// console.log("Aarya");
// // if we getting after writting variable name "firstPromise" then that means we have not added "resolve or reject" like words
// // resolve(1001);
// // reject (new Error("Internal Server Error"))
// });
// function sayMyName(){
//     console.log("My name is Aarya");
// }
// setTimeout(sayMyName,10000) 
// we pass function and parameter in the setTimeOut function 
// so setTimeOut will run the function sayMyName after 10 seconds

// Asynchronous code in promise:
let promise = new Promise ((resolve, reject) => {
    setTimeout(function sayMyName(){
    console.log("Heyy Arya")
    },10000);
    resolve ("Promise fulfilled 0th msg");//resolve state
    // To get the state fulfilled from pending after printing "Heyy Arya"
    // For the above state write in console window "variable name" (eg.promise)

});
promise.then((message)=>{//agar promise accept(fulfill) hua toh
    console.log("Then ka message:"+message)//resolve value passed will come here
}).catch((error)=>{//agar promise reject ho gaya toh
    console.log("Error"+error);
})


// Promise --> fulfilled --> then()
// Promise --> failure/ reject --> catch()

// This is printed when we write in console window the variable name
let promise1=new Promise((resolve, reject)=>{
let success=true;
if(success){
    resolve("Promise fulfilled")
}
else{
    reject("Promise rejected")
}
});

// we can add multiple messages  : Promise Chaining
promise1.then((message)=>{
   console.log("first msg:"+message);
   return "Promise fulfilled second message";
}).then((message)=>{
    console.log("second msg: "+message);
    return "Promise fulfilled third message";
}).then((message)=>{
    console.log("third msg:"+message)
})

let promise2=new Promise((resolve , reject)=>{
    let success = true;
    if(success){
        resolve(10)
    }
    else{
        reject(-1);
    }
});

promise2.then((message)=>{
console.log("first msg:"+message)
return 20
}).then((message)=>{
    console.log("second msg:"+message)
    return 30
}).then((message)=>{
console.log("third msg:"+message)
})


// catching errors
let promise3=new Promise((resolve,reject)=>{
    let success=false;
    if(success){
        resolve(10)
    }
    else{
        reject("Internal Server Error");
    }
})
promise3.then((message)=>{
    console.log("first msg:"+message)
    return 20;
}).catch((error)=>{
console.error(error)//console.log nhi likha hain 
}).finally((message)=>{
    console.log("first")
})
// there is one block called "finally " which will always run  regardless of resolve or reject


let promise4=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"First")//"first" is the string which we get in response

})
let promise5=new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Second") 
    
})
let promise6=new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,"Third") 
    
})
// multiple promises ko concurrently execute krna hain
Promise.all([promise4,promise5,promise6])
// promise.all creates a new promise which will be resolved or get executed when all the above promises are executed
.then((values)=>{
    console.log(values)
}).catch((error)=>{
    console.error(error)//agar ek bhi promise resolve ki jagah reject hua toh woh promises.all run nhi krega aur uski wajah se woh sara catch main aa jayega

})

setTimeout(function sayMyName(){
    console.log("My name is Aarya Patil")
},0)
// setTimeout always executes the callback asynchronously even with delay of 0