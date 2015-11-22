(function(root){

  var _params = { location: "",
                  minPrice: null,
                  maxPrice: null,
                  bedrooms: null,
                  bathrooms: null };

  var CHANGE_EVENT = "change";

  var FilterParamsStore = root.FilterParamsStore = $.extend({}, EventEmitter.prototype, {
    params: function(){
        return $.extend({}, _params);
    },

    addChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){
      this.removeChangeListener(CHANGE_EVENT, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case FilterConstants.UPDATE_PARAMS:
          _params = $.extend( _params, payload.params);
          FilterParamsStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });

})(this);
