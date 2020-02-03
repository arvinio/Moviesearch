// selecting page element

const submit = document.getElementById('submit')
const responseField = document.getElementById('responseField')
const table = document.getElementById('table')
const movieTitle = document.getElementById('title')
const popup = document.getElementById('popup')
const popupWraper = document.getElementById('popupWraper')

submit.onclick = () => onSearch()
//sortMyVoteCount.onclick = ()=> sortVoteAverage

// create element in html then attach onclick to it

function sortVotecount(arr) {
  table.innerHTML = ''
  arr.sort((a, b) => {
    return a.vote_count > b.vote_count ? -1 : 1
    console.log(arr)
  })
  return displayResults(arr)
}

function sortVoteAverage(arr) {
  table.innerHTML = ''
  arr.sort((a, b) => {
    return a.vote_average > b.vote_average ? -1 : 1
    console.log(arr)
    table.innerHTML = ''
  })
  return displayResults(arr)
}

function releaseDate(arr) {
  table.innerHTML = ''
  arr.sort((a, b) => {
    let newDate = Date.parse(a.release_date)
    let newDate2 = Date.parse(b.release_date)
    return newDate > newDate2 ? -1 : 1
    console.log(arr)
    table.innerHTML = ''
  })
  return displayResults(arr)
}

// helper function
function displayResults(arr) {
  return arr.map(subarr => {
    console.log(subarr.poster_path)
    if (!subarr.poster_path) return
    const posterLink = `http://image.tmdb.org/t/p/w185//${subarr.poster_path}`

    let newItem = document.createElement('img')
    // newItem.addEventListener('click', () => onClickPoster(subarr.overview))
    newItem.src = posterLink
    table.appendChild(newItem)

    const sortMyVoteCount = document.getElementById('sortButton')
    sortMyVoteCount.addEventListener('click', () => sortVotecount(arr))
    /*let titleBelow= document.createElement('span');
titleBelow.innerHTML= titleLink;
movieTitle.appendChild(titleBelow);*/
    //  3 spearate array.sort
    // console.log each
    // on click
    // change the release date string to a number using
    //new Date("2012-01-11").getTime()
    //const titleLink= `${result.title}`

    // 1. when you click on the poster then log to the console.
    //2. get the movie overview info
    //3. create an empty pop up
    //4. add movie overview info to the pop up
    // 5. animate the pop up
    //6 close the pop when clicking outside
  })
}

/*function onClickPoster(plot) {
  // show info
  popup.innerHTML = plot
  popupwraper.style.display = 'block'
  popupwraper.classList.add('animated', 'fadeIn')
  popup.classList.add('animated', 'fadeIn')
  // popupwraper.style.display = 'flex'
  popupwraper.onclick = () => {
    console.log('hi')
    popupwraper.style.display = 'none'
  }
}*/
// in display

//add the animated class to the popupwrapper
//set onclick for the popup wrapper

// get information

fetch(
  'https://api.themoviedb.org/3/movie/popular?api_key=3e12504afe592b359b01ff7d91ac166f&language=en-US&page=1'
)
  .then(function(response) {
    return response.json()
  })
  .then(function(myJson) {
    // console.log(myJson);
    const {results} = myJson
    console.log(results)
    return displayResults(results)
  })

function onSearch() {
  const inputField = document.getElementById('input')
  const wordQuery = inputField.value
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=3e12504afe592b359b01ff7d91ac166f&language=en-US&query=${wordQuery}&page=1&include_adult=false`
  )
    .then(function(response) {
      return response.json()
    })
    .then(function(myJson) {
      const {results} = myJson
      console.log(results)
      table.innerHTML = ''
      return displayResults(results)
    })
}
