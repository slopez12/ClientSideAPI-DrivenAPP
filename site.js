var data;
var num=0;
$('#artistform').on('submit', function(e) {
  var artist = $('#inputtext').val();
  var url = 'https://itunes.apple.com/search?term=' + artist;
  $.get(url, function(data) {
    var aristinfo = data.item[0].artistinfo;
    $('results').append('<li><a>')

  e.preventDefault();
}});
