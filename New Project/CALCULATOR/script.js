const input = document.querySelector("#input");
const buttons = document.querySelectorAll(".main button");
 
buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        const value =  button.getAttribute("data-value") || button.innerText;

        if(button.id === "ac"){
            input.value = "";
        }else if(button.id === "cross"){
            input.value =  input.value.slice(0 , -1);
        }else if(button.id === "equal"){
            try{
                input.value = eval(input.value.replace(/×/g, '*').replace(/÷/g, '/'));
            }catch{
                    input.value = "ERROR";
            }
        }else{
            input.value += value;
        }
    });
});
