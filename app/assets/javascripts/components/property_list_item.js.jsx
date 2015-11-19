(function (root) {
  root.PropertyListItem = React.createClass ({
    render: function () {
        return (
          <div className="property-list-item group">
            <div className="property-image">
              <img>IMG</img>
            </div>
            <div>
              <Detail id={this.props.id} className="detail-component"/>
            </div>
          </div>
        );
    }
  });
})(this);
