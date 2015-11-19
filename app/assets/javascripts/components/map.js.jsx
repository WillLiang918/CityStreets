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
      this.listenForMove();
      PropertyStore.addChangeListener(this._onChange);
    },

    _onChange: function () {
    },

    listenForMove: function () {
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
