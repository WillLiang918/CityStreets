(function (root) {
  var SavedListings = root.SavedListings = React.createClass({

    getInitialState: function () {
      return this.getStateFromStore();
    },

    getStateFromStore: function () {
      return {
        currentUser: CurrentUserStore.currentUser(),
        // properties: ApiUtil.fetchSavedProperties,
        properties: PropertyStore.all(),
        photos: PhotoStore.all(),
        auth: false
      };
    },

    onChange: function () {
      this.setState( this.getStateFromStore() );
    },

    componentDidMount: function () {
      CurrentUserStore.addChangeListener(this.onChange);
      PropertyStore.addChangeListener(this.onChange);
      PhotoStore.addChangeListener(this.onChange);
      ApiUtil.fetchProperties();
      ApiUtil.fetchPhotos(PropertyStore.getIds);
      ApiUtil.fetchCurrentUser();
    },

    componentWillUnmount: function () {
      CurrentUserStore.removeChangeListener(this.onChange);
      PropertyStore.removeChangeListener(this.onChange);
      PhotoStore.removeChangeListener(this.onChange);
    },

    getSavedProperties: function () {
      return ApiUtil.fetchSavedProperties( CurrentUserStore.currentUser() );
    },

    render: function () {
      return (
        <div>
          <div className="background"></div>
          <MainHeader
            currentUser={ this.state.currentUser }
            auth={ this.state.auth }
            toggleAuth={ this.toggleAuth }
            history={ this.props.history }/>
          <div className="saved-listings">
            <div>
              <SavedPropertyList
                currentUser={this.state.currentUser}
                properties={ this.getSavedProperties() }
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

    // _updateCurrentUser: function () {
    //   this.setState({ currentUser: CurrentUserStore.currentUser() });
    // },
    //
    // _updateProperties: function () {
    //   this.setState({ properties: PropertyStore.all() });
    // },
    //
    // _updatePhotos: function () {
    //   this.setState({ photos: PhotoStore.all(), });
    // }

  });
})(this);
