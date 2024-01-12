let companies = ["Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"];
console.log(`first removed company : ${companies.shift()}`);

let replace = companies.splice(2,1,"ola");
console.log(companies);

console.log(`at last : ${companies.push("amazon")}`);
console.log(companies);
