(function (root) {
  root.PropertyListItem = React.createClass ({
    isSaved: function (id) {
      var saved = false;
      var that = this;
      var currentUser = this.props.currentUser;
      if (currentUser && currentUser.saved_properties) {
          currentUser.saved_properties.forEach( function ( saved_property ) {
            if (saved_property.id === id) {
              saved = saved_property.saved_property_id;
            }
          });
      }
      return saved;
    },
    updateSave: function () {
      ApiUtil.fetchCurrentUser();
    },
    render: function () {
      return (
        <div
          className="property-list-item group"
          onMouseEnter={ this.handleHover }
          onClick={ this.handleClick }>
          <div className="property-image">
            <ListItemPhoto
              photo = { this.props.photos }
              saved={ !!this.isSaved(this.props.id) }/>
          </div>
          <div>
            <Detail
              {...this.props}
              saved={ !!this.isSaved(this.props.id) }
              isSaved={ this.isSaved }
              updateSave={ this.updateSave }
            />
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
  });
})(this);
