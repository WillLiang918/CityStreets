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
            {['price', 'other'].map ( function (detail) {
              return <p className={detail} key={detail}>{this.state.property[detail]}</p>;
            }.bind(this))}
            </div>
        </div>
      );
    }
  });
})(this);
