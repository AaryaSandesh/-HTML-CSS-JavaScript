// Async-await and Fetch API
// Async-await can be used to provide a asynchronous code a synchronous code behaviour
// async function getData(params) {
//     setTimeout(function (){
//  console.log("I am inside set Timeout block")
//     },3000)
// }
// let output=getData();// Async always returns promise
// Promises ko efficiently handle krne ke liye to write easy to understand code, easy to debug code--we use async await
 
// fetch API :provides an interface for fetching resources (including across the network)
// Request :
// 1.get(): to get the data
// 2.post():to create data
// 3.put() :to update the existing resources
// 4.delete() :delete the data

// json placeholder (provides duplicate data for fetch request)
// async function getData(params) {
//    let response=fetch('https://jsonplaceholder.typicode.com/todos/1') //is link pr jao or data leke aao
// console.log(response)
// }
// getData()//data undefined
// scenario
// prepare URL/api endpoint(address pata chal gaya jahanse data leke aana hain) -->sync
// fetch data (ab woh data muze de do) -->network call -->async
// process data -->printing data -->sync

// fetch data will take time as it async code but immediately the process data will run as it is sync code but data toh aaya nhi hain toh usko process kaise krenege
// condition : Jab tak hamara data network se na aaye tab tak humus data ko process nhi krenge 
// So mark fetch data() as await

// async function getData(params) {
//     // fetch data ko await mark krke sync bana diya.But to make it await the function should be async
//     let response =await fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
//     //parse json-async --async
//     let data=await response.json()
//    console.log(data) 
// }
// getData()

const myHeaders=new Headers();
myHeaders.append("Content-Type","application/json")

// const myRequest=new Request("https://example.org//post",
//     {
//         method:"POST",
//         body:JSON.stringify({username:"example"}),
//        headers:myHeaders,
//     }
// );
const url="https://jsonplaceholder.typicode.com/posts"
const options={
    method:"POST",
    body:JSON.stringify({username:"Aarya"}),
    headers:myHeaders,
}
async function getData(params) {
    const url="https://jsonplaceholder.typicode.com/posts/101"
     const response=await fetch(url)
     let data=await response.json()
    console.log("get data response",data)//Note :The websites are not maintaining the data
}
async function PostData(params) {
    const response=await fetch(url,options)
    let data=await response.json()
    console.log("post data response",data)
}
async function processData(params) {
  await  PostData()
 await   getData()
}
processData()
// Note : For paid or private API the organization or the team has its own" API Key"
