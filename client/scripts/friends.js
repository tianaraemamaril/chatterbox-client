var Friends = {
};

Friends.prototype.toggleStatus = {
  'called': false,
  restore: function() {
    this.called = false;
  }
};