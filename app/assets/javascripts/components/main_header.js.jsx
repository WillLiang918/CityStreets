(function (root) {
  var MainHeader = root.MainHeader = React.createClass({
    render: function () {
      return (
        <div className="app-header group">
          <a href="/" className="app-logo">CityStreets</a>
          <HeaderAuth />
        </div>
      );
    }
  });
})(this);
