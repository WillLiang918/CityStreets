(function(root){

  var Detail = root.Detail = React.createClass({
    componentDidMount: function() {
    },

    render: function () {
      return(
        <div className="detail-component">
          <div className="detail-title" >
            {this.props.property.address}
          </div>
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
