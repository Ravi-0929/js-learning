const btn = document.getElementById("btn");
const input = document.getElementById("lbl");
const faceses = document.querySelectorAll(".one, .two, .three, .four, .five, .six");
let randomNum;
let max = 6;
let min = 1;
btn.onclick = function(){
    randomNum = (Math.floor(Math.random() * max) + min);
    input.textContent = randomNum;

    faceses.forEach(face =>{
       face.style.opacity = "0.5";
    })


    let selectedFace;
    if( randomNum === 1){
        selectedFace = document.querySelector(".one");
    }else if( randomNum === 2){
        selectedFace = document.querySelector(".two");
    }else if( randomNum === 3){
        selectedFace = document.querySelector(".three");
    }else if( randomNum === 4){
        selectedFace = document.querySelector(".four");
    }else if( randomNum === 5){
        selectedFace = document.querySelector(".five");
    }else{
        selectedFace = document.querySelector(".six");
    }

    if(selectedFace){
        selectedFace.style.opacity = "1";
    }

}