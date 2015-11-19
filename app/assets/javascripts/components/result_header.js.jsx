(function (root) {
  root.ResultHeader = React.createClass({
    render: function () {
      return (
        <div className="result-header-component">
          Search Results
          <ResultHeaderOptions />
        </div>
      );
    }
  });
})(this);
