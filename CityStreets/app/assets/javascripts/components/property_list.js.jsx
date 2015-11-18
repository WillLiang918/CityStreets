(function (root) {
  root.PropertyList = React.createClass({

    getInitialState: function () {
      return { properties: PropertyStore.all() };
    },

    _onChange: function () {
      this.setState({ properties: PropertyStore.all() });
    },

    componentDidMount: function () {
      PropertyStore.addChangeListener(this._onChange);
      ApiUtil.fetchProperties();
    },

    render: function () {
      return (
        <ul className="property-list group">
          {this.state.properties.map( function (property) {
            return (
              <PropertyListItem id={property.id} key={property.id} />
            );
          })}
        </ul>
      );
    },
  });
})(this);