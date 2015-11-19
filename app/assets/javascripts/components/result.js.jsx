(function (root) {
  root.Result = React.createClass({
    getInitialState: function () {
      return { map: null };
    },

    render: function () {
      return (
        <div>
          <ResultHeader />
          <div>
            <PropertyList />
          </div>
          <div>
            <Map map={this.state.map}/>
          </div>
        </div>
      );
    }
  });
})(this);
