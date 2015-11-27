(function (root) {
  var Description = root.Description = React.createClass ({
    render: function () {
      var description;
      if (this.props.property) {
        description = this.props.property.description;
      }
      return (
        <div className="description">
          <h2 className="description-header">Description</h2>
          <div className="description-body">{ description }</div>
        </div>
      );
    }
  });
})(this);
