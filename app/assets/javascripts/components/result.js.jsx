(function (root) {
  root.Result = React.createClass({
    // getInitialState: function () {
    //   return { map: "" };
    // },
    //
    // handlesMap: function (map) {
    //   this.setState({ map: map});
    // },

    render: function () {
      return (
        <div className="result">
          <ResultHeader history={this.props.history}/>
          <div>
            <PropertyList history={this.props.history}/>
          </div>
          <div>
            <Map />
          </div>
        </div>
      );
    }
  });
})(this);
