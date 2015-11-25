(function (root) {
  root.PropertyShow = React.createClass ({

    getInitialState: function () {
      ApiUtil.fetchProperties();
      var propertyId = this.props.params.propertyId;
      var property = this._findPropertyById(propertyId) || {} ;
      return { property: property };
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

    // componentDidMount: function () {
    //   PropertyStore.addChangeListener(this._getState);
    //   ApiUtil.fetchProperties();
    // },
    //
    // componentWillUnmount: function () {
    //   PropertyStore.removeChangeListener(this._getState);
    // },

    render: function () {
      return (
        <div className="property-page group">
          <SlideShow property={this.state.property} />
          <Detail property={this.state.property} />
        </div>
      );
    },

    _updateCurrentUser: function () {
      this.setState({ currentUser: CurrentUserStore.currentUser() });
    },

    _updateProperties: function () {
      // this.setState({ propertie PropertyStore.all() });
      var propertyId = this.props.params.propertyId;
      var property = this._findPropertyById(propertyId);
      this.setState({ property: property });
    },

    _updatePhotos: function () {
      this.setState({ photos: PhotoStore.all() });
    },

    _findPropertyById: function (id) {
      var result;
      PropertyStore.all().forEach( function (property) {
        if (id == property.id) {
          result = property;
        }
      }.bind(this));
      return result;
    },

    _getState: function () {
      var propertyId = this.props.params.propertyId;
      var property = this._findPropertyById(propertyId);
      this.setState({ property: property });
    },
  });
})(this);
