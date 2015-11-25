(function (root) {

  var CENTER = { lat: 40.730610, lng: -73.935242 };

  root.Map = React.createClass ({

    componentDidMount: function() {
      var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: { lat: 40.730610, lng: -73.935242 },
        zoom: 13
      };
      this.markers = null;
      this.map = new google.maps.Map(map, mapOptions);
      MarkerStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
      MarkerStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
      this.removeMarker(this.marker);
      this.createMarker(MarkerStore.getMarker());
      var latlng = {
        lat: this.marker.position.lat(),
        lng: this.marker.position.lng()
      };
      this.map.setCenter(latlng);
    },

    createMarker: function (coords) {
      var that = this;
      var pos = new google.maps.LatLng(coords.lat, coords.lng);
      this.marker = new google.maps.Marker({
        position: pos,
        map: that.map,
      });
    },

    removeMarker: function (marker) {
      if (marker) {
        marker.setMap(null);
      }
    },

    render: function () {
      return (
        <div className="map-container">
          <div className="map" ref="map"></div>
        </div>
      );
    }
  });
})(this);
