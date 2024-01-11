console.log("hello world again");
let varA = 55;
let varB = "start";
console.log("a + b : " , 4+2);
console.log("a % b : " , 4 % 3);
console.log("a ^ b : " , 4**2);
let i = 1;
i++;
console.log(++i); //pre 

let age = 17 ;
if(age > 18){
          console.log("You are older");
}
else if(age == 12){
          console.log("you are perfect");
}
else {
          console.log("you are younger");
}

let mode = "dark";
let color;
if(mode == "dark"){
          color = "black";
}
else if(mode == "light"){
          color = "white";
}
else{
          color = mode;
}
console.log(color);

let apple = 16;
 apple > 18 ?console.log( "adult") : console.log("not adult") ;
alert("hello");
let myName = prompt("hello\\");
console.log(myName);
let number = prompt("Enter a number");
if(number % 5 === 0){
          console.log("multiple of 5");
}
else{
          console.log("not multiple of 5");
}

let grades = prompt("Enter you marks : ");
if(grades >= 80 && grades <= 100){
          console.log("A");
}
else if(grades >= 70 && grades <= 89 ){
          console.log("B");
}
else if(grades >= 60 && grades <= 69){
          console.log("C");
}
else if(grades >= 50 && grades <= 59  ){
          console.log("D");
}
else{
          console.log("Fail");
}
