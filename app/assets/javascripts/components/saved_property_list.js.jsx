(function (root) {
  root.SavedPropertyList = React.createClass({
    render: function () {
      var that = this;
      return (
        <ul className="property-list group">
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
