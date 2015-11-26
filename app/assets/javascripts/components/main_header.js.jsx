 (function (root) {
  var MainHeader = root.MainHeader = React.createClass({

    mixins: [ReactRouter.History, React.addons.LinkedStateMixin],

    handleClick: function () {
      this.history.pushState(null, "/");
    },

    render: function () {
      return (
        <div className="app-header group">
          <div onClick={ this.handleClick } className="app-logo">CityStreets</div>
          <HeaderAuth
            currentUser={ this.props.currentUser }
            auth={ this.props.auth }
            toggleAuth={ this.toggleAuth }
            history={ this.props.history }/>
        </div>
      );
    },

    toggleAuth: function () {
      this.props.toggleAuth();
    },
  });
})(this);
