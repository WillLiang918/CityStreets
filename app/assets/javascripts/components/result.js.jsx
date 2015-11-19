(function (root) {
  root.Result = React.createClass({
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
