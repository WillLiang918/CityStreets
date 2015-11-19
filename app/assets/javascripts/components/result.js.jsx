(function (root) {
  root.Result = React.createClass({
    getInitialState: function () {
      return { map: "" };
    },

    handlesMap: function (map) {
      this.setState({ map: map});
    },

    render: function () {
      return (
        <div>
          <ResultHeader />
          <div>
            <Map setsNewMap={this.handlesMap}/>
          </div>
          <div>
            <PropertyList map={this.state.map}/>
          </div>
        </div>
      );
    }
  });
})(this);
