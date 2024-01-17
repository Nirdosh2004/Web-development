let but = document.querySelector("#mode");

let currentmode = "light";
but.addEventListener("click" , () => {
         
          if(currentmode=== "light"){
                    currentmode = "dark";
                    document.querySelector("body").style.backgroundColor = "black";
          }else{
                    currentmode = "light"
                    document.querySelector("body").style.backgroundColor = "white";
          }
         console.log(currentmode);
});
