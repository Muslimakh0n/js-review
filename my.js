// day 1

function createHelloWorld() {
  return function() {
    return "Hello, World!";
  };
}

// Example usage:
const helloWorldFunction = createHelloWorld();
console.log(helloWorldFunction()); // Output: Hello, World!
// 
for(let x= 2; x<5; x++){
console.log(x);
}


// switch case

let colors = ["red" , "yellow" , "sky blue"]

switch(colors){
  case "red" :
    console.log("Borma kuyasan");
  case "yellow" :
    console.log("Hoy kuyasan");
    case "sky blue" :
      console.log("Ana kuyding"); 

      default:
        console.log("you still alive, congrats!");
  }

// function salomlashish(name) {
//   console.log("Hello " + name +":)");
// }
// let name=prompt("enter your name......")
// salomlashish(name)

function findAverage(array) {
  let x = 0;
  if (array.length === 0) {
    return 0;
  } else {
    for (let i = 0; i < array.length; i++) {
      x += array[i];
    }
    return x / array.length;
  }
}

let array = [1, 2, 3, 4, 5];
console.log(findAverage(array));


// function removeLastEl(str){
//   if (((str.length)-1)==="!") {
//     return str.slice(0,1)
//   }else{
//     return str
//   }
// }

// console.log(removeLastEl("Hello!"));

// solve it, it's not working

function removeLastEl(str) {
  if (str.charAt(str.length - 1) === "!") {
    return str.slice(0, -1);
  } else {
    return str;
  }
}

console.log(removeLastEl("Good Luck!"));

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const span = document.querySelector("span")
  let pat = /^[a-zA-Z]{6,}$/

  form.addEventListener("submit", e => {
    e.preventDefault();
    let inputVal = e.target.email.value 
    if (pat.test(inputVal)) {
      span.textContent="you're welcome"
    }else{
      span.textContent="username should be more than 6 characters"
    }
  });
});


let username = "Gulijon"
let pattern = /^[a-z]{2,}$/
// let result = pattern.test(username)
// console.log(result); //false

let output = username.search(pattern)

console.log(output); // -1


const buttons = document.querySelectorAll("button")
const freeSpace = document.querySelector("#freeSpace")

let arr = Array.form(buttons);

arr.map((item) =>{
  item.addEventListener('click', e =>{
    let val = e.target.textContent;

    switch (val) {
      case 'C':
        
       return
    
      default:
        freeSpace.textContent += val 
        break;
    }
  })
})
 

// print("Hello, World!")  this is python
