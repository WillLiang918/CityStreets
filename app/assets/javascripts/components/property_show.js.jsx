(function (root) {
  root.PropertyShow = React.createClass ({

    getInitialState: function () {
      ApiUtil.fetchProperties();
      var propertyId = this.props.params.propertyId;
      var property = this._findPropertyById(propertyId) || {} ;
      return { property: property };
    },

    componentDidMount: function () {
      PropertyStore.addChangeListener(this._getState);
      ApiUtil.fetchProperties();
    },

    componentWillUnmount: function () {
      PropertyStore.removeChangeListener(this._getState);
    },

    render: function () {
      return (
        <div className="property-page group">
          <SlideShow property={this.state.property} />
          <Detail property={this.state.property} />
        </div>
      );
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

    _getState: function () {
      var propertyId = this.props.params.propertyId;
      var property = this._findPropertyById(propertyId);
      this.setState({ property: property });
    },
  });
})(this);
