let data = "secret information";

class user{
        constructor(name , email){
          this.name = name;
          this.email = email;
        }
          viewData(){
                    console.log("data is leaked : " , data);
          }
};

class Admin extends user {
          constructor(name , email){
                    super(name , email);
          }
          editData(){
                    data = "some new value";
          }
};

let admin1 = new Admin("admin1" , "admin@gmail.com");
console.log(admin1.viewData());
