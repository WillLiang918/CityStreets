(function (root) {
  root.Result = React.createClass({
    getInitialState: function () {
      return { refineSearch: false };
    },

    toggleRefineSearch: function () {
      this.setState({ refineSearch: !this.state.refineSearch });
    },

    render: function () {
      return (
        <div className="result">
          <ResultHeader
            refineSearch={ this.state.refineSearch }
            toggleRefineSearch= { this.toggleRefineSearch }
            history={this.props.history}/>
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
