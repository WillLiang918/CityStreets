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

      var headerList = function () {

        if ( typeof CurrentUserStore.currentUser !== "undefined") {
          return (
            <div>
              <li className="header-list-item">My Properties</li>
              <li className="header-list-item">Sign Out</li>
            </div>
          );
        } else {
          return (
            <div>
              <li className="sign-in header-list-item">Sign In</li>
              <li className="register header-list-item">
                "Register (It's Free)"
              </li>
            </div>
          );
        }
      };

      return (
        <ul className="header-list group">
          { headerList() }
        </ul>
      );
    }
  });
})(this);
