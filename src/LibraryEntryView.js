var LibraryEntryView = Backbone.View.extend({

  tagName: 'div',
  id: 'songAndArtist',

  template: _.template('<div id="artist"><%= artist %>  - </div><div id="title"><%= title %></div>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
