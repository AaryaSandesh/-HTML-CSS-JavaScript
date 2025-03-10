// Operators and Conditionals
// Unary :1 operand ++a
//Binary :2 operand
console.log("Heyy")
let a=10
let b=5
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)

// Unary 
// ++a --pre
//a++ --post

// Assignment operators
a+=274
console.log(a)
a=a-10
console.log(a)

// Comparison Operator
// > < >= <= ==
// answers only true or false
console.log(10>5)

// Strict Equality(===) :apka value bhi same hona chahiye and apka type of data bhi same hona chahiye
// Loose Equality(==) :type of data doesnt matter but value matters
console.log('5'==5)
console.log('5'===5)

console.log('5'!=5)
console.log('5'!==5)

// Ternary Operator 
let age=25
let status1=(age>18)?"Vote":"DONT"
console.log(status1)

// Logical Operator
// and or not
let o=(true && true && true)
console.log(o)

let an=!(true)
console.log(an)

// working with non booleans
// false:undefined , null , 0 , false , NaN ,''
// truthy :anything which is not false
// Short Circuiting :(false || true || false || true)
// In above example after getting true for the first time "or" operator does not check for further 
// conditions it directly returns true
let fal=("Aarya" || false)
console.log(fal)
let fal1=( 7|| false)
console.log(fal1)

// Bitwise Operators
// & | ~ >> << ^
// ~ : does bit level flipping
 console.log(2 & 5)
//  2=0000010
//  5=0000101
console.log(2 | 5)
console.log(~(0)) //-1 see in detail how once again
// left shift << : a*2^N
// right shift >> :a/2^N




