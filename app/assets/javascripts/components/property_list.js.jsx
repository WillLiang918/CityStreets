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

    componentWillUnmount: function () {
      PropertyStore.removeChangeListener(this._onChange);
    },

    handleHover: function () {
    },

    render: function () {
      var that = this;
      return (
        <ul className="property-list group">
          {that.state.properties.map( function (property) {
            return (
              <PropertyListItem
                property={property}
                history={that.props.history}
                handleHover={that.handleHover}
                id={property.id}
                key={property.id} />
            );
          })}
        </ul>
      );
    },
  });
})(this);
