var LibraryView = Backbone.View.extend({

  tagName: "div",
  id: "libary",

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    return this.$el.html('<div id="sectionHeader">Library</div>').append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
