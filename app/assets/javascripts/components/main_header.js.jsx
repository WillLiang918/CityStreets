(function (root) {
  var MainHeader = root.MainHeader = React.createClass({

    mixins: [ReactRouter.History, React.addons.LinkedStateMixin],

    handleClick: function () {
      this.history.pushState(null, "/");
    },

    render: function () {
      return (
        <div className="app-header group">
          <div onClick={this.handleClick} className="app-logo">CityStreets</div>
          <HeaderAuth />
        </div>
      );
    }
  });
})(this);
