(function (root) {
  root.PropertyListItem = React.createClass ({

    getInitialState: function () {
      return { saved: !!this.isSaved(this.props.id) };
    },

    isSaved: function (id) {
      var saved = false;
      var that = this;
      var currentUser = this.props.currentUser;
      if (currentUser && currentUser.saved_properties) {
          currentUser.saved_properties.forEach( function ( saved_property ) {
            if (saved_property.property_id === id) {
              saved = saved_property.id;
            }
          });
      }
      return saved;
    },

    render: function () {
      return (
        <div
          className="property-list-item group"
          onMouseEnter={ this.handleHover }
          onClick={ this.handleClick }>
          <div className="property-image">
            <ListItemPhoto
              photo={ this.getPhoto(this.props.id) }
              saved={ this.state.saved }/>
          </div>
          <div>
            <Detail
              currentUser={ this.props.currentUser }
              saved={ this.state.saved }
              savedId={ this.state.savedId }
              isSaved={ this.isSaved }
              updateSave={ this.updateSave }
              property={ this.props.property }
              history={ this.props.history }
              id={this.props.id}/>
          </div>
        </div>
      );
    },

    handleHover: function (event) {
      ApiActions.getMarker(this.props.property.latlng);
    },

    handleClick: function (event) {
      event.preventDefault();
      var that = this;
      if ( event.target.className !== "detail-save-button") {
        this.props.history.pushState(null, "properties/" + this.props.id);
      }
    },

    getPhoto: function (id) {
      var photo = PhotoStore.find(id)[0];
      if (typeof photo != "undefined") {
        return photo.image_url;
      }
    },

    updateSave: function () {
      this.setState({ saved: !this.state.saved });
      this.updatedUser();
    },

    updatedUser: function () {
      ApiUtil.fetchCurrentUser();
    }

  });
})(this);
