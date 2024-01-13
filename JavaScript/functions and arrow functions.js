//functions uses and its parameters and syntax 
function sum(){
          console.log("Welcome ");

}
sum();

//addition of two values
let a = 9 , b = 7;
function add(a ,  b){
          return a+b;
}
console.log(add(a,b));


//factorial of n numbers 
let n = 6;
function factorial(n){
          if(n==0)return 1 ;
          return n *  factorial(n-1) ;
}
console.log(factorial(n));

//sum of n numbers
let ans = 0;
function sumOfNnumbers(n){
         if(n==0)return 0;
         return n + sumOfNnumbers(n-1);
}
console.log(sumOfNnumbers(n));

//arrow function 
let x=9,y=1;
const name = (x,y) => {  //part of modern javaScript
          return x+y;
}
console.log(name(x,y));

