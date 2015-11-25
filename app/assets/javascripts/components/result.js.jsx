(function (root) {
  root.Result = React.createClass({

    getInitialState: function () {
      return {
        currentUser: CurrentUserStore.currentUser(),
        properties: PropertyStore.all(),
        photos: PhotoStore.all(),
        refineSearch: false,
       };
    },

    componentDidMount: function () {
      CurrentUserStore.addChangeListener(this._updateCurrentUser);
      PropertyStore.addChangeListener(this._updateProperties);
      PhotoStore.addChangeListener(this._updatePhotos);
      ApiUtil.fetchProperties();
      ApiUtil.fetchPhotos(PropertyStore.getIds);
      ApiUtil.fetchCurrentUser();
    },

    componentWillUnmount: function () {
      CurrentUserStore.removeChangeListener(this._updateCurrentUser);
      PropertyStore.removeChangeListener(this._updateProperties);
      PhotoStore.removeChangeListener(this._updatePhotos);
    },

    render: function () {
      var background = (this.state.refineSearch) ? "active" : "non-active";
      return (
        <div className="result">
          <div className={ "modal-screen " + background }></div>
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
      );
    },

    toggleRefineSearch: function () {
      this.setState({ refineSearch: !this.state.refineSearch });
    },

    _updateCurrentUser: function () {
      this.setState({ currentUser: CurrentUserStore.currentUser() });
    },

    _updateProperties: function () {
      this.setState({ properties: PropertyStore.all() });
    },

    _updatePhotos: function () {
      this.setState({ photos: PhotoStore.all() });
    },

  });
})(this);
