(function (root) {
  root.ResultHeader = React.createClass({

    render: function () {
      return (
        <div className="result-header-component">
          <ResultHeaderOptions history={ this.props.history }/>
        </div>
      );
    }
  });
})(this);
