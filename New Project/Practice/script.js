const H = document.querySelector("#H");
const btn = document.querySelector("#btn");
const label = document.querySelector("#label");


let diiv;

btn.addEventListener("click", ()=>{
    if(!diiv){
        diiv = document.createElement("div");
        diiv.id = "container";

        label.innerHTML = "Hello Ravi";
        diiv.appendChild(label);
        document.body.appendChild(diiv);
    }else{
        alert("div already  created");
        
    }
})





// btn.addEventListener("click", ()=>{

    

//     const diiv = document.createElement("div");
//     diiv.id = "container";

//     label.innerHTML = "Hello ravi";
//     diiv.appendChild(label);
//     document.body.appendChild(diiv);
// })

