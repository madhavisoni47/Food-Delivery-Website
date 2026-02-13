// import React from "react";

// React.createElement('h1',{key:1})




function  palindumCheck(value){
    let reversed = value.split("").reverse().join("")
    return reversed === value
}

let ans = palindumCheck("madhavi")
console.log(ans)

