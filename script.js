

// const BASE_URL = `https://api.spoonacular.com/recipes/complexSearch?&${input}&apiKey=${API_KEY}`



const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log("working");
  const input = document.getElementById('blank').value;
  // const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${input}`;
  //const BASE_URL = `https://api.spoonacular.com/recipes/complexSearch?&${input}&apiKey=${API_KEY}`;

  const API_KEY = '43b709665eea4cd3ab3f107fb001007f'

  const Ing_URL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${input}&number=5&apiKey=${API_KEY}`;

  console.log(Ing_URL);

  fetch(Ing_URL)
    .then((results) => {
      return results.json();
    })
    .then((resultsJson) => {
      console.log(resultsJson);
      renderList(resultsJson)
    })
    // .catch((error) => {
    //   console.log(`ERROR: ${error}`);
    // })
})
console.log("hi");

const renderList = (mealList) => {
  document.querySelector('.meal-list').innerHTML = '';
  mealList.forEach(meal => {      

    const mealData = document.createElement('div');
    mealData.classname = 'mealData'

    const mealTitle = document.createElement('h4')
      mealTitle.innerText = meal.title
      mealData.append(mealTitle)

    const mealID = document.createElement('h5')
      mealID.innerText = meal.id
      mealData.append(mealID)

    const mealPic = document.createElement('img')
      mealPic.src = meal.image
      mealData.append(mealPic)
    // document.querySelector('.movie-list').append(moviePoster);

    document.querySelector('.meal-list').append(mealData);
  })
}