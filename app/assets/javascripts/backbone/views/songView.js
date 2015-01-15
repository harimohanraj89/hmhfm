App.Views.SongView = Backbone.View.extend({
  tagName: 'div',
  className: 'song',

  initialize: function() {
    this.template = HandlebarsTemplates['songs/song'];
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  events: {
    'click .song-image': 'playSong'
  },

  playSong: function() {
    console.log(this.model.get('title'));
    App.playerView.setSong(this.model);
  }
});
