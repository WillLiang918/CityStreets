(function (root) {
  var MainHeader = root.MainHeader = React.createClass({
    render: function () {
      return (
        <div className="app-header group">
          <h1 className="app-logo">CityStreets</h1>
          <HeaderAuth />
        </div>
      );
    }
  });
})(this);
