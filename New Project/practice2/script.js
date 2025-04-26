const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const list = document.querySelector(".list");
const listBox = document.querySelector(".list-box");

const fun = ()=>{
    const result = input.value.trim();

    if(result === "") return;
    const li = document.createElement("li");
    li.innerHTML = result;


    li.addEventListener("click", ()=>{
        li.classList.toggle("completed");
    })
    
    const deletBtn = document.createElement("button");
    deletBtn.className = "btn2";
    deletBtn.textContent = "❌";

    deletBtn.addEventListener("click",()=>{
        li.remove();
    });

    li.appendChild(deletBtn);

    list.appendChild(li);

    input.value = "";

};

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    fun();
})