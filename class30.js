// Object is Dynamic nature
let obj={
    age:12,
    wt:68,
    ht:180
}
console.log(obj)
// we can also add new values to the object
obj.color="White"
console.log(obj)

// Dynamic because Runtime pr uski state ko hum change kr sakte hain

// Duplicating the object(Different object creation) :Cloning
let src={
    age:13,
    wt:70,
    ht:110
}
// 1.Spread operator
// let dest=src --> This is copying objects
let dest={...src}//use of spread operator "..."This helps in cloning
console.log("src",src)
console.log("dest",dest)
// Just to check if really cloned or just destination has copied the referance
src.age=90
console.log("src",src)
console.log("dest",dest)
// asliyat main alag alag objects banaye hain not referanced 

// 2.Assign operator
let dest1=Object.assign({},src) //khali object ko clone krdo
console.log("src",src)
console.log("dest",dest1)
src.age=9
console.log("src",src)
console.log("dest",dest1)

// if we suppose want to clone two objects in the destination
let src2={
    value:101,
    name:"aarya"
}
let dest2=Object.assign({},src,src2)
console.log("src",src)
console.log("dest",dest2)


// 3.Using Iteration
let dest3={};
// cloning
for(let key in src){
    // console.log(key)
    let newKey =key
    let newValue=src[key]
    //insert newKey and value in dest and create a clone
    dest3[newKey]=newValue
}
console.log(dest3)