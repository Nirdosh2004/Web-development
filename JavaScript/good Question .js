//for a given array with price of 5 items  , change items have an offer of 10% OFF on them . 
//change the array to store final price after applying offer . 

let beforeDiscountPrice = [250 , 645 , 300, 900 , 50];
let n = beforeDiscountPrice.length;
let i = 0;
let ans = 0;
while(i<n){
          ans = beforeDiscountPrice[i]/10;
          beforeDiscountPrice[i] -= ans;
          console.log(`value at index : ${i} = ${ans}`);
          i++;
}

console.log(beforeDiscountPrice);
