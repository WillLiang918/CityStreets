(function (root) {
  var ListItemPhoto = root.ListItemPhoto = React.createClass ({
    componentDidMount: function () {
      ApiUtil.fetchPhotos(this.props.property.id);
    },

    render: function () {
      return (
        <div>
        </div>
      );
    }
  });
})(this);
