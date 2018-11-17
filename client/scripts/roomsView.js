var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', function() {
      RoomsView.renderRoom($('#message').val());
    });
  },

  render: function() {
  },

  renderRoom: function(room) {
    RoomsView.$select.append(`<option value="${room}">${room}</option>`);
  }

};
