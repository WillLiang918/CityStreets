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
    debugger
    $.ajax({
      url: '/api/photos',
      type: 'POST',
      processData: false,
      contentType: false,
      dataType: 'json',
      data: formData,
      success: function(photo) {
        debugger
        ApiActions.receivePhoto(photo);
        callback && callback();
      }
    });
  }
};
