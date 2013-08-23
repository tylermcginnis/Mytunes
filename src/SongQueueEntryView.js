var SongQueueEntryView = Backbone.View.extend({
  tagName: 'div',
  id: 'song',
  template: _.template('<div id="artist"><%= artist %> -</div><div id="title"><%= title %><div id="exit"> X </div></div>'),

  events: {
    'click' : function(){
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
