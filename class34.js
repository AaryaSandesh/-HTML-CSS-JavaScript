// Browser Events
// Events is just like an anouncement
// window ke upar click kiya toh woh ek event ho gaya , mouse ke dwara key press ki 
// if we want to see events : monitorEvents(document)
// if we do not want to see events : unmonitorEvents(document)

// Event Target :
// entity where our event is received
// There is a posibility that we have applied event listener or event handler there

// Eg]clicking the btn : isa event
// btn is event-target
// click krne ke baad btn kya action perform kr dega .That action is written near one location that location is called event listener

// elements : addEventListener() , removeEventListener()
// Syntax : <event-target>.addEventListener(<event-type>,<function->action>)

// function changeText(){
// let fpara=document.getElementById('fpara');
// fpara.textContent="Hello Aarya";
// }

// let fpara =document.getElementById('fpara');
// fpara.addEventListener('click',changeText);

// fpara.addEventListener('click',function(){
//   let fpara=document.getElementById('fpara');
// fpara.textContent="Hello Aarya";  
// })
// This is not that efficient way as remove function needs same object as that of add function
// And the above will not provide the same object

// To remove the event listener
// fpara.removeEventListener('click' ,changeText)

// Phases of an event
// 1]Capturing Phase
// 2]At-Target
// 3]Bubbling phase
{/* <div>
    <article>
        <h1> </h1>
        <p>   </p>
    </article>
</div> */}
// if we make a click event when clicked on "p".The event will travel from div upto p : Thats capturing phase
// When we reach "p" we say we are "at-target" 
// when we travel backwords until u reach a root element thats bubbling phase

// addEventListener() is bydefault applied at bubbling phase
// Capturing phase value if sent "true" the addEventListener() will be applied in capturing phase
// The value is called useCaptureValue;

// const outer=document.getElementById('outer')
// const middle=document.getElementById('middle')
// const inner=document.getElementById('inner')
// outer.addEventListener('click',function(){
//     console.log('Cpaturing phase');
// },true);

// Event Object
// Listener functions gets event
// Jab bhi kadbhi event trigger hoga toh  event ka jo object hain woh listener ko mil jata hain

// function changeText(event){
//     console.log(event); //Jo event yaha pr aaya hain woh click event hain

//     let fpara=document.getElementById('fpara');
//     fpara.textContent="Aarya"
// }
// let fpara=document.getElementById('fpara');
// fpara.addEventListener('click',changeText)
// fpara.removeEventListener('click',changeText);


// Default Action
// Changing the default behaviour of anchor tag
// let anchorElement=document.getElementById('fanchor')
// anchorElement.addEventListener('click',function(event){
//      event.preventDefault();//anchor tag ka default behaviour remove ho jayega
//      anchorElement.textContent="Click done Hain"
// })

// Avoiding too many Listeners
function alertPara(){
    // alert("You have clicked" + event.target.textContent)
    // target element  jo humne click kiya hain uska content
    // first pe click kiya toh "p" target ban gaya , "f para" pe click kiya toh span target ban gaya

    // If we want ki sirf span pe click krne pr alert dikhe
    if(event.target.nodeName==='SPAN'){
        alert("You have clicked" + event.target.textContent)
    }
}
let paras=document.querySelectorAll('p')
for(let i=0;i<paras.length;i++){
  let para=paras[i];
// para.addEventListener('click',function(){
//     alert("You have Clicked"+i);
// })-- not a good practice
para.addEventListener('click',alertPara)
}

// we can add listener with div which will avoid redundancy
// let mydiv=document.getElementById('wrapper');
// document.addEventListener('click',alertPara)

// How we can use DOM ContentLoaded ka use kr sakta hu dynamically to add script??????
// document.addEventListener('DOMContentLoaded', function() {
//     // DOM is fully loaded here
//     // You can safely use getElementById, querySelector, etc.
// });

