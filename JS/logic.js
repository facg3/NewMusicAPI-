/* let's go! */
// if (typeof require !== 'undefined') {
//   const Youtube = require('youtube-api-get');
//   var youtube= new Youtube('AIzaSyAbyhUuqsmNqY_x___1F-ZPkvZYR4LEkPk');
//
// };
// Get video by id
function addListener (selector, eventName, callback) {

  document.querySelector(selector).addEventListener(eventName, callback);//3callback
}
function fetch (url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function () {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      callback(response)
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
  var singer = form.querySelector('input[name=name]').value;
  var apiKey = "&apikey=547631ad01eec50f795c47471f724f80" ;
  var url =  endpoint + singer + apiKey ;
  fetch(url, function (response) {
    document.getElementById("song").innerHTML = "";
    if (singer.trim() != ""){
    var msg= response.message.body.track_list;
    var songs = msg.map(function(x){
      return  x.track.track_name ;
    });
    songs.forEach(function (element,i) {
      var ul=document.getElementById('song');
      var li=document.createElement('li');
      var a=document.createElement('a');
      linksyoutube(element,singer,function(msg) {
            a.setAttribute("href",msg);
          });
      var songname = document.createTextNode(element);
      a.appendChild(songname);

      li.appendChild(a);
      ul.appendChild(li);

    })
    }  else  {
      alert("Write a name of a singer") ;
    }

form.querySelector('input[name=name]').value="";
  });
});

function linksyoutube(str,singer,cb) {
  event.preventDefault() ;
  str+=singer;
str = str.replace(/ /g, '%20');
  var endpoint = "https://www.googleapis.com/youtube/v3/search?q="+str;
  console.log(endpoint);
  var apiKey = "&maxResults=1&part=snippet&key=AIzaSyAF-Dke9dKBWXWuIKFkaIaEtgxtkLiftiI" ;
  var url =  endpoint +apiKey ;
  fetch(url, function (response) {
    var msg= "https://www.youtube.com/watch?v="+response.items[0].id.videoId;
    cb(msg)
  });

}
