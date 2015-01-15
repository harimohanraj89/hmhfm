App.Models.Song = Backbone.Model.extend({
  urlRoot: '/songs',
  defaults: {
    genre: '',
    artist: '',
    album_art: '',
    audio_url: '',
    title: ''
  }
});
