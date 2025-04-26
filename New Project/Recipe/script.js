const searchbox = document.querySelector('.input');
const button = document.querySelector('.btn');
const container = document.querySelector('.container');
const recipeContaint = document.querySelector('.recipe-containt');
const closeBtn = document.querySelector('.recipe-close');

const fetchRacepi = async (query) =>{
    container.innerHTML = "Loading...";
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s= ${query}`);
    const response = await data.json();


    container.innerHTML = " ";
    response.meals.forEach(meal => {
        const recipediv = document.createElement('div');
        recipediv.classList.add('recipe');
        recipediv.innerHTML = `<img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3> 
        <p><span> ${meal.strArea}</span> Dish</p>
        <p>Belongs to <span> ${meal.strCategory}</span>Category </p>

        `
        const button = document.createElement('button');
        button.textContent = "View Recipe";
        recipediv.appendChild(button);

        button.addEventListener('click', ()=>{ 
            recipepopup(meal);
        })


        container.appendChild(recipediv);
    });

    // console.log(response.meals[0]);
}

const fetchIngrediants = (meal) =>{
    let ingredentslist = "";
    for(let i=1; i<=20; i++){
        const ingredents = meal[`strIngredient${i}`];
        if(ingredents){
            const measure = meal[`strMeasure${i}`];
            ingredentslist += `<li>${measure} ${ingredents}</li>`
        }
        else{
            break;
        }
    }
    return  ingredentslist;
}

const recipepopup = (meal) =>{
    recipeContaint.innerHTML = `
    <h2>${meal.strMeal}</h2>
    <h3>Ingredents:</h3>
    <ul>${fetchIngrediants(meal)}</ul>
    `
    recipeContaint.parentElement.style.display = "block";
}

button.addEventListener('click', (e) =>{
    e.preventDefault();
    const searchInput = searchbox.value.trim();
    fetchRacepi(searchInput);

    // alert("Buttton Clicked");
})