(function (root) {
  root.PropertyListItem = React.createClass ({

    getInitialState: function () {
      return { saved: CurrentUserStore.isSaved(this.props.property.id) };
    },

    handleHover: function (event) {
      ApiActions.getMarker(this.props.property.latlng);
    },

    changeButton: function () {
      this.setState({ saved: !this.state.saved });
    },

    handleClick: function (event) {
      event.preventDefault();
      var that = this;
      if ( event.target.className == "detail-save-button") {

      } else {
        this.props.history.pushState(null, "properties/" + this.props.property.id);
      }
    },

    render: function () {
        return (
          <div
            className="property-list-item group"
            onMouseEnter={this.handleHover}
            onClick={this.handleClick}>
            <div className="property-image">
              <ListItemPhoto property={this.props.property} />
            </div>
            <div>
              <Detail
                id={this.props.id}
                key={this.props.id}
                property={this.props.property}/>
            </div>
          </div>
        );
    }
  });
})(this);
