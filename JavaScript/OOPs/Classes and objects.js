class person{
          constructor(name){
                    this.name = name;

                    console.log("parent constructor called");
          }
          work(){
                    console.log("sleep");
          }
          eat(){
                    console.log("eat");
          }
};

class engineer extends person {
          constructor(name){
                    
                    super(name) ; //to inveoke parent class constructor
                  
                   
          }
          work(){
                    super.eat();
                    console.log("solve problem - build something");
          }
};


let hello = new engineer("Nirdosh");
console.log(hello.work());



