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
  console.log(data);
  console.log("Title:\t" + data.Title);
  console.log("Year:\t" + data.Year);
  console.log("Plot:\t" + data.Plot);
}

