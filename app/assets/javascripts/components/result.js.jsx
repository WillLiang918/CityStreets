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
            <PropertyList />
          </div>
          <div>
            <Map />
          </div>
        </div>
      );
    }
  });
})(this);
