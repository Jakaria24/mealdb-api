const searchFood = () => {
   const searchField = document.getElementById('search-field')
   const searchText = searchField.value 
   searchField.value = '';
   if(searchText==''){

   }
   else{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res=>res.json())
    .then(data =>displayResult(data.meals))
   }
}

const displayResult = meals =>{
    const displayFood = document.getElementById('all-food')
    displayFood.textContent ='';
    meals.forEach(meal => {
        // console.log(meal)
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML=`
        <div onclick ="mealDetails(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
          </div>
        </div>
        `
        displayFood.appendChild(div);
    });
}

const mealDetails = mealId =>{
    // console.log(mealId)
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res =>res.json())
    .then(data =>mealDetail(data.meals[0]))
}

const mealDetail = meal=>{
    // console.log(meal)
    const mealDetail = document.getElementById('food-details')
    mealDetail.textContent='';
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML=`
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
           <h5 class="card-title">${meal.strMeal}</h5>
           <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
          <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>`
        mealDetail.appendChild(div)
}