(function (root) {

  var CENTER = { lat: 40.730610, lng: -73.935242 };

  root.Map = React.createClass ({

    componentDidMount: function() {
      var map = React.findDOMNode(this.refs.map);
      var mapOptions = {
        center: { lat: 40.730610, lng: -73.935242 },
        zoom: 13
      };
      this.markers = [];
      this.map = new google.maps.Map(map, mapOptions);
      this.sendMap();
      this.registerListeners();
      PropertyStore.addChangeListener(this._onChange);
    },

    _onChange: function () {

    },

    registerListeners: function () {
      var that = this;
      google.maps.event.addListener(this.map, 'idle', function() {
      });
    },

    sendMap: function () {
      this.props.setsNewMap(this.map);
    },

    render: function () {
      return (
        <div className="map" ref="map"></div>
      );
    }
  });
})(this);
