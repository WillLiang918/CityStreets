(function(root){

  var _params = { location: "",
                  minPrice: 0,
                  maxPrice: null,
                  bedrooms: 0,
                  bathrooms: 0 };

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
        case FilterConstants.UPDATE_MAX_PRICE:
          _params.maxSeating = payload.maxSeating;
          FilterParamsStore.emit(CHANGE_EVENT);
          break;
        case FilterConstants.UPDATE_MIN_SEATING:
          _params.minSeating = payload.minSeating;
          FilterParamsStore.emit(CHANGE_EVENT);
          break;
        case FilterConstants.UPDATE_BOUNDS:
          _params.bounds = payload.bounds;
          FilterParamsStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });

})(this);
