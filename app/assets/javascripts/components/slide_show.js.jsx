(function (root) {

  var SlideShow = root.SlideShow = React.createClass ({

    getInitialState: function () {
      return { image: "" };
    },

    _getPhotos: function () {
      var id = this.props.property.id;
      var photos = PhotoStore.find(id);
      if (typeof photo != "undefined") {
        this.setState({ image: photo.image_url});
      }
    },

    componentDidMount: function () {
      PhotoStore.addChangeListener(this._getPhotos);
      ApiUtil.fetchPhotos();
      // this._getPhotos();
    },

    componentWillUnmount: function () {
      PropertyStore.removeChangeListener(this._getPhotos);
    },



    componentDidMount: function () {
      ApiUtil.fetchPhotos();
      propertyId = this.props.property.id;
      var photos = PhotoStore.find(propertyId);
      debugger
    },

    render: function () {
      return (
        <div className="slide-show">

        </div>
      );
    }
  });
})(this);
