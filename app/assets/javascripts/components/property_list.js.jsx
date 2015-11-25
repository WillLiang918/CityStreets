(function (root) {
  root.PropertyList = React.createClass({

    render: function () {
      var that = this;
      return (
        <ul className="property-list group">
          {that.props.properties.map( function (property) {
            return (
              <PropertyListItem
                currentUser={that.props.currentUser}
                property={property}
                history={that.props.history}
                id={property.id}
                key={property.id} />
            );
          })}
        </ul>
      );
    },
  });
})(this);
