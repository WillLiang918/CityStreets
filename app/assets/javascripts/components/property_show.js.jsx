(function (root) {
  root.PropertyShow = React.createClass ({

    getInitialState: function () {
      var property = this._findPropertyById(this.props.params.propertyId);
      return {
        currentUser: CurrentUserStore.currentUser(),
        property: property,
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
      ApiUtil.fetchProperties();
      ApiUtil.fetchPhotos(PropertyStore.getIds);
      ApiUtil.fetchCurrentUser();
    },

    componentWillUnmount: function () {
      CurrentUserStore.removeChangeListener(this._updateCurrentUser);
      PropertyStore.removeChangeListener(this._updateProperties);
    },

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
          <div className="left-three-fifths group">
            <SlideShow
              property={ this.state.property }
              id={ parseInt(this.props.params.propertyId) }/>
            <Description />
          </div>
          <div className="right-two-fifths">
            {detail}
            Transit Stuff
          </div>
        </div>
      );
    },

    _updateCurrentUser: function () {
      this.setState({ currentUser: CurrentUserStore.currentUser() });
    },

    _updateProperties: function () {
      var propertyId = this.props.params.propertyId;
      var property = this._findPropertyById(propertyId);
      this.setState({ property: property });
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
