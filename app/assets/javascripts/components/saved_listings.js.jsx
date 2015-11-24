(function (root) {

  var SavedListings = root.SavedListings = React.createClass({
    render: function () {
      return (
        <div>
          <div>
            <SavedPropertyList />
          </div>
          <div>
            <Map />
          </div>
        </div>
      );
    }
  });
})(this);
