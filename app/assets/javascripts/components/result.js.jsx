(function (root) {
  root.Result = React.createClass({

    getInitialState: function () {
      return this.getStateFromStore();
    },

    getStateFromStore: function () {
      return {
        currentUser: CurrentUserStore.currentUser(),
        properties: PropertyStore.all(),
        photos: PhotoStore.all(),
        refineSearch: false,
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
      var background = (this.state.refineSearch) ? "active" : "non-active";
      return (
        <div>
          <div className="result">
            <div
              onClick={ this.exitModal }
              className={ "modal-screen " + background }>
              </div>
            <ResultHeader
              toggleRefineSearch={ this.toggleRefineSearch }
              refineSearch={ this.state.refineSearch }
              history={this.props.history}/>
            <div>
              <PropertyList
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

    toggleRefineSearch: function () {
      this.setState({ refineSearch: !this.state.refineSearch });
    },

    exitModal: function () {
      this.setState({ refineSearch: false });
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
    //   this.setState({ photos: PhotoStore.all() });
    // },

  });
})(this);
