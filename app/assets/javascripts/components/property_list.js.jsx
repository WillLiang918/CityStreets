(function (root) {
  root.PropertyList = React.createClass({

    getPhoto: function (property) {
      var id = property.id;
      var photo = PhotoStore.find(id)[0];
      if (typeof photo != "undefined") {
        return photo.image_url;
      }
    },

    render: function () {
      var that = this;
      return (
        <ul className="property-list group">
          {that.props.properties.map( function (property) {
            return (
              <PropertyListItem
                currentUser={that.props.currentUser}
                property={property}
                photo={that.getPhoto(property)}
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
