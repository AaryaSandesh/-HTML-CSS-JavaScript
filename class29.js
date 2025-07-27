// Math:Object
console.log("babbar")
console.log(Math.PI);
console.log(Math.max(60,30,24,600,712,89))
console.log(Math.min(60,30,24,600,712,89))
console.log(Math.round(1.6))
console.log(Math.floor(1.9))
console.log(Math.ceil(1.1))
console.log(Math.abs(-5))
console.log(Math.abs(5))
console.log(Math.random())//0 to 1(exclusive)
console.log(Math.sqrt(5))
console.log(Math.pow(2,10))

// Date:Object
let curr=new Date()
console.log(curr)

let date=new Date('June 20 1998 07:15')
console.log(date)
// Month has 0 based indexing .For January use 0,Feb :1 etc
let newDate=new Date(1998,5,20,7)
console.log(newDate)

console.log(newDate.getDay())
// 0:sunday , 1:monday , 2:tuesday .......
console.log(newDate.getFullYear())
console.log(newDate.setDate(2001))