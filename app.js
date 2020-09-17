const DOMAIN = 'http://www.omdbapi.com/';
const API_KEY = 'afd8eb3c'
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;

//Grabbing classes and ids.
const input = document.querySelector('#blank');
const button = document.querySelector('#search');

// Add event listener to button
button.addEventListener('click', async () => {
  let userInput = input.value;
  const response = await axios.get(`${BASE_URL}s=${userInput}`)
  console.log(response);
  renderList(response.data.Search) // very important. Get the search array inside the data.
})


const movieDisplay = document.querySelector('.movie-list');
// get the section from the html

const renderList = movies => { // call a function to loop through each movie the search calls up
  removeMovies(); // 86 any movies from previous searches.
  movies.forEach(movie => {

    // for each movie pulled in from the search, create an element to contain a title h3, a year p, a movie poster img.
    // then append elements to div container, append those to movie list section from html.

    const movieContainer = document.createElement('div');
    movieContainer.className = 'movie-container'

    const title = document.createElement('h3');
    title.innerHTML = `${movie.Title}`;
    movieContainer.appendChild(title);

    const year = document.createElement('p');
    year.innerHTML = `${movie.Year}`
    movieContainer.appendChild(year)

    if (movie.Poster !== 'N/A') {
      const poster = document.createElement('img');
      poster.src = `${movie.Poster}`
      movieContainer.appendChild(poster)
    }

    movieDisplay.appendChild(movieContainer);
  })
}

// write a function to clear the movies when you do another search.

function removeMovies() {
  const removeDiv = document.querySelector('.movie-list')
  while (removeDiv.lastChild) {
    removeDiv.removeChild(removeDiv.lastChild)
  }
}
