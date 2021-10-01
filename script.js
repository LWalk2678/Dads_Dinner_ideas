

// const BASE_URL = `https://api.spoonacular.com/recipes/complexSearch?&${input}&apiKey=${API_KEY}`
const API_KEY = '43b709665eea4cd3ab3f107fb001007f'

// https://api.spoonacular.com/recipes/complexSearch?&pasta&apiKey=43b709665eea4cd3ab3f107fb001007f

button.addEventListener(('click'), () => {
  const input = document.getElementById('blank').value;
  // const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${input}`;
  const BASE_URL = `https://api.spoonacular.com/recipes/complexSearch?&${input}&apiKey=${API_KEY}`
  // const IMG_URL = `http://img.omdbapi.com/?apikey=${API_KEY}&s=${input}`

  fetch(BASE_URL)
    .then((results) => {
      return results.json();
    })
    .then((resultsJson) => {
      console.log(resultsJson);
      renderList(resultsJson.Search)
    })
    .catch((error) => {
      console.log(`ERROR: ${error}`);
    })
})