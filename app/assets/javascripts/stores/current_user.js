(function (root) {

  var _currentUser = null;
  var CHANGE_EVENT = "change";

  var resetCurrentUser = function (currentUser) {
    if (typeof currentUser.id !== "undefined") {
      _currentUser = currentUser;
      CurrentUserStore.emit(CHANGE_EVENT);
    }
  };

  root.CurrentUserStore = $.extend({}, EventEmitter.prototype,{

    currentUser: function () {
      return _currentUser;
    },

    isSaved: function (id) {
      var saved = false;
      var properties = _currentUser.saved_properties;
      if (properties) {
        properties.forEach( function (property) {
          if (property.property_id === id) {
            saved = true;
          }
        });
      }
      return saved;
    },

    isSignedIn: function () {
      return ( _currentUser !== null );
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register( function (payload) {
      switch (payload.actionType) {

        case PropertyConstants.CURRENT_USER_RECEIVED:
          resetCurrentUser(payload.currentUser);
          break;
        case PropertyConstants.CURRENT_USER_REMOVED:
          _currentUser = null;
          CurrentUserStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });
})(this);
