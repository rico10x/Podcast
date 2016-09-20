$( '.dropdown-menu' ).click(function() {
  var week = event.target.text;
  var podcastSrc = event.target.id
  $('#currentWeek').text(week);
  $('#podcastLink').attr('src', 'media' + '/' + podcastSrc + '.mp3');
  var audio = document.getElementById('audio');
  audio.load()
});