let list  = ["potato" , "onion" , "cauliflower" , "tinda"];
console.log(list);
list.push("chips");
console.log(list);
console.log(list.pop());
console.log(list);
console.log(list.toString()); //converted to string using ,

let junkFood = ["Burger" , " Pizza" , "momos"];

let final = list.concat(junkFood); // for adding two arrays in sequence
console.log(final);

console.log(list.unshift("Mango")); //push at front
console.log(list);
console.log(list.shift()); //pop at front
console.log(list);
