const employee = {
          calculateTax(){
                    console.log("tax rate is 10%");
          }
};

const karanArjun = {
          salary : 5000,
          calculateTax(){
                    console.log("tax rate is 20%");
          }
};

karanArjun.__proto__  = employee     //used to set a prototype(reference to an object)
