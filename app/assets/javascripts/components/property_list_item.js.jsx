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

    render: function () {
        return (
          <div className="property-list-item group" onMouseEnter={this.handleHover}>
            <div className="property-image">
              <img>IMG</img>
            </div>
            <div>
              <Detail id={this.props.id} property={this.state.property}/>
            </div>
          </div>
        );
    }
  });
})(this);
