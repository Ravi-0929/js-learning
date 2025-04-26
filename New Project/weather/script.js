const input = document.querySelector(".header_input");
const btn = document.querySelector(".btn");
const temp = document.querySelector("#temp");
const detail = document.querySelector("#detail");
const hum = document.querySelector("#hum");
const speed = document.querySelector("#speed");





function checkweather(){
    

}


btn.addEventListener("click",()=>{
    checkweather(input.value);
})







































// function checkweather(){
//     let box2 = document.createElement("div");
//     box2.id = "boox";
//     document.body.appendChild(box2);

//     const result = input.value;
//     box2.textContent = "you entered:" + result;
// }


// btn.addEventListener("click",()=>{
//     checkweather(input.value);
// })



// let box2;
// const result = btn.addEventListener("click", ()=>{
//   box2 = document.createElement("div");
//   box2.id = "boox";
//   document.body.appendChild(box2);

//   const text = input.value;
//   box2.textContent = "You entered:" + text;

// })
// console.log(result);
