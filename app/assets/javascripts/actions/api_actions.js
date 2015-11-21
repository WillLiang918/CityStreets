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
  }

};
