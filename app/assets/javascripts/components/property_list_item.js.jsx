(function (root) {
  root.PropertyListItem = React.createClass ({

    // getInitialState: function () {
    //   return this.getStateFromStore();
    // },
    //
    // getStateFromStore: function () {
    //   return { property: PropertyStore.find(parseInt(this.props.id))};
    // },

    handleHover: function (event) {
      ApiActions.getMarker(this.props.property.latlng);
    },

    changeButton: function () {

    },

    handleClick: function (event) {
      event.preventDefault();
      if ( event.target.className == "detail-save-button") {
        ApiUtil.createSavedProperty({
          user_id: CurrentUserStore.currentUser().id,
          property_id: this.props.property.id
        }, this.changeButton);
        debugger
      } else {
        this.props.history.pushState(null, "properties/" + this.props.property.id);
      }
    },

    render: function () {
        return (
          <div
            className="property-list-item group"
            onMouseEnter={this.handleHover}
            onClick={this.handleClick}>
            <div className="property-image">
              <ListItemPhoto property={this.props.property} />
            </div>
            <div>
              <Detail
                id={this.props.id}
                key={this.props.id}
                property={this.props.property}/>
            </div>
          </div>
        );
    }
  });
})(this);
