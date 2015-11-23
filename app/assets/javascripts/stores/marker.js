(function (root) {

  var _marker = null;
  var CHANGE_EVENT = "change";

  root.MarkerStore = $.extend({}, EventEmitter.prototype,{

    getMarker: function () {
      return _marker;
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register( function (payload) {
      switch (payload.actionType) {
        case PropertyConstants.MARKER_RECEIVED:
          _marker = payload.marker;
          MarkerStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });
})(this);
