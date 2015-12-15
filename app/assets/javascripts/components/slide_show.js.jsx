(function (root) {

  var SlideShow = root.SlideShow = React.createClass ({
    getInitialState: function () {
      return {
        currentphoto: this.props.property.photos || [],
        propertyPhotos: []
      };
    },

    // _getPhotos: function () {
    //   var id = this.props.id;
    //   var photos = PhotoStore.find(id);
    //   if (photos.length > 0 ) {
    //     this.setState({
    //       propertyPhotos: photos,
    //       currentPhoto: photos[0].image_url
    //     });
    //   }
    // },

    // componentDidMount: function () {
    //   PhotoStore.addChangeListener(this._getPhotos);
    //   ApiUtil.fetchPhotos(PropertyStore.getIds);
    // },
    //
    // componentWillUnmount: function () {
    //   PhotoStore.removeChangeListener(this._getPhotos);
    // },

    render: function () {
      var that = this;
      var propertyPhotos = this.props.property.photos || [];
      return (
        <div className="slide-show">
          <img className="selected-photo"
             src={ this.props.currentPhoto } />
          <ul className="thumb-photos group">
            {
              propertyPhotos.map( function (photo) {
                return <li key={photo}>
                  <img
                    className="thumb"
                    onClick={that.handleClick}
                    src={photo}
                  />
                </li>;
              })
            }
          </ul>
        </div>
      );
    },

    handleClick: function (event) {
      this.props.changeCurrentPhoto(event.target.src);
      // this.setState({currentPhoto: event.target.src});
    },

  });
})(this);
