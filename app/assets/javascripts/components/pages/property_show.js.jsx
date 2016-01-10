(function (root) {
  root.PropertyShow = React.createClass ({
    getInitialState: function () {
      return {
        property: "",
        currentPhoto: "",
        saved: !!this.isSaved(this.props.params.propertyId),
      };
    },
    componentDidMount: function () {
      PropertyStore.addChangeListener(this.updateProperty);
      ApiUtil.fetchProperty(this.props.params.propertyId);
    },
    componentWillUnmount: function () {
      PropertyStore.removeChangeListener(this.updateProperty);
    },
    render: function () {
      var detail;
      if (this.state.property) {
        detail = (
          <Detail
            {...this.props}
            id={this.props.params.propertyId}
            property={this.state.property}
            saved={!!this.isSaved(this.props.params.propertyId)}
            isSaved={this.isSaved}
            updateSave={this.updateSave}
          />
        );
      }
      return (
        <div>
          <div className="background"></div>
          <div className="property-page group">
            <div className="left-three-fifths group">
              <SlideShow
                currentPhoto={this.state.currentPhoto}
                changeCurrentPhoto={this.changeCurrentPhoto}
                property={this.state.property}
                id={parseInt(this.props.params.propertyId)}/>
              <Description
                property={this.state.property}/>
            </div>
            <div className="right-two-fifths">
              {detail}
            </div>
          </div>
        </div>
      );
    },
    isSaved: function (id) {
      var saved = false;
      var that = this;
      var currentUser = this.props.currentUser;
      if (currentUser && currentUser.saved_properties) {
          currentUser.saved_properties.forEach(function (saved_property) {
            if (saved_property.id == id) {
              saved = saved_property.saved_property_id;
            }
          });
      }
      return saved;
    },
    updateSave: function () {
      ApiUtil.fetchCurrentUser();
    },
    updateProperty: function () {
      this.setState({
        property: PropertyStore.all()[0],
        currentPhoto: PropertyStore.all()[0].photos[0]
       });
    },
    changeCurrentPhoto: function (photo) {
      this.setState({currentPhoto: photo});
    },
  });
})(this);
