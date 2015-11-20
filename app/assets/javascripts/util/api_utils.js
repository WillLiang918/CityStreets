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

  createPhoto: function(formData, callback) {
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

  fetchPhotos: function(property_id) {
    $.ajax({
      url: '/api/photos',
      type: 'GET',
      dataType: 'json',
      success: function(photos) {
        ApiActions.receivePhotos(photos);
      }
    });
  }
};
