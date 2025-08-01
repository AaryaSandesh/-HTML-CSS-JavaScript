// Performance Improvement
const t1=performance.now()
for(let i=1;i<=100;i++){
    let para=document.createElement('p');
    para.textContent="This is Para"+i;
    document.body.appendChild(para);
}
const t2=performance.now()
// STandard way in JS where you can measure the time the code takes to run
// performance.now() method
console.log("total time by code1:"+(t2-t1))

// code 2
 const t3=performance.now()
let mydiv=document.createElement('div')
for(let i=1;i<=100;i++){
    let para=document.createElement('p')
    para.textContent="This is Para"+i
    mydiv.appendChild(para)//no reflow and repaint
}
document.body.appendChild(mydiv)
const t4=performance.now()
console.log("total time by code1:"+(t4-t3))

// Reflow :process of calculating a position,dimension of element that you want to render on page
// Does so much calculations so it is computationally intensive task

// Repaint :process of displaying content or element pixel by pixel.Faster than reflow process

// Whatever we want to display or repaint should take less time
// Whenever we do document.body we need to do reflow and repaint of that element so that we can add that element on the UI


// Document Fragment
// light weight document object
// Advantage of this is whenever you add (append) something .it doesnot reflow or repaint
// best code
let fragment=document.createDocumentFragment();
for(let i=1;i<=100;i++){
let para=document.createElement('p')
para.textContent="This is para"+i+1;
fragment.appendChild(para)//no reflow and repaint
}
document.body.appendChild(fragment)
// code 2 and best code we can use any one