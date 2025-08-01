// Synchronous Code :The code which is executed at the same time 
// Whenever the code of execution reaches there the code runs

// Asynchronous Code :The code which dont run at the same time
// There is no guarantee that when the flow of execution reaches there the code will run at the same time to show its behaviour
// ex.setTimeOut(function,time): whenever the duration completes we wish that the call back function execute ho

// Blocking Code :
// eg]console.log("Start")
// setTimeOut(sayMyName,5000)
// console.log("End")//This line must wait as there is 5000ms time above
// That means jab tak setTimeOut execute nhi hota the "End" must wait to get printed : Blocking of Code

// Synchronous Code normal chalega
// Asynchronous Code ko handle krne ke liye hota hain "Event Loop"

// Event Loop
// 1.Call Stack : Jab bhi funtion call hota hain toh particular function ke andar uski entry banati hain.Whenever the function is done the entry will be vanished
// 2.Browser 
// 3.Call Back Queue(Task Queue)

// Whenever the call stack gets a async code , it hands over it to browser(to avoid code blocking).And deletes its entry from call stack
// Now browser knows that after (eg.5000 ms) it must execute sayMyName
// Now the call stack can run next line and simultaneously the time is running

// As soon as the the timer is complete the saymyname entry goes in callback queue
// There is Event loop in callback
// Event loop makes sure if the stack is empty it will assign the front element from the queue to call stack

// eg]console.log("Start");
// setTimeout(funtion timeout(){
//console.log("Love Babbar");
//},5000);
//eg] Loupe JS website
// $.on('button', 'click', function onClick() {
//     setTimeout(function timer() {
//         console.log('You clicked the button!');    
//     }, 2000);
// });

// console.log("Hi!");

// setTimeout(function timeout() {
//     console.log("Click the button!");
// }, 5000);

// console.log("Welcome to loupe.");

// Need of Event Loop 
// To know how a Single Threaded language JS handles asynchronous code 
// how it maintains concurrency

