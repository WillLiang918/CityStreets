(function (root) {

  var _properties = [];
  var CHANGE_EVENT = "change";

  var resetProperties = function (properties) {
    _properties = properties.slice(0);
  };

  var PropertyStore = root.PropertyStore = $.extend({}, EventEmitter.prototype,{
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
        case PropertyConstants.PROPERTIES_RECEIVED:
          resetProperties(payload.properties);
          PropertyStore.emit(CHANGE_EVENT);
          break;
        case PropertyConstants.PROPERTY_RECEIVED:
          break;
      }
    })
  });

})(this);
