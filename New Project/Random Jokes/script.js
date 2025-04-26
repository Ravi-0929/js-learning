const input = document.querySelector("#text");
const btn = document.querySelector("#btn");
let box;

let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single ";
let getjoke = ()=>{
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        if(!box){
            box = document.createElement("div");
            box.id = "box";
        
            document.body.appendChild(box);
        }
        box.textContent = item.joke;
    })
    .catch(error =>{
        console.error("failed to fetch:",error);
    });
};

getjoke();

btn.addEventListener("click", ()=> {
    getjoke();
})