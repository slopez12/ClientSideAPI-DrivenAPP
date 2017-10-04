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
    $('#results').append('<li><a href="'+data['results'][0]['artistViewUrl']+'">' + data['results'][0]['artistName'] + '</a></li>');
  });

  e.preventDefault();
});


$('#artistname').on('focus', function(){
  console.log('It works!');
})
