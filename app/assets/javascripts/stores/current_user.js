(function (root) {

  var _currentUser = null;
  var CHANGE_EVENT = "change";

  root.CurrentUserStore = $.extend({}, EventEmitter.prototype,{

    currentUser: function () {
      return _currentUser;
    },

    isSignedIn: function () {
      return (typeof _currentUser === "undefined");
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListner(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register( function (payload) {
      switch (payload.actionType) {
        
        case PropertyConstants.CURRENT_USER_RECEIVED:
          _currentUser = payload.currentUser;
          CurrentUserStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });
})(this);
