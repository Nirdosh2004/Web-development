let heroes = ["Iron" , "sktiman" , "Spiderman" , "Thor" , "Captain America" , "Hulk" , "antman"];
let i = 0;
let n = heroes.length;


// for(i=0 ; i<n;i++){
//           console.log(heroes[i]);
// }

while(i<n){
          console.log(heroes[i]);
          i++;
}

// do{
//           console.log(heroes[i]);
//           i++;
// }while(i<n);

for(let hero of heroes){
          console.log(hero.toUpperCase());
}
