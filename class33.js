// Changing CSS using JS
// .style property : we can get nline style and its properties
// let para=document.getElementById('spara');
// para
// console.log(para.style) ;
// para.style.backgroundColor='blue';
// para.style.color='white';
// style ek wakt ek hi element property ko pakad pata hain

// .cssText
// we can access multiple inline styles, set them
// let second=document.getElementById('sdiv');
// second
// second.style.cssText
// second.style.cssText="background-color:black;color:white;padding:0.5rem"

// setAttribute
// let first=document.querySelector('#fdiv');
// first
// first.setAttribute('class','divClass')
// first
// first.setAttribute('class','secondDivClass')
// first
// The first created divClass will be replaced by secondDivClass 
// we can also set style using setAttribute
// first.setAttribute('style',"padding:0.1rem") ---isse jo pehle wala style tha pura ka pura hat gaaya and only padding:0.1rem is done

// .className
// let fpara=$0
// fpara
// fpara.className
// fpara.className="Gohan  BulBul"
// fpara.className
// The classes gets updated 

// .classList
// we can get classes in the form of arrays
// let fpara=document.querySelector('#fpara')
// fpara
// fpara.classList
// add
// fpara.classList.add('thirdClass')
// fpara.className
// remove
// fpara.classList.remove('firstClass')
// fpara.className
// toggle
// fpara.classList.toggle('secondClass');
// fpara.classList //agar fpara ke andar second class present hain toh usko hata diya jayega
// fpara.classList.toggle('secondClass'); //agar secondClass present nhi hain toh usko add kiya jayega

// contain
// fpara.classList.contains('firstClass')
// checking if the class is present 