(function (root) {
  root.PropertyListItem = React.createClass ({
    render: function () {
      return (
        <div
          className="property-list-item group"
          onMouseEnter={ this.handleHover }
          onClick={ this.handleClick }>
          <div className="property-image">
            <ListItemPhoto photo={ this.props.photo } />
          </div>
          <div>
            <Detail
              id={this.props.id}
              key={this.props.id}
              property={this.props.property}/>
          </div>
        </div>
      );
    },

    handleHover: function (event) {
      ApiActions.getMarker(this.props.property.latlng);
    },

    handleClick: function (event) {
      event.preventDefault();
      var that = this;
      if ( event.target.className !== "detail-save-button") {
        this.props.history.pushState(null, "properties/" + this.props.property.id);
      }
    },

    // changeButton: function () {
    //   this.setState({ saved: !this.state.saved });
    // },

  });
})(this);
