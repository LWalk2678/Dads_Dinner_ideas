

// const BASE_URL = `https://api.spoonacular.com/recipes/complexSearch?&${input}&apiKey=${API_KEY}`



const searchButton = document.querySelector('button');

searchButton.addEventListener('click', () => {
  console.log("search button clicked");
  const input = document.getElementById('blank').value;

  const API_KEY = '43b709665eea4cd3ab3f107fb001007f';

  const BASE_URL = `https://api.spoonacular.com/recipes/complexSearch?&${input}&apiKey=${API_KEY}`;

  const Ing_URL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${input}&number=20&apiKey=${API_KEY}`;

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

    document.querySelector('.meal-list').append(mealData);
  })
}