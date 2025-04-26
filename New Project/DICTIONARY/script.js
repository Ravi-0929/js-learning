const form = document.querySelector("form");
const result = document.querySelector(".result-info");

const getWordInfo = async(word)=>{
    try{
        result.innerHTML = "Fetching data...."
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();
    let definition = data[0].meanings[0].definitions[0];

    result.innerHTML = `
        <h2><strong>word:</strong> ${data[0].word}</h2>
        <p class = "partofSpeech">${data[0].meanings[0].partofSpeech}</p>
        <p><strong>Meaning:</strong> ${definition.definition === undefined? "not found 404" : definition.definition}</p>
        <p><strong>Meaning:</strong> ${definition.example === undefined? "not found 404" : definition.example}</p>
        <p><strong>Antonyms:</strong></p>
    `;

    if(definition.antonyms.length === 0){
        result.innerHTML += `Not Found`;
    }
    else{

        for(let i=0; i<definition.antonyms.length; i++){
            result.innerHTML += `<li>${definition.antonyms[i]}</li>`
        }
    }

    result.innerHTML += `<a href = "${data[0].sourceUrls}" target="_blank">Read More</a>`;
}
catch(error){
    result.innerHTML = `<div><p>Sorry the word not found 404</p></div>`;
}

}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    getWordInfo(form.elements[0].value);
})



























// const input = document.querySelector("#inputtxt");
// const btn = document.querySelector("#btn");
// const result = document.querySelector(".result");

// btn.addEventListener("click", (e)=>{
//     e.preventDefault();
//     result.textContent = input.value;

// })



// async function getWordInfo(word) {
//     const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
//     const data = await response.json();

//     console.log(data);
// }






