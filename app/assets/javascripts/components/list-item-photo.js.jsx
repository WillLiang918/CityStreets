(function (root) {
  root.ListItemPhoto = React.createClass ({
    getInitialState: function () {
      return { image: "" };
    },

    // componentDidMount: function () {
    //   propertyId = this.props.property.id;
    //   ApiUtil.fetchPhotos(propertyId);
    //   this.findPhotos(propertyId);
    // },
    //
    // findPhotos: function (id) {
    //   var photo = PhotoStore.find(id)[0];
    //   if (typeof photo != "undefined") {
    //     this.setState({ image: photo.image_url});
    //   }
    //   console.log(this.state);
    // },

    _getPhotos: function () {
      var id = this.props.property.id;
      var photo = PhotoStore.find(id)[0];
      if (typeof photo != "undefined") {
        this.setState({ image: photo.image_url});
      }
    },

    componentDidMount: function () {
      this._getPhotos();
      PhotoStore.addChangeListener(this._getPhotos);
      ApiUtil.fetchProperties();
    },

    componentWillUnmount: function () {
      PropertyStore.removeChangeListener(this._getPhotos);
    },

    render: function () {
      return (
        <div>
          <img className="normal-image" src={this.state.image} />
        </div>
      );
    }
  });
})(this);
