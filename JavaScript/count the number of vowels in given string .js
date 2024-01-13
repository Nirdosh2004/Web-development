//count the number of vowels in given string 

let s = "apna college";
let ans = 0;
const calculateLength = (s) => {
         for(let i=0;i<s.length;i++){
          if(s[i]==="a" || s[i]==="e" || s[i]==="i" || s[i]==="o"|| s[i]==="u"){
                    ans++;
         }
}

         return ans;
}

console.log(calculateLength(s));
