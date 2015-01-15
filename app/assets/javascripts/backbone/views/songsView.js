App.Views.SongsView = Backbone.View.extend({
  el: '#library',

  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'reset', this.render);
  },

  render: function() {
    this.$el.empty();
    this.collection.each(this.renderSong, this);
  },

  renderSong: function(song) {
    var songView = new App.Views.SongView({ model: song });
    this.$el.append(songView.$el);
  }
});
