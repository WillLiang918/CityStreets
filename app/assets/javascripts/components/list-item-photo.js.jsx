(function (root) {
  root.ListItemPhoto = React.createClass ({
    render: function () {
      return (
        <div>
          <img className="normal-image" src={this.props.photo} />
        </div>
      );
    }
  });
})(this);
