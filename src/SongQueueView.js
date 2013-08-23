var SongQueueView = Backbone.View.extend({

  initialize: function(){
     var that = this;    
     this.collection.on("add", function(){
       that.render();
       $("#footer").hide();
     });

     this.collection.on("remove", function(){
       that.render();
     });
  },

  tagName: "div",
  id: "songQueue",

  render: function() {
    this.$el.children().detach();

    return this.$el.html('<div id="sectionHeader">My Queue</div>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  },
});
