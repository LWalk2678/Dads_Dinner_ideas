

// const BASE_URL = `https://api.spoonacular.com/recipes/complexSearch?&${input}&apiKey=${API_KEY}`

//==========DropDown Menu===================

(function () {
  var main = document.getElementById('mainIngredient');
  var beefMeals = {
    meal1: 1063645,
    meal2: 636167,
    meal3: 10000566,
  };
  var chickenMeals = {
    meal1: 1063645,
    meal2: 636167,
    meal3: 10000566,
  };
  
  function pullInfo(selected) {
  const input = document.getElementById('blank').value;

  const API_KEY = '43b709665eea4cd3ab3f107fb001007f';

  const Id_URL = `https://api.spoonacular.com/recipes/${idNum}/information?apiKey=${API_KEY}`;

  console.log("dropdown fuction running");


  fetch(Id_URL)
    .then((results) => {
      return results.json();
    })
    .then((resultsJson) => {
      console.log(resultsJson);
      renderList1(resultsJson)
    })
    // .catch((error) => {
    //   console.log(`ERROR: ${error}`);
    // })
}
  

})




function getMainIngredient(choice) {
  if (choice === 'Beef') {
    return 1063645;
  } else if (choice === 'Chicken') {
    return 715525;
  }

}

const renderList1 = (mealList) => {
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



//=========Search by Ingerdient Section===========
const searchButton = document.querySelector('button');

searchButton.addEventListener('click', () => {
  console.log("search button clicked");
  const input = document.getElementById('blank').value;

  const API_KEY = '43b709665eea4cd3ab3f107fb001007f';

  const BASE_URL = `https://api.spoonacular.com/recipes/complexSearch?&${input}&apiKey=${API_KEY}`;

  const Ing_URL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${input}&number=4&apiKey=${API_KEY}`;

  console.log("Search function running");

  fetch(Ing_URL)
    .then((results) => {
      return results.json();
    })
    .then((resultsJson) => {
      console.log(resultsJson);
      renderList2(resultsJson)
    })
    // .catch((error) => {
    //   console.log(`ERROR: ${error}`);
    // })
})
console.log("hi");

const renderList2 = (mealList) => {
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

