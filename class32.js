// Window obj is global object which is highest in hierarchy
// window.open()
// all global variables all global methods lie under this window
// the visible browser window can be controlled by window object
// window object is created by browser

// DOM:(Document Object Model) Tree-like structure (ALL the elements are arranged in the form of trees)
// The HTML code is converted to JS object.That JS object is called document.
// In console write "document"
// characters -->tags -->token (tokenizer)--> node
// Many nodes together creates DOM
// Characters → Tags
// The browser receives HTML as a string of characters.

// Tags → Tokens (Tokenizer)
// The HTML tokenizer breaks this string into meaningful tokens:

// Start tags (<div>)

// End tags (</div>)

// Text (Hello)

// Attributes (class="box")

// Tokens → Nodes (Parser)
// The HTML parser consumes tokens and creates nodes:

// Element nodes

// Text nodes

// Comment nodes

// Nodes → DOM Tree
// These nodes are connected into a tree structure called the DOM (Document Object Model), which the browser uses to render the page and enable scripting.


// BOM (Browser Object Model)
// The interaction with browser other than HTML content all those interactions comes in BOM
// Accessing the elements with the help of ID, className, TagName
// In response we can take :single output , multiple output

let mydiv=document.querySelector('#mydiv')
let newElement=document.createElement('span')
newElement.textContent="This is aarya"
mydiv.insertAdjacentElement('beforebegin',newElement)

// Removal of Child
let parent= document.querySelector('#mydiv')
let child =document.querySelector('#fparass')
parent.removeChild(child);
// let parent=child.parentElement?
// let child = document.querySelector('#fparass');
// let parent = child.parentElement;
// parent.removeChild(child);
