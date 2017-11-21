/* let's go! */

function addListener (selector, eventName, callback) {
  console.log("hi");
  document.querySelector(selector).addEventListener(eventName, callback);//3callback
}

function fetch (url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function () {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
    }
    else {
      console.log('Status Code: ' + xhr.status);
    }
  });
  xhr.open('GET', url);
  xhr.send();
}

addListener('#submitButton','submit', function (event) {
  event.preventDefault() ; 

  var endpoint = "http://api.musixmatch.com/ws/1.1/track.search?q_artist=";
  var form = event.target;
  // console.log(form);
  var singer = form.querySelector('input[name=name]').value;
  // console.log(singer);
  var apiKey = "&apikey=547631ad01eec50f795c47471f724f80" ;
  var url =  endpoint + singer + apiKey ;
  // console.log(url) ;
  //http://api.musixmatch.com/ws/1.1/track.search?q_artist=selena&apikey=547631ad01eec50f795c47471f724f80
// 5
  fetch(url, function (response) {//8 response
      // ... do something with the response
        console.log(url) ;
  });
});
