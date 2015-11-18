ApiUtil = {

  fetchProperties: function () {
    $.ajax ({
      url: 'api/properties',
      dataType: 'json',
      success: function (properties){
        ApiActions.receiveAllProperties(properties);
      }
    });
  }
};
