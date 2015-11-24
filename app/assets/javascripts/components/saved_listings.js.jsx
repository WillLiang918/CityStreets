(function (root) {

  var SavedListings = root.SavedListings = React.createClass({
    render: function () {
      return (
        <div className="saved-listings">
          <div>
            <h2>Saved Properties</h2>
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
