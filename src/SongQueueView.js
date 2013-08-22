var SongQueueView = Backbone.View.extend({

  initialize: function(){
     var that = this;    
     this.collection.on("add", function(){
       that.render();
     });

     this.collection.on("remove", function(){
       that.render();
     });
  },

  tagName: "table",

  render: function() {

    this.$el.children().detach();

    return this.$el.html('<th>Playlist</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
