(function (root) {
  root.SavedPropertyList = React.createClass({

    getInitialState: function () {
      return {
        properties: PropertyStore.all(),
        photos: PhotoStore.all(),
      };
    },

    render: function () {
      var savedlist = "";
      var that = this;
        if (this.props.currentUser) {
          savedlist = (<ul className="property-list group">
            {this.props.currentUser.saved_properties.map( function (saved_property) {
              return (
                <PropertyListItem
                  currentUser={that.props.currentUser}
                  property={saved_property}
                  history={that.props.history}
                  id={saved_property.property_id}
                  key={saved_property.id} />
              );
            })}
          </ul> );
        }
      return (
        <div>{savedlist}</div>
      );
    },
  });
})(this);
