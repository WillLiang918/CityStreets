(function (root) {
  root.PropertyListItem = React.createClass ({

    getInitialState: function () {
      return this.getStateFromStore();
    },

    getStateFromStore: function () {
      return { property: PropertyStore.find(parseInt(this.props.id))};
    },

    handleHover: function (event) {
      var address = this.state.property.address;
      debugger
    },


    render: function () {
        return (
          <div className="property-list-item group" onMouseOver={this.handleHover}>
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
