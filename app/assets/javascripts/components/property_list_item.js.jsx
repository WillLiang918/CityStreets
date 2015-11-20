(function (root) {
  root.PropertyListItem = React.createClass ({

    getInitialState: function () {
      return this.getStateFromStore();
    },

    getStateFromStore: function () {
      return { property: PropertyStore.find(parseInt(this.props.id))};
    },

    handleHover: function (event) {
      ApiActions.getMarker(this.state.property.latlng);
    },

    handleClick: function (event) {
      event.preventDefault();
      this.props.history.pushState(null, "properties/" + this.state.property.id);
    },

    render: function () {
        return (
          <div
            className="property-list-item group"
            onMouseEnter={this.handleHover}
            onClick={this.handleClick}>
            <div className="property-image">
              <ListItemPhoto property={this.state.property} />
            </div>
            <div>
              <Detail id={this.props.id} property={this.state.property}/>
            </div>
          </div>
        );
    }
  });
})(this);
