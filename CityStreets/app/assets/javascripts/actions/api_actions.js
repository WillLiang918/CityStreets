ApiActions = {

  receiveAllProperties: function (properties) {
    AppDispatcher.dispatch ({
      actionType: PropertyConstants.PROPERTIES_RECEIVED,
      properties: properties
    });
  },

  receiveSingleProperty: function (property) {
    AppDispatcher.dispatch ({
      actionType: PropertyConstants.PROPERTY_RECEIVED,
      property: property
    });
  },
};
