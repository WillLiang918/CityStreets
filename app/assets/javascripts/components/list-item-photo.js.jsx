(function (root) {
  root.ListItemPhoto = React.createClass ({
    getInitialState: function () {
      return { image: "" };
    },

    _getPhotos: function () {
      var id = this.props.property.id;
      var photo = PhotoStore.find(id)[0];
      if (typeof photo != "undefined") {
        this.setState({ image: photo.image_url});
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
      return (
        <div>
          <img className="normal-image" src={this.state.image} />
        </div>
      );
    }
  });
})(this);
