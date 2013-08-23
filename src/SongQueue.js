var SongQueue = Songs.extend({

  initialize: function(){
    this.on("add", function(){
      if(this.length === 1){
        this.playFirst();
      } 
    });

    this.on("ended", function(){
      if(this.length > 1){
        this.ended();
        this.playFirst();
      } else{
        this.ended()
      } 
    });

    this.on("dequeue", function(song){
      this.remove(song);
    });
  },

  playFirst : function(){
    this.at(0).play();
  },

  ended: function(){
    this.shift();
    this.length && this.playFirst();
  },

});
