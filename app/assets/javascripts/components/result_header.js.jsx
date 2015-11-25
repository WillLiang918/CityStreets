(function (root) {
  root.ResultHeader = React.createClass({

    toggleRefineSearch: function () {
      this.props.toggleRefineSearch();
    },
    
    render: function () {
      return (
        <div className="result-header-component">
          <ResultHeaderOptions
            refineSearch={ this.props.refineSearch }
            toggleRefineSearch= { this.toggleRefineSearch }
            history={ this.props.history }/>
        </div>
      );
    }
  });
})(this);
