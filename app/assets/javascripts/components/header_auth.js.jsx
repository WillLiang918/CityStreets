(function (root) {
  var HeaderAuth = root.HeaderAuth = React.createClass({

    getInitialState: function () {
      return { currentUser: CurrentUserStore.currentUser() };
    },

    componentWillMount: function () {
      CurrentUserStore.addChangeListener(this._onChange);
      ApiUtil.fetchCurrentUser();
    },

    _onChange: function () {
      this.setState({ currentUser: CurrentUserStore.currentUser() });
    },

    handleSignOut: function () {
      ApiUtil.signOut();
    },

    render: function () {

      var headerList;

      if ( this.state.currentUser !== null) {
        headerList = (
          <div>
            <li className="header-list-item">Saved Properties</li>
            <li className="header-list-item"
                onClick={this.handleSignOut}>
              Sign Out
            </li>
          </div>
        );
      } else {
        headerList = (
          <div>
            <li className="sign-in header-list-item">
              <a href="#/signin">Sign In</a>
            </li>
            <li className="register-link header-list-item">
              <a href="#/signup"className="register">{"Register (It's Free)"}</a>
            </li>
          </div>
        );
      }

      return (
        <ul className="header-list group">
          { headerList }
        </ul>
      );
    }
  });
})(this);
