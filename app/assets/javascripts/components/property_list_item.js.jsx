(function (root) {
  root.PropertyListItem = React.createClass ({
    
    getInitialState: function () {
      return { saved: !!this.isSaved(this.props.property.id) };
    },

    isSaved: function (id) {
      var saved = false;
      var that = this;
      var saved_properties = this.props.currentUser.saved_properties;
      if (saved_properties) {
        saved_properties.forEach( function ( saved_property ) {
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
            <ListItemPhoto photo={ this.props.photo } />
          </div>
          <div>
            <Detail
              currentUser={ this.props.currentUser }
              saved={ this.state.saved }
              savedId={ this.state.savedId }
              isSaved={ this.isSaved }
              updateSave={ this.updateSave }
              property={this.props.property}/>
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
        this.props.history.pushState(null, "properties/" + this.props.property.id);
      }
    },

    updateSave: function () {
      this.setState({ saved: !this.state.saved });
    },

  });
})(this);
