(function (root) {
  root.Result = React.createClass({
    render: function () {
      return (
        <div>
          <ResultHeader />
          <div>
            <PropertyList />
          </div>
          <div className="Map-component">
            Map
            <Map />
          </div>
        </div>
      );
    }
  });
})(this);
