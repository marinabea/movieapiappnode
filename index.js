const searchBar = document.querySelector('.search-bar');
const apiURL = 'http://www.omdbapi.com/?apikey=b78d8af3&';
const Http = new XMLHttpRequest();
let mediaItem;
var searchValue;


searchBar.addEventListener('keydown', event => {
  if(event.keyCode == 13) {
    searchValue = searchBar.value;
    apiResult = getMediaInformationFromAPIWithTitle(searchValue);
  }
});


function getMediaInformationFromAPIWithTitle(mediaName) {
  let urlWithQuery = apiURL + 't=' + mediaName;
  fetch(urlWithQuery)
  .then(response => response.json())
  .then(data => showApiResults(data));
}

function showApiResults(data) {
  document.querySelector('.media-item').style.visibility = 'visible';
  document.querySelector('.media-item--img').src = data.Poster;
  document.querySelector('.media-item--title').innerHTML = data.Title;
  document.querySelector('.media-item--year').innerHTML = data.Year;
  document.querySelector('.media-item--plot').innerHTML = data.Plot;
  document.querySelector('.media-item--genre').innerHTML = data.Genre;
}

