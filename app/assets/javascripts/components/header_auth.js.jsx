(function (root) {
  var HeaderAuth = root.HeaderAuth = React.createClass({

    getInitialState: function () {
      return { currentUser: CurrentUserStore.currentUser() };
    },

    componentDidMount: function () {
      CurrentUserStore.addChangeListener(this._onChange);
    },

    _onChange: function () {
      this.setState({ currentUser: CurrentUserStore.currentUser() });
    },

    render: function () {

      return (
        <ul className="header-list group">
          Hello World
        </ul>
      );
    }
  });
})(this);
