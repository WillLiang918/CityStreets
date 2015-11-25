(function (root) {
  root.Result = React.createClass({

    render: function () {
      debugger
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
