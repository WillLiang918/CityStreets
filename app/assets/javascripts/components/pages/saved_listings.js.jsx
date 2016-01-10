(function (root) {
  var SavedListings = root.SavedListings = React.createClass({
    getInitialState: function () {
      return this.getStateFromStore();
    },
    componentDidMount: function () {
      PhotoStore.addChangeListener(this.onChange);
    },
    render: function () {
      var currentUser = this.props.currentUser;
      var savedProperties = currentUser ?  currentUser.saved_properties : [];
      return (
        <div>
          <div className="background"></div>
          <div className="saved-listings">
            <SavedListingsHeader
              properties={savedProperties}
            />
            <div className="two-thirds">
              <PropertyList
                currentUser={currentUser}
                history={this.props.history}
                properties={savedProperties}
              />
            </div>
            <div>
              <Map />
            </div>
          </div>
        </div>
      );
    },
    getStateFromStore: function () {
      var currentUser = this.props.currentUser;
      var savedProperties = currentUser ?  currentUser.saved_properties : [];
      return {
        properties: savedProperties
      };
    },
    onChange: function () {
      this.setState(this.getStateFromStore());
    },
  });
})(this);
