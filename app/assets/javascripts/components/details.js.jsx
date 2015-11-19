(function(root){

  root.Detail = React.createClass({
    getStateFromStore: function () {
      return { property: PropertyStore.find(parseInt(this.props.id))};
    },

    getInitialState: function () {
      return this.getStateFromStore();
    },

    componentDidMount: function() {
    },

    render: function () {
      return(
        <div className="detail-component">
          <div className="detail-title">
            {this.state.property.address}
          </div>
          <div className="detail-price">
            {this.state.property.price}
          </div>
          <div className="detail-info">
            <p>
              {this.state.property.details}
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
