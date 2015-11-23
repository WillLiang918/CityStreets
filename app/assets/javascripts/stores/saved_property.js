(function (root) {

  var _saved_properties = [];
  var CHANGE_EVENT = "change";

  root.SavedPropertyStore = $.extend({}, EventEmitter.prototype,{
    all: function () {
      return _saved_properties.slice(0);
    },

    // find: function (id) {
    //   var saved_property;
    //   _saved_properties.forEach(function(p) {
    //     if(p.id === id) { property = p; }
    //   });
    //
    //   return saved_property;
    // },

    // getIds: function () {
    //   var ids = [];
    //   _saved_properties.forEach(function (p) {
    //     ids.push(p.id);
    //   });
    //   return ids;
    // },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register( function (payload) {
      switch (payload.actionType) {
        case PropertyConstants.SAVED_PROPERTY_RECEIVED:
          _saved_properties.push(payload.saved_property);
          PropertyStore.emit(CHANGE_EVENT);
          break;
        case PropertyConstants.SAVED_PROPERTIES_RECEIVED:
          _saved_properties = payload.saved_properties;
          debugger
          PropertyStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });

})(this);
