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
    $('#results').append('<li><a href="'+data['results'][1-50]['trackViewUrl']+'">' +
    data['results'][0]['trackName'] + '</a></li>');
    $('#results').append('<li><a href="'+data['results'][0]['previewUrl']+'">' + '</a></li>');
  });

  e.preventDefault();
});

function clearText() {
  document.getElementById('results').value = "";
}
$('#artistname').on('focus', function(){
  console.log('It works!');
})
