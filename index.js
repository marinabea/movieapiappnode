const searchBar = document.querySelector('.search-bar');
const apiURL = 'http://www.omdbapi.com/?apikey=b78d8af3&';
const Http = new XMLHttpRequest();
let apiRequestResult;
var mediaName;


searchBar.addEventListener('keydown', event => {
  if(event.keyCode == 13) {
    mediaName = searchBar.value;
    getMediaInformationFromAPIWithTitle
    apiRequestResult = getMediaInformationFromAPIWithTitle(mediaName);
  }
});


function getMediaInformationFromAPIWithTitle(mediaName) {
  let urlWithQuery = apiURL + 't=' + mediaName;
  Http.open("GET", urlWithQuery);
  Http.send();

  Http.onreadystatechange = function(){
    if (this.readyState==4 && this.status==200) {
      console.log(Http.responseText);
      return Http.responseText;
    }
  }
}


