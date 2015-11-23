ApiUtil = {
  fetchProperties: function () {
    var filter = FilterParamsStore.params();
    $.ajax ({
      url: 'api/properties',
      dataType: 'json',
      data: filter,
      success: function (properties){
        ApiActions.receiveAllProperties(properties);
      }
    });
  },

  fetchSavedProperties: function () {
    var user = CurrentUserStore.currentUser();
    $.ajax ({
      url: 'api/saved_properties',
      dataType: 'json',
      data: { user: user },
      success: function (properties){
        ApiActions.receiveAllSavedProperties(properties);
      }
    });
  },

  createPhoto: function (formData, callback) {
    $.ajax({
      url: '/api/photos',
      type: 'POST',
      processData: false,
      contentType: false,
      dataType: 'json',
      data: formData,
      success: function(photo) {
        ApiActions.receivePhoto(photo);
        callback && callback();
      }
    });
  },

  createSavedProperty: function (saved_property, callback) {
    $.ajax({
      url: '/api/saved_properties',
      type: 'POST',
      dataType: 'json',
      data: { saved_property: saved_property},
      success: function(saved_property) {
        debugger
        ApiActions.receiveSingleSavedProperty(saved_property);
        callback && callback();
      }
    });
  },

  fetchPhotos: function (properties_id) {
    $.ajax({
      url: '/api/photos',
      type: 'GET',
      dataType: 'json',
      id: properties_id,
      success: function(photos) {
        ApiActions.receivePhotos(photos);
      }
    });
  },

  fetchCurrentUser: function () {
    $.ajax({
      url: '/api/session',
      type: 'GET',
      dataType: 'json',
      success: function(currentUser) {
        ApiActions.receiveCurrentUser(currentUser);
      }
    });
  },

  signIn: function (credentials, callback) {
    $.ajax({
      url: '/api/session',
      type: 'POST',
      dataType: 'json',
      data: credentials,
      success: function (currentUser) {
        ApiActions.receiveCurrentUser(currentUser);
        callback && callback(currentUser);
      },
    });
  },

  signUp: function (credentials, callback) {
    $.ajax({
      url: '/api/users',
      type: 'POST',
      dataType: 'json',
      data: { user: credentials },
      success: function (currentUser) {
        ApiActions.receiveCurrentUser(currentUser);
        callback && callback(currentUser);
      },
    });
  },

  signOut: function () {
    $.ajax({
      url: '/api/session',
      type: 'DELETE',
      dataType: 'json',
      success: function (currentUser) {
        ApiActions.removeCurrentUser();
      },
    });
  }
};
