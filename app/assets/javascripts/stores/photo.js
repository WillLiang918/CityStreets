(function(root) {

  var _photos = [];
  var CHANGE_EVENT = "change";

  var resetPhotos = function (photos) {
    _photos = photos.slice(0);
  };

  var PhotoStore = root.PhotoStore = $.extend({}, EventEmitter.prototype, {
    all: function () {
      return _photos.slice(0);
    },

    find: function (property_id) {
      var photos = [];
      _photos.map(function (p) {
        if(p.property_id === property_id) {
          photos.push(p);
        }
      });
      return photos;
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register( function (payload) {
      switch (payload.actionType) {
        case PropertyConstants.RECEIVE_PHOTOS:
          resetPhotos(payload.photos);
          PhotoStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });

})(this);
