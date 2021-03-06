(function (root) {

  var _properties = [];
  var CHANGE_EVENT = "change";

  root.PropertyStore = $.extend({}, EventEmitter.prototype,{
    all: function () {
      return _properties.slice(0);
    },

    find: function (id) {
      var property;
      _properties.forEach(function(p) {
        if(p.id === id) { property = p; }
      });

      return property;
    },

    getIds: function () {
      var ids = [];
      _properties.forEach(function (p) {
        ids.push(p.id);
      });
      return ids;
    },

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register( function (payload) {
      switch (payload.actionType) {
        case PropertyConstants.PROPERTIES_RECEIVED:
          _properties = payload.properties.slice(0);
          PropertyStore.emit(CHANGE_EVENT);
          break;
        case PropertyConstants.PROPERTY_RECEIVED:
          break;
      }
    })
  });

})(this);
