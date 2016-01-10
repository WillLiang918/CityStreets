(function (root) {
  var SavedListings = root.SavedListings = React.createClass({

    getInitialState: function () {
      return this.getStateFromStore();
    },

    getStateFromStore: function () {
      return {
        currentUser: this.props.currentUser,
        auth: this.props.auth,
        properties: SavedPropertyStore.all(),
      };
    },

    onChange: function () {
      this.setState( this.getStateFromStore() );
    },

    componentDidMount: function () {
      CurrentUserStore.addChangeListener(this.onChange);
      SavedPropertyStore.addChangeListener(this.onChange);
      PhotoStore.addChangeListener(this.onChange);
      ApiUtil.fetchSavedProperties( CurrentUserStore.currentUser() );
      // ApiUtil.fetchProperties();
      // ApiUtil.fetchPhotos(PropertyStore.getIds);
      ApiUtil.fetchCurrentUser();
    },

    componentWillUnmount: function () {
      CurrentUserStore.removeChangeListener(this.onChange);
      SavedPropertyStore.removeChangeListener(this.onChange);
      // PhotoStore.removeChangeListener(this.onChange);
    },

    getSavedProperties: function () {
      return ApiUtil.fetchSavedProperties( CurrentUserStore.currentUser() );
    },

    render: function () {
      return (
        <div>
          <div className="background"></div>
          <div className="saved-listings">
            <div>
              <SavedPropertyList
                currentUser={ this.props.currentUser }
                properties={ this.state.properties }
                photos={this.state.photos}
                history={this.props.history}/>
            </div>
            <div>
              <Map />
            </div>
          </div>
        </div>
      );
    },

    toggleAuth: function () {
      this.setState({ auth: !this.state.auth });
    },
  });
})(this);
