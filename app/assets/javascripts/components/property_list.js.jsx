(function (root) {
  root.PropertyList = React.createClass({

    getPhoto: function (id) {
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
                photo={that.getPhoto(property.id)}
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
