//map function
let arr=[10,20,30]
let ans=arr.map((number)=>{
    return number*number
})
console.log(ans)
arr.map((number,index)=>{
    console.log(number)
    console.log(index)
})

//filter function
let arr1=[10,20,30,40,50]
let evenArray=arr1.filter((number)=>{
if((number%2)==0){
  return true;  
}
else{
    return false;
}
})
console.log(evenArray)

let crr=[1,2,3,"aarya"]
let ab=crr.filter((value)=>{
    if(typeof(value)=='string'){
        return true
    }
    else{
        return false
    }
})
console.log(ab)

// reduce
let drr=[10,20,30,40]
let n=drr.reduce((acc,curr)=>{
return acc+curr;
},0)
console.log(n)
// the values during the sum calculation of sum are stored in accumulator
// accumulator ki value 0 se assign ho jayegi and as 0 is not present in
// the curr takes first value from array

// but we pass the first value from array to the accumulator then curr takes the second value


// sort
let n1=[1,2,3,9,4,2,0]
n1.sort()//ascending order
console.log(n1)
n1.sort((a,b)=>b-a)
console.log(n1)
// finding the index of number
console.log(n1.indexOf(9))

// find


// For each : array ke har ek element pe agar action perform krni hain
let viv=[1,2,3,4,5]
viv.forEach((value,index)=>{
    console.log("Number :",value,"Index :" ,index)
})
let length=viv.length
console.log("length :",length)

// for loop
for(let index=0; index<length;index++){
    console.log(viv[index])
}

// for in :
// enumerable properties travel
let obj={
    name:"love",
    age:25,
    weigth:"25kg"

}
for(let key in obj){
    console.log(key)
}
for(let key in obj){
    console.log(key," ",obj[key])
}

// for of loop :
let err=[10,20,30,40]
for(let value of err){
    console.log(value)
}
let fullname="aarya"
for(let value of fullname){
     console.log(value)
}

// Arrays with Functions
let frr=[10,20,30,40,50]
function getSum(arr){
   let len=frr.length
   let sum=0;
    for (let i=0;i<len;i++){
    sum=sum+frr[i]
    }
    return sum
}

let total=getSum(frr);
console.log(total)