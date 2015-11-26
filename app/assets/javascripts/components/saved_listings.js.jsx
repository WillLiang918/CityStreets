(function (root) {
  var SavedListings = root.SavedListings = React.createClass({

    getInitialState: function () {
      return this.getStateFromStore();
    },

    getStateFromStore: function () {
      return {
        currentUser: CurrentUserStore.currentUser(),
        properties: PropertyStore.all(),
        photos: PhotoStore.all()
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

    render: function () {
      return (
        <div>
          <div className="saved-listings">
            <div>
              <h2>Saved Properties</h2>
              <SavedPropertyList
                currentUser={this.state.currentUser}
                properties={this.state.properties}
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

    _updateCurrentUser: function () {
      this.setState({ currentUser: CurrentUserStore.currentUser() });
    },

    _updateProperties: function () {
      this.setState({ properties: PropertyStore.all() });
    },

    _updatePhotos: function () {
      this.setState({ photos: PhotoStore.all(), });
    }

  });
})(this);
