(function (root) {
  root.PropertyShow = React.createClass ({

    getInitialState: function () {
      var propertyId = this.props.params.propertyId;
      var property = this._findPropertyById(propertyId) || {} ;
      return { property: property };
    },

    _findPropertyById: function (id) {
      var result;
      PropertyStore.all().forEach( function (property) {
        if (id == property.id) {
          result = property;
        }
      }.bind(this));
      return result;
    },

    componentDidMount: function () {
      PropertyStore.addChangeListener(this._propertyChanged);
      ApiUtil.fetchProperties();
    },

    _propertyChanged: function () {
      var propertyId = this.props.params.propertyId;
      var property = this._findPropertyById(propertyId);
      this.setState({ property: property });
    },

    render: function () {
      return (
        <div>
        Hello World!
        </div>
      );
    }
  });
})(this);
