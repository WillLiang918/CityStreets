(function (root) {

  var _marker = null;
  var CHANGE_EVENT = "change";

  var resetMarker = function (marker) {
    _marker = marker;
  };

  var MarkerStore = root.MarkerStore = $.extend({}, EventEmitter.prototype,{

    getMarker: function () {
      return _marker;
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListner(CHANGE_EVENT, callback);
    },

    render: function () {
    },

    dispatcherID: AppDispatcher.register( function (payload) {
      switch (payload.actionType) {
        case PropertyConstants.MARKER_RECEIVED:
          resetMarker(payload.marker);
          MarkerStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });
})(this);
