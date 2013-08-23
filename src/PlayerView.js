var PlayerView = Backbone.View.extend({

  el: '<audio controls autoplay />',

  initialize: function() {
    var self = this; //CODE 6 to 9 were added in class lecture.
    this.$el.on('ended', function(){
      self.model.ended();
    });
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model.get('url'));
  }

});
