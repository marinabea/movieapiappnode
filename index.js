const searchBar = document.querySelector('.search-bar');
var mediaName;


searchBar.addEventListener('keydown', event => {
  if(event.keyCode == 13) {
    mediaName = searchBar.value;
    //console.log(mediaName);
  }
});
