(function (root) {
  root.ListItemPhoto = React.createClass ({
    getInitialState: function () {
      return { image: "" };
    },

    componentWillMount: function () {
      propertyId = this.props.property.id;
      ApiUtil.fetchPhotos(propertyId);
      this.findPhotos(propertyId);
    },

    findPhotos: function (id) {
      var photo = PhotoStore.find(id)[0];
      if (typeof photo != "undefined") {
        this.setState({ image: photo.image_url});
      }
    },

    render: function () {
      // var image = function () {
      //   if (this.photo.length > 0 ) {
      //     return <img src={this.photo.image_url} />;
      //   }
      // };
      //
      // var test = function () {
      //   debugger
      //   image = PhotoStore.find(1)[0];
      // };


      return (
        <div>
          <img className="normal-image" src={this.state.image} />
        </div>
      );
    }
  });
})(this);
