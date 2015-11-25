(function (root) {

  var SlideShow = root.SlideShow = React.createClass ({
    getInitialState: function () {
      return {
        currentphoto: "",
        propertyPhotos: []
      };
    },

    _getPhotos: function () {
      var id = this.props.id;
      var photos = PhotoStore.find(id);
      if (photos.length > 0 ) {
        this.setState({
          propertyPhotos: photos,
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

    render: function () {
      var that = this;
      return (
        <div className="slide-show">
          <img className="selected-photo"
             src={this.state.currentPhoto} />
          <ul>
            {
              that.state.propertyPhotos.map( function (photo) {
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
    },

    handleClick: function (event) {
      this.setState({currentPhoto: event.target.src});
    },

  });
})(this);
