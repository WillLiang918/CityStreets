(function (root) {
  var ResultHeader = root.ResultHeader = React.createClass({

    toggleRefineSearch: function () {
      this.props.toggleRefineSearch();
    },

    render: function () {
      return (
        <div className="result-header-component">
          <ResultHeaderOptions
            refineSearch={ this.props.refineSearch }
            toggleRefineSearch= { this.props.toggleRefineSearch }
            history={ this.props.history }/>
        </div>
      );
    }
  });
})(this);
