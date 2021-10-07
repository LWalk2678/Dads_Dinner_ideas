// const BASE_URL = `https://api.spoonacular.com/recipes/complexSearch?&${input}&apiKey=${API_KEY}`

//==========DropDown Menu===================

const dropButton = document.querySelector("input");

let main = document.getElementById("mainIngredient");

const dropResults = (easyMeal) => {
  console.log("Dropdown button clicked");
  idNum = main.value;

  console.log(idNum);

  const API_KEY = "43b709665eea4cd3ab3f107fb001007f";
  const Id_URL = `https://api.spoonacular.com/recipes/${idNum}/information?apiKey=${API_KEY}`;
  console.log("dropdown function running");

  fetch(Id_URL)
    .then((results) => {
      return results.json();
    })
    .then((resultsJson) => {
      console.log(resultsJson);
      renderList1(resultsJson);
    })
    .catch((error) => {
    console.log(`ERROR: ${error}`);
  })
};
console.log("dropdown function done");

const renderList1 = (mealList) => {
  document.querySelector(".meal-list").innerHTML = "";
  
  const mealData = document.createElement("div");
  mealData.classname = "mealData";

  const mealTitle = document.createElement("h4");
  mealTitle.innerText = mealList.title;
  mealData.append(mealTitle);

  const mealPic = document.createElement("img");
  mealPic.src = mealList.image;
  mealPic.className = "mealPhoto";
  mealData.append(mealPic);

  const mealInst = document.createElement("p");
  mealInst.innerText = mealList.instructions;
  mealInst.className = "Fred";
  mealData.append(mealInst);

  document.querySelector(".meal-list").append(mealData);
};

//=========Search by Ingerdient Section===========
const searchButton = document.querySelector("button");

searchButton.addEventListener("click", () => {
  console.log("search button clicked");
  const input = document.getElementById("blank").value;

  const API_KEY = "43b709665eea4cd3ab3f107fb001007f";

  const BASE_URL = `https://api.spoonacular.com/recipes/complexSearch?&${input}&apiKey=${API_KEY}`;

  const Ing_URL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${input}&number=6&apiKey=${API_KEY}`;

  console.log("Search function running");

  fetch(Ing_URL)
    .then((results) => {
      return results.json();
    })
    .then((resultsJson) => {
      console.log(resultsJson);
      renderList2(resultsJson);
    })
    .catch((error) => {
    console.log(`ERROR: ${error}`);
  })
});
console.log("hi");

const renderList2 = (mealList) => {
  document.querySelector(".meal-list").innerHTML = "";
  mealList.forEach((meal) => {
    const mealData = document.createElement("div");
    mealData.classname = "mealData";

    const mealTitle = document.createElement("h4");
    mealTitle.innerText = meal.title;
    mealData.append(mealTitle);

    const mealPic = document.createElement("img");
    mealPic.src = meal.image;
    mealData.append(mealPic);

    const mealID = document.createElement("h5");
    mealID.innerText = "Meal Id #: " + meal.id;
    mealData.append(mealID);

    document.querySelector(".meal-list").append(mealData);
  });
};
