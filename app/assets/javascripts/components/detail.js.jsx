(function(root){

  var Detail = root.Detail = React.createClass({
    componentDidMount: function() {
      ApiUtil.fetchSavedProperties();
    },

    render: function () {
      // debugger
      return(
        <div className="detail-component">
          <ul className="detail-title group" >
            <li className="detail-address">{this.props.property.address}</li>
            <li className="detail-save-button"
                onClick={this.handleClick}>★ save</li>
          </ul>
          <div className="detail-price">
            {this.props.property.price}
          </div>
          <div className="detail-info">
            <p>
              {this.props.property.details}
            </p>
          </div>
          <div className="detail-info">
            Listed by
          </div>
        </div>
      );
    }
  });
})(this);
