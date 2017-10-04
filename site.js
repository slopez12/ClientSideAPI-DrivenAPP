var data;
var num=0;
$('#lyricform').on('submit', function(e) {
  var songtitle = $('#inputtext').val();
  var url = 'http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist=' + 'artist' + '&song=' + songtitle
  $.get(url, function(data) {
    var lyrics = data.item[0].lyrics;
    $('results').append('<li><a>')

  e.preventDefault();
}});
