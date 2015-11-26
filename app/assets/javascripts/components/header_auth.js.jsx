(function (root) {
  var HeaderAuth = root.HeaderAuth = React.createClass({

    // getInitialState: function () {
    //   return {
    //     currentUser: CurrentUserStore.currentUser(),
    //     auth: false
    //   };
    // },

    // componentDidMount: function () {
    //   ApiUtil.fetchCurrentUser();
    //   CurrentUserStore.addChangeListener(this._onChange);
    // },
    //
    // componentWillUnmount: function () {
    //   CurrentUserStore.removeChangeListener(this._onChange);
    // },

    render: function () {
      var background = (this.props.auth) ? "active" : "non-active";
      var headerList;
      if ( this.props.currentUser !== null) {
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
            <li>
              <SignInUp
                toggleAuth={ this.props.toggleAuth }
                auth={ this.props.auth } />
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
      this.props.toggleAuth();
    },

    // toggleAuth: function () {
    //   this.props.toggleAuth();
    // },

  });
})(this);
