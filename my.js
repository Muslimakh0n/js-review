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

  form.addEventListener("submit", e => {
    e.preventDefault();
    console.log(e.target.email.value); 
  });
});
