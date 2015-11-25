(function (root) {
  root.PropertyShow = React.createClass ({

    getInitialState: function () {
      ApiUtil.fetchProperties();
      var propertyId = this.props.params.propertyId;
      var property = this._findPropertyById(propertyId);
      return {
        property: property,
        currentUser: CurrentUserStore.currentUser(),
        saved: !!this.isSaved(this.props.params.propertyId),
      };
    },

    isSaved: function (id) {
      var saved = false;
      var that = this;
      var currentUser = CurrentUserStore.currentUser();
      if (currentUser && currentUser.saved_properties) {
          currentUser.saved_properties.forEach( function ( saved_property ) {
            if (saved_property.property_id == id) {
              saved = saved_property.id;
            }
          });
      }
      return saved;
    },

    updateSave: function () {
      this.setState({ saved: !this.state.saved });
      this.updatedUser();
    },

    updatedUser: function () {
      ApiUtil.fetchCurrentUser();
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
      var detail;
      if (this.state.property) {
        detail = (
          <Detail
            currentUser={ this.state.currentUser }
            property={ this.state.property }
            saved={ this.state.saved }
            isSaved={ this.isSaved }
            updateSave={ this.updateSave }
            history={ this.props.history }
            id={ this.props.params.propertyId }/>
          );
      }
      return (
        <div className="property-page group">
          <SlideShow property={ this.state.property } />
          {detail}
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
