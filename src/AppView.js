var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);
  },

  id : "container",
  header: "<div id='header'> MyTunes </div>",
  footer: "<div id='footer'> *Click on a song to add it to the Queue </div>",

  render: function(){
    return this.$el.html([
      this.header,
      this.playerView.$el,
      new LibraryView({collection: this.model.get('library')}).render(),
      new SongQueueView({collection: this.model.get('songQueue')}).render(),
      this.footer
    ]);
  }

});
