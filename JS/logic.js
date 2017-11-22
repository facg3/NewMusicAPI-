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
  // console.log(url) ;
  //http://api.musixmatch.com/ws/1.1/track.search?q_artist=selena&apikey=547631ad01eec50f795c47471f724f80
// 5
  fetch(url, function (response) {
    document.getElementById("song").innerHTML = "";
    if (singer.trim() != ""){
    var number = document.getElementsByClassName("songsnumb")[0].value;
    if (number > 10){
      number = 10;
      document.getElementsByClassName("songsnumb")[0].value = 10;
    }

    document.getElementsByClassName("number")[0].innerHTML = "Top " + number + " songs for \"" + singer + "\"";
    var msg= response.message.body.track_list;
    console.log(msg);
    // var arr =[];
    // for (var i in msg){
    //   arr.push(msg[i].track.track_name);
    //   }
    var songs = msg.map(function(x){
      return  x.track.track_name ;
    });
    console.log(songs);

    for (var i = 0; i < songs.length; i++) {
      if(i>=number){break;}
      else{
      var ul=document.getElementById('song');
      var li=document.createElement('li');
      var a=document.createElement('a');
      a.setAttribute("href","#");
      var song=songs[i];
      var songname = document.createTextNode(song);
      a.appendChild(songname);
      li.appendChild(a);
      ul.appendChild(li);

    }}


    }  else  {
      alert("Write a name of a singer") ;
    }
form.querySelector('input[name=name]').value="";
  });
});
