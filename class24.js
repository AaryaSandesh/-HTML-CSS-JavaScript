// Arrays : Referance types
// ex}object , array , function
// two types of memory :
//1.Stack memory -- It is used for storing local variables with primitive data types.The referance no. of actual data is stored in stack memory
// 2.Heap Memory --Grows dynamically during program execution.where the actual data is stored
// An important thing to note here is that, in most of the programming languages for example Java, string is considered as reference type, but in JavaScript we treat string as Primitive datatype
 // Primitive datatype : size is fixed at compile time .Memory location is typically done on stack
// numbers,strings , boolean , undefined , null

// Object :collection of key value pairs
let obj={
 "name":"Love",//double inveted comma everywhere is optional in key value but it must be used when key name has spaces
 age:25, 
 weight :85,
greet:function(){
    console.log("hello jee")
}
};
console.log(obj)
obj.greet()
console.log(typeof(obj))

let obj2=obj
// shallow copy :This means changes in the copied object will affect the original if there are nested objects.
// No any another copy of actual data but the new obj2 is created which will also point to the same data
// deep copy :A deep copy creates a completely independent copy, including all nested objects. Changes in the copied object do not affect the original.

// Arrays :collection of items
let arr=[1,2,3,4,5]
 
let arr1=["aarya",1,3,true]

console.log(typeof(arr))
let brr=new Array('love',1,true)
console.log(brr)
console.log(brr[0])

//built - in methods
brr.push('patil')
console.log(brr)
brr.pop(1)
console.log(brr)
brr.shift()//removes the leftmost element
console.log(brr)
brr.unshift('Love Babbar')//puts this first in the array
console.log(brr)
brr.push(20)
brr.push(40)
brr.push(60)
console.log(brr)
 
console.log(brr.slice(2,4) )
//splice : change the content
brr.splice(1,2,'kunal')
// 1 index se 2 index remove kro and uski jagah kunal daldo
console.log(brr)

