
addListener('#submitForm', 'submit', function(event) {
  event.preventDefault();
  var endpoint = "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_artist=";
  var form = event.target;
  var singer = form.querySelector('input[name=name]').value;
  var s =singer;
  singer = singer.replace(/ /g, '%20');
  var form = event.target;
  var apiKey = "&apikey=547631ad01eec50f795c47471f724f80";
  var url = endpoint + singer + apiKey+"&s_track_rating=desc";
  fetch(url, function(response) {
    document.getElementById("song").innerHTML = "";
    if (singer.trim() != "") {



      document.getElementsByClassName("number")[0].innerHTML = "Top 10  songs for \"" + s + "\"";

      var msg = response.message.body.track_list;
      var songs = msg.map(function(x) {
        return x.track.track_name;
      });
      songs.forEach(function(element, i) {
        var ul = document.getElementById('song');
        var li = document.createElement('li');
        var a = document.createElement('a');
        linksyoutube(element, singer, function(msg) {
          a.setAttribute("href", msg);
          a.setAttribute("target","blank")
        });
        var songname = document.createTextNode(element);
        a.appendChild(songname);

        li.appendChild(a);
        ul.appendChild(li);

      })
    } else {
      alert("Write a name of a singer");
    }

    form.querySelector('input[name=name]').value = "";
  });
});
