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
          <div className="detail-title">{this.state.property.address}</div>
          <div className="details-info">
            <p>
              {this.state.property.price}
            </p>
            <p>
              {this.state.property.details}
            </p>
          </div>
        </div>
      );
    }
  });
})(this);
