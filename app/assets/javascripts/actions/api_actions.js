ApiActions = {
  receiveAllProperties: function (properties) {
    AppDispatcher.dispatch ({
      actionType: PropertyConstants.PROPERTIES_RECEIVED,
      properties: properties
    });
  },

  receiveAllSavedProperties: function (saved_properties) {
    AppDispatcher.dispatch ({
      actionType: PropertyConstants.SAVED_PROPERTIES_RECEIVED,
      saved_properties: saved_properties
    });
  },

  receiveSingleProperty: function (property) {
    AppDispatcher.dispatch ({
      actionType: PropertyConstants.PROPERTY_RECEIVED,
      property: property
    });
  },

  receiveSingleSavedProperty: function (saved_property) {
    AppDispatcher.dispatch ({
      actionType: PropertyConstants.SAVED_PROPERTY_RECEIVED,
      saved_property: saved_property
    });
  },

  getMarker: function (marker) {
    AppDispatcher.dispatch ({
      actionType: PropertyConstants.MARKER_RECEIVED,
      marker: marker
    });
  },

  receiveCurrentUser: function (currentUser) {
    AppDispatcher.dispatch ({
      actionType: PropertyConstants.CURRENT_USER_RECEIVED,
      currentUser: currentUser
    });
  },

  removeCurrentUser: function () {
    AppDispatcher.dispatch ({
      actionType: PropertyConstants.CURRENT_USER_REMOVED,
    });
  },

  receivePhoto: function(photo) {
    AppDispatcher.dispatch({
      actionType: PropertyConstants.RECEIVE_PHOTO,
      photo: photo
    });
  },

  receivePhotos: function(photos) {
    AppDispatcher.dispatch({
      actionType: PropertyConstants.RECEIVE_PHOTOS,
      photos: photos
    });
  },

  updateSearchParams: function(params) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_PARAMS,
      params: params
    });
  }

};
