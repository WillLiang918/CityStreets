(function (root) {
  root.PropertyShow = React.createClass ({

    getInitialState: function () {
      return {
        currentUser: this.props.currentUser,
        auth: this.props.auth,
        property: "",
        currentPhoto: "",
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
      ApiUtil.fetchCurrentUser();
    },

    updatedUser: function () {
      ApiUtil.fetchCurrentUser();
    },

    componentDidMount: function () {
      CurrentUserStore.addChangeListener(this._updateCurrentUser);
      PropertyStore.addChangeListener(this._updateProperty);
      ApiUtil.fetchProperty(this.props.params.propertyId);
      ApiUtil.fetchCurrentUser();
    },

    componentWillUnmount: function () {
      CurrentUserStore.removeChangeListener(this._updateCurrentUser);
      PropertyStore.removeChangeListener(this._updateProperty);
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
            toggleAuth= { this.toggleAuth }
            history={ this.props.history }
            id={ this.props.params.propertyId }/>
          );
      }
      return (
        <div>
          <div className="background"></div>
          <div className="property-page group">
            <div className="left-three-fifths group">
              <SlideShow
                currentPhoto={ this.state.currentPhoto }
                changeCurrentPhoto={ this.changeCurrentPhoto }
                property={ this.state.property }
                id={ parseInt(this.props.params.propertyId) }/>
              <Description
                property={ this.state.property }/>
            </div>
            <div className="right-two-fifths">
              {detail}
            </div>
          </div>
        </div>
      );
    },

    _updateCurrentUser: function () {
      this.setState({
        currentUser: CurrentUserStore.currentUser(),
        saved: !!this.isSaved(this.props.params.propertyId)
      });
    },

    _updateProperty: function () {
      this.setState({
        property: PropertyStore.all()[0],
        currentPhoto: PropertyStore.all()[0].photos[0]
       });
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

    toggleAuth: function () {
      this.setState({ auth: !this.state.auth });
    },

    changeCurrentPhoto: function (photo) {
      this.setState({ currentPhoto: photo });
    },

  });
})(this);
