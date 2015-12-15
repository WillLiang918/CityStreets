(function (root) {
  root.SavedPropertyList = React.createClass({

    getInitialState: function () {
      return {
        // properties: PropertyStore.all(),
        // photos: PhotoStore.all(),
      };
    },

    render: function () {
      var savedlist = "";
      var savedCount = 0;
      var user = this.props.currentUser;
      var that = this;
        if (user) {
          savedCount = user.saved_properties.length;
          savedlist = (<ul className="property-list group">
            {user.saved_properties.map( function (saved_property) {
              return (
                <PropertyListItem
                  currentUser={that.props.currentUser}
                  property={saved_property}
                  photos={ saved_property.photos }
                  history={that.props.history}
                  id={saved_property.property_id}
                  key={saved_property.id} />
              );
            })}
          </ul> );
        }
      return (
        <div>
          <h2>Saved Properties ({ savedCount })</h2>
          {savedlist}
        </div>
      );
    },
  });
})(this);
