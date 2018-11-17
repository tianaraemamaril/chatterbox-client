var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    //$('#username').on('click', Friends.toggleStatus());
    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      var arr = [];
      console.log(data);
      data.results.forEach(function(message) {
        if(message.username && message.roomname && message.text) {
          arr.push(message);
        }
      });
      arr.forEach(function(message) {
        MessagesView.renderMessage(message);
        RoomsView.renderRoom(message.roomname);
        if(!Friends.friendsList.includes(message.username)) {
          Friends.friendsList.push(message.username);
        }
      })
      
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
