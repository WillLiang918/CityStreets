(function (root) {

  var SlideShow = root.SlideShow = React.createClass ({
    getInitialState: function () {
      return { photos: [] };
    },

    _getPhotos: function () {
      var id = this.props.property.id;
      var photos = PhotoStore.find(id);
      if (photos.length > 0 ) {
        this.setState({ photos: photos});
        debugger
      }
    },

    componentDidMount: function () {
      PhotoStore.addChangeListener(this._getPhotos);
      ApiUtil.fetchPhotos();
      // this._getPhotos();
    },

    componentWillUnmount: function () {
      PhotoStore.removeChangeListener(this._getPhotos);
    },



    // componentDidMount: function () {
    //   ApiUtil.fetchPhotos();
    //   propertyId = this.props.property.id;
    //   var photos = PhotoStore.find(propertyId);
    //   debugger
    // },

    render: function () {
      var that = this;
      return (
        <div className="slide-show">
        {
          that.state.photos.map( function (photo) {
            return <img src={photo.image_url}/>;
          })
        }
        </div>
      );
    }
  });
})(this);
