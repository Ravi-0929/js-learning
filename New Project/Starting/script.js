// const h1t = document.getElementById("h1t");
// const input = document.getElementById("input");
// const btn =
// const data =  document.getElementById("btn").onclick = document.getElementById("input").value;
// const change =  document.getElementById("h1t").textContent = `Hello ${data}`;
// console.log(change);





// without storing the tag in variables i directly access the h1 tag and on that i use event called click and when it 
//will click one function will run and in that the content of h1 tag will replace by input value

// document.getElementById("btn").onclick = function (){
//     document.getElementById("h1t").textContent =  `Hello ${document.getElementById("input").value}`;
// }



//CALCULATE THE CIRCUMFERENCE OF THE CIRCLE

//  const btn = document.getElementById("btn");
//  const input = document.getElementById("input");
//  const lbl = document.getElementById("lbl");
//  const PI = 3.1428;
//  let circumference;
//  btn.onclick = function(){
//      let radius = Number(input.value);
//      circumference = 2*PI*radius;
//      lbl.textContent = circumference;
//      console.log(circumference);
//  }

// ANOTHER WAY;

// let pi = 3.1428;
// let circumference;

// document.getElementById("btn").onclick = function(){
//     let radius = Number(document.getElementById("input").value);
//     circumference = 2*pi*radius;
//     document.getElementById("lbl").textContent = circumference;
// }