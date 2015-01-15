App.Collections.SongsCollection = Backbone.Collection.extend({
  model: App.Models.Song,
  url: '/songs'
})
