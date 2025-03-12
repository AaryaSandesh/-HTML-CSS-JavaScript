//  Functions : block of code performing specific task
// define the function
function func(){
console.log("aarya")
}
// function call
func()

function count(n){// here n is parameter
    for(let i=0;i<=n;i++){
        console.log(i)
    }
}
count(3);
// here n is arguement

function sum(a,b,c){
 let getsum=a+b+c;
 return getsum;
//  unreachable code
let sum=1+3
console.log(sum)
}
let ans1=sum(1,2,3)
console.log(ans1)


// method 2:
 const solve=function(a,b){//const is used for better practice
    return a*b
 }
 let ans=solve(2,20)
 console.log(ans)

//  method 3:
 const exp=(x,y)=>{
   let sum=x+y
   return sum
 }
 console.log(exp(2,3))

