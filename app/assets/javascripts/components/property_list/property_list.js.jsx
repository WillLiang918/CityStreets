(function (root) {
  root.PropertyList = React.createClass({
    render: function () {
      var that = this;
      return (
        <ul>
          {that.props.properties.map(function (property) {
            return (
              <PropertyListItem
                {...that.props}
                property={property}
                photos={property.photos}
                id={property.id}
                key={property.id} />
            );
          })}
        </ul>
      );
    },
  });
})(this);
