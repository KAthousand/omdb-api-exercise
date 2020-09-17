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
  renderList(response.data.Search)
})

const movieDisplay = document.querySelector('.movie-list');

const renderList = movies => {
  removeMovies();
  movies.forEach(movie => {

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

function removeMovies() {
  const removeDiv = document.querySelector('.movie-list')
  while (removeDiv.lastChild) {
    removeDiv.removeChild(removeDiv.lastChild)
  }
}


//////--------------------------------------
  // console.log(response.data.Search)
  // response.data.forEach((movie) => {
  //   console.log(movie.search)
  //   let img = document.createElement('img')
  //   img.src = movie.poster
  // })