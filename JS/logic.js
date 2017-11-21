/* let's go! */


function addListener (selector, eventName, callback) {
  console.log("hi") ;
  document.querySelector(selector).addEventListener(eventName, callback);//3callback
}

function fetch (url, callback) {

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {

    if (xhr.readyState == 4  && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      //7
      return callback(response);
    }
  };
 console.log("hi") ;
  xhr.open('GET', url);
  xhr.send();
}

// 1
addListener('#submitButton', 'submit', function (event) { //4 function(event)
  var endpoint = "http://api.musixmatch.com/ws/1.1/track.search?q_artist=";
  var singer = event.target[0].value;
  var apiKey = "&apikey=547631ad01eec50f795c47471f724f80" ;
  var url =  endpoint + singer + apiKey ;
  console.log(url) ;
  //http://api.musixmatch.com/ws/1.1/track.search?q_artist=selena&apikey=547631ad01eec50f795c47471f724f80
// 5
  fetch(url, function (response) {//8 response
      // ... do something with the response
        console.log(url) ;
  });
});
