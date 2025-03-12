// Loops and Srings
// To do set of instructions repeatedly 
for(let i=1;i<=10;i++){
    console.log("aarya")
}
// Reverse counting
for(let i=5;i>=1;i--){
    console.log(i)
}

// break :get out of the loop
for(let i=1;i<=6;i++){
    if(i==4){
        break
    }
    else{
         console.log(i)
    }
}

// continue :skip the present iteration and go to the next one
for(let i=1;i<=4;i++){
    if(i==3){
        continue
    }
    else{
        console.log(i)
    }
}

// while loop
let i=1
while(i<=10){
   console.log("aarya")
   i++ 
}

//do-while
let i1=1
do{
    console.log(i)
i1++
}while(i1<5)
// First iteration is guarented

// Strings : sequence of characters
let name="love"//primitive and immutable
let last='arya'
console.log(typeof(name))//string
// we can use single inverted and double inverted commas both for string in one line
// for string to write in more than 1 line 
let nam=`Arya
Patil
Hello`
console.log(nam)

let vi=new String("viraj") //string object
console.log(vi)
console.log(typeof(vi))//object

let op1="English "
let op2="Hindi"
console.log(op1+op2)
console.log(op2.length)
// console.log(op1.toUpperCase())
// console.log(op2.toLowerCase())



let ans=`op1+op2`
console.log(ans)

let finalans=`$(op1)$(op2)`//concatination using backticks
console.log(finalans)

let str="aarya patil"
console.log(str.substring(2))
console.log(str.substring(2,4)) //do not consider ending index

// split
let sentence="Hello Jee Kaise Ho Saare"
let words=sentence.split(' ')
console.log(words)//makes an array of words

let sent="Hello Jee \"Kaise\"ho saare"
// so that we can print the kaise in different inverted commas
console.log(sent)
//  \ tells us that do not teach the character as spl character ..treat as normal one
//so to print \ :
let sent1="Hello \\ Jee \\ Kaise \\ Ho"
let wo=sent1.split('\\')
console.log(wo)
// to join this array
console.log(words.join(' ,'))