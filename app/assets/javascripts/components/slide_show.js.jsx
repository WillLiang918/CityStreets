(function (root) {

  var SlideShow = root.SlideShow = React.createClass ({
    getInitialState: function () {
      return { currentphoto: "",
               photos: [] };
    },

    _getPhotos: function () {
      var id = this.props.property.id;
      var photos = PhotoStore.find(id);
      if (photos.length > 0 ) {
        this.setState({
          photos: photos,
          currentPhoto: photos[0].image_url
        });
      }
    },

    componentDidMount: function () {
      PhotoStore.addChangeListener(this._getPhotos);
      ApiUtil.fetchPhotos(PropertyStore.getIds);
    },

    componentWillUnmount: function () {
      PhotoStore.removeChangeListener(this._getPhotos);
    },

    handleClick: function (event) {
      this.setState({currentPhoto: event.target.src});
    },

    render: function () {
      var that = this;

      return (
        <div className="slide-show">
          <img className="selected-photo"
             src={this.state.currentPhoto} />
          <ul>
            {
              that.state.photos.map( function (photo) {
                return <li key={photo.id}>
                  <img
                    className="thumb"
                    onClick={that.handleClick}
                    src={photo.image_url}
                  />
                </li>;
              })
            }
          </ul>
        </div>
      );
    }
  });
})(this);
