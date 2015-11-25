(function (root) {
  var HeaderAuth = root.HeaderAuth = React.createClass({

    getInitialState: function () {
      return {
        currentUser: CurrentUserStore.currentUser(),
        auth: false
      };
    },

    componentDidMount: function () {
      CurrentUserStore.addChangeListener(this._onChange);
      ApiUtil.fetchCurrentUser();
    },

    componentWillUnmount: function () {
      CurrentUserStore.removeChangeListener(this._onChange);
    },

    render: function () {
      var background = (this.state.auth) ? "active" : "non-active";
      var headerList;
      if ( this.state.currentUser !== null) {
        headerList = (
          <div>
            <li className="header-list-item">
              <a href="#/savedListings">Saved Properties</a>
            </li>
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
            <li>
              <SignInUp
                toggleAuth={ this.toggleAuth }
                auth={ this.state.auth } />
            </li>
            <li className="register-link header-list-item">
              <a href="#/signup"className="register">{"Register (It's Free)"}</a>
            </li>
          </div>
        );
      }

      return (
        <ul className="header-list group">
          <div
            onClick={ this.exitModal }
            className={ "modal-screen " + background }>
          </div>
          { headerList }
        </ul>
      );
    },

    _onChange: function () {
      this.setState({ currentUser: CurrentUserStore.currentUser() });
    },

    handleSignOut: function () {
      ApiUtil.signOut();
    },

    exitModal: function () {
      this.setState({ auth: false });
    },

    toggleAuth: function () {
      this.setState({ auth: !this.state.auth });
    },

  });
})(this);
