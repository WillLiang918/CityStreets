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

  signIn: function (credentials, callback) {
    debugger
    $.ajax({
      url: '/api/session',
      type: 'POST',
      dataType: 'json',
      data: credentials,
      success: function (currentUser) {
        ApiActions.receiveCurrentUser(currentUser);
        debugger
        callback && callback(currentUser);
      },
    });
  }
};
