ApiUtil = {
  fetchProperty: function (id) {
    $.ajax ({
      url: 'api/properties/' + id,
      dataType: 'json',
      success: function (properties){
        ApiActions.receiveAllProperties([properties]);
      }
    });
  },

  fetchProperties: function (page) {
    var filter = FilterParamsStore.params();
    filter.page = page;
    $.ajax ({
      url: 'api/properties',
      dataType: 'json',
      data: filter,
      success: function (properties){
        ApiActions.receiveAllProperties(properties);
      }
    });
  },

  fetchSavedProperties: function (user) {
    var user_id = user ? user.id : null;
    $.ajax ({
      url: 'api/saved_properties',
      dataType: 'json',
      data: { user_id: user_id },
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

  createSavedProperty: function (saved_property) {
    $.ajax({
      url: '/api/saved_properties',
      type: 'POST',
      dataType: 'json',
      data: { saved_property: saved_property},
      success: function(saved_property) {
        ApiActions.receiveSingleSavedProperty(saved_property);
      }
    });
  },

  destroySavedProperty: function (id) {
    $.ajax({
      url: '/api/saved_properties/' + id,
      type: 'DELETE',
      dataType: 'json',
      data: { saved_property: id},
      success: function(saved_property) {
        ApiActions.receiveSingleSavedProperty(saved_property);
      }
    });
  },

  fetchPhotos: function (properties_id) {
    $.ajax({
      url: '/api/photos',
      type: 'GET',
      dataType: 'json',
      data: { id: properties_id },
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
