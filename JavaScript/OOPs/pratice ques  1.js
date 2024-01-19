let data = "secret information"

class user{
        constructor(name , email){
          this.name = name;
          this.email = email;
        }
          viewData(){
                    console.log("data is leaked : " , data);
          }
};

let student1 = new user("Nirdosh" , "nirdoshkushwaha75@gamil.com")
let student2 = new user("Rishabh" ," abc@gamil.com");
let teacher1 = new user("dean" , "dean@gmail");

console.log(student1.email);
console.log(student2);
