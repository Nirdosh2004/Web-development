// function sum(a,b){
//           console.log("2");
//           console.log(a+b);
// }

function calc(a,b , sum){
          console.log("1"); //second execution
          sum(a,b);


}
console.log("0");  //execute first
calc(1,2,(a,b) => { 
          console.log(a+b); //third execution
});
