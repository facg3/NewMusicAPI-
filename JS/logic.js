function addListener(selector, eventName, callback) {
  document.querySelector(selector).addEventListener(eventName, callback); //3callback
}

function fetch(url, callback) {
  if (singer.trim() != ""){
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function() {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      callback(response)
    } else {
      console.log('Status Code: ' + xhr.status);
    }
  });
  xhr.open('GET', url);
  xhr.send();
} else {
  alert("Enter a name of a singer.")
}
}

function linksyoutube(str, singer, cb) {
  event.preventDefault();
  str += singer;
  str = str.replace(/ /g, '%20');
  var endpoint = "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/search?q=" + str;
  console.log(endpoint);
  var apiKey = "&maxResults=1&part=snippet&key=AIzaSyAF-Dke9dKBWXWuIKFkaIaEtgxtkLiftiI";
  var url = endpoint + apiKey;
  fetch(url, function(response) {
    var msg = "https://www.youtube.com/watch?v=" + response.items[0].id.videoId;
    cb(msg)
  });

}


if (typeof module !== 'undefined') {
  module.exports = [addListener,fetch,linksyoutube]
}
