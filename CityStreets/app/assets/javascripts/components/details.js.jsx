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
          {['address', 'price', 'other'].map ( function (detail) {
            return <p key={detail}>{detail}: {this.state.property[detail]}</p>;
          }.bind(this))}
        </div>
      );
    }
  });
})(this);
