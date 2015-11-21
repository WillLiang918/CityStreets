ApiUtil = {
  fetchProperties: function () {
    $.ajax ({
      url: 'api/properties',
      dataType: 'json',
      success: function (properties){
        ApiActions.receiveAllProperties(properties);
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
