App.Views.PlayerView = Backbone.View.extend({
  el: '#player',

  initialize: function() {
    this.template = HandlebarsTemplates['songs/player'];
  },

  render: function() {
    if (this.model) {
      this.$el.html(this.template(this.model.toJSON()));
    }
  },

  setSong: function(song) {
    this.model = song;
    this.listenTo(this.model, 'change', this.render);
    this.render();
  }
});
