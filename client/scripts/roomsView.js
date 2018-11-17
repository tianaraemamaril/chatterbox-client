var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
   // console.log($('Messages.results'));
    /*$('#message').results.forEach(function(message) {
      console.log(message.roomname);
      RoomsView.render(message.roomname);
    });*/
    
  },

  render: function() {
  },

  renderRoom: function(room) {
    this.$select.append(`<div>${room}</div>`);
  }

};
