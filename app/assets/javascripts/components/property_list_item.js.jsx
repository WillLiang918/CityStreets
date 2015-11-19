(function (root) {
  root.PropertyListItem = React.createClass ({

    getInitialState: function () {
      return this.getStateFromStore();
    },

    getStateFromStore: function () {
      return { property: PropertyStore.find(parseInt(this.props.id))};
    },

    handleHover: function (event) {
      var address = this.state.property.fullAddress;
      address = address.replace(/\s/g, '');

      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({address: address}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK){
          coords = {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
          };
          ApiActions.getMarker(coords);
        }
      }.bind(this));
    },

    render: function () {
        return (
          <div className="property-list-item group" onMouseOver={this.handleHover}>
            <div className="property-image">
              <img>IMG</img>
            </div>
            <div>
              <Detail id={this.props.id} property={this.state.property}/>
            </div>
          </div>
        );
    }
  });
})(this);
