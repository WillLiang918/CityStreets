(function (root) {
  root.SavedPropertyList = React.createClass({

    getInitialState: function () {
      return {
        properties: PropertyStore.all(),
        photos: PhotoStore.all(),
        // saved: SavedPropertyStore.all()
        // currentUser: CurrentUserStore.currentUser()
      };
    },

    getPhoto: function (id) {
      var photo = PhotoStore.find(id)[0];
      if (typeof photo != "undefined") {
        return photo.image_url;
      }
    },

    // _onChange: function () {
    //   this.setState({ saved: SavedPropertyStore.all() });
    // },
    //
    // componentDidMount: function () {
    //   // PropertyStore.addChangeListener(this._onChange);
    //   PhotoStore.addChangeListener(this._onChange);
    //   SavedPropertyStore.addChangeListener(this._onChange);
    //   // CurrentUserStore.addChangeListener(this._onChange);
    //   ApiUtil.fetchCurrentUser();
    //   ApiUtil.fetchProperties();
    //   // ApiUtil.fetchSavedProperties(this.props.user);
    //   // ApiUtil.fetchPhotos(PropertyStore.getIds);
    // },
    //
    // componentWillUnmount: function () {
    //   // PropertyStore.removeChangeListener(this._onChange);
    //   PhotoStore.removeChangeListener(this._onChange);
    //   SavedPropertyStore.removeChangeListener(this._onChange);
    //   // CurrentUserStore.removeChangeListener(this._onChange);
    // },

    render: function () {
      var savedlist = "Hi";
      var that = this;
        if (this.props.currentUser) {
          savedlist = (<ul className="property-list group">
            {this.props.currentUser.saved_properties.map( function (saved_property) {
              return (
                <PropertyListItem
                  currentUser={that.props.currentUser}
                  property={saved_property}
                  photo={that.getPhoto(saved_property.property_id)}
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
