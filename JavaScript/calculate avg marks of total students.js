let students = [85 , 97 ,44 , 37, 76,60];
let sum = 0;
let n = students.length;
let i = 0;
while(i<n){
          sum += students[i];
          i++;
}
console.log(`Total marks of students : ${sum}`);
let average = sum/n;
console.log(`Average marks : ${average}`);
