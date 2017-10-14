var data;
var num=0;
$('#artistform').on('submit', function(e) {
  console.log("Form submitted!");
  var artistname = $('#artistname').val();
  console.log("Artist name is " + artistname);
  var artist_url = 'https://itunes.apple.com/search?term=' + artistname;
  console.log("Artist URL is " + artist_url);

  $.get(artist_url, function(data) {
    data = JSON.parse(data);
    console.log(typeof(data));
    $('#results').append('<li><a href="'+data['results'][0]['artistViewUrl']+'">' +
    data['results'][0]['artistName'] + '</a></li>');
    console.log("Artist Url is " + 'artistViewUrl');

    var track = data['results']
    for(var i = 0; i < track.length; i++) {
      console.log(track.length);
      $('#results').append('<li><a href="'+track[i]['trackViewUrl']+'">' +
      track[i]['trackName'] + '</a></li>');
      $('#results').append('<li><a href="'+track[i]['previewUrl']+'">' + 'Preview of the song' + '</a></li>');
      console.log("Artist's track preview URL is " + 'previewUrl');
    }



  });

  e.preventDefault();
});

//$("#clear").on('onclick', function() {
//  console.log("clear when clicked");
//})
