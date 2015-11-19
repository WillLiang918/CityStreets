(function (root) {
  root.PropertyListItem = React.createClass ({

    getInitialState: function () {
      return this.getStateFromStore();
    },

    getStateFromStore: function () {
      return { property: PropertyStore.find(parseInt(this.props.id))};
    },

    handleHover: function (event) {
      var address = this.state.property.address;
      address = address.replace(/\s/g, '');


      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({address: address}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK){

          // this is the map passed from result.state.map

          // this.props.map = document.getElementsByClassName("map");
          // map.setCenter(results[0].geometry.location);
        }
      }.bind(this));
      debugger

      // var url = "https://maps.googleapis.com/maps/api/geocode/json?";
      // var key = "&key=AIzaSyAzXbe85FPmrTNrY3eKx7sH0E01BUHHBos";
      // url = url + address + key;

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
