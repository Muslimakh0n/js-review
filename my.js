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

function salomlashish(name) {
  console.log("Hello " + name +":)");
}
let name="enter your name......"
salomlashish(name)