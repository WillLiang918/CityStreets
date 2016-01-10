(function (root) {
  var SavedListingsHeader = root.SavedListingsHeader = React.createClass({
    render: function () {
      var count = this.props.properties.length;
      return (
        <div>
          <h2>Saved Properties ({count})</h2>
        </div>
      );
    },
  });
})(this);
