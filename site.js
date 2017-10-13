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
    $('#results').append('<li><a href="'+data['results'][0]['trackViewUrl']+'">' +
    data['results'][0]['trackName'] + '</a></li>');
    console.log("Artist track URL is " + 'trackViewUrl');
    var trackName = data['trackName'];

    for (var trackName in data) {
     if (data.hasOwnProperty(trackName))
}
    $('#results').append('<li><a href="'+data['results'][0]['previewUrl']+'">' + '</a></li>');
    console.log("Artist's track preview URL is " + 'previewUrl');


  });

  e.preventDefault();
});

$("#clear").on('click', function() {
  console.log("clear when clicked");
})
$('#artistname').on('focus', function(){
  console.log('It works!');
})
