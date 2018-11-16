var MessagesView = {

  $chats: $('#chats'), // found in index.html, line 38

  initialize: function() {
    
  },

  render: function() {

  },

  renderMessage: function(message) {
    this.$chats.append(MessageView.render(message));
  }


};