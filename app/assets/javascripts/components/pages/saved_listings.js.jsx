(function (root) {
  var SavedListings = root.SavedListings = React.createClass({
    getInitialState: function () {
      return this.getStateFromStore();
    },
    componentDidMount: function () {
      SavedPropertyStore.addChangeListener(this.onChange);
      PhotoStore.addChangeListener(this.onChange);
      ApiUtil.fetchSavedProperties(CurrentUserStore.currentUser());
    },
    componentWillUnmount: function () {
      SavedPropertyStore.removeChangeListener(this.onChange);
    },
    getSavedProperties: function () {
      return ApiUtil.fetchSavedProperties(this.props.currentUser);
    },
    render: function () {
      return (
        <div>
          <div className="background"></div>
          <div className="saved-listings">
            <div>
              <SavedPropertyList
                currentUser={this.props.currentUser}
                history={this.props.history}
                properties={this.state.properties}
                photos={this.state.photos}
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
      return {
        properties: SavedPropertyStore.all(),
      };
    },
    onChange: function () {
      this.setState(this.getStateFromStore());
    },
    toggleAuth: function () {
      this.setState({auth: !this.state.auth});
    },
  });
})(this);
