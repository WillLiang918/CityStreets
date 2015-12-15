(function (root) {
  var SignInUp = root.SignInUp = React.createClass({

    render: function () {

      var signInUp;
      if (this.props.auth) {
        signInUp = (
          <div className={ this.props.auth }>
            <SignInUpFormModal
              history={ this.props.history }
              toggleAuth={ this.props.toggleAuth } />
          </div>
        );
      }

      return (
        <div group>
          <div
            className="sign-in header-list-item"
            onClick={ this.props.toggleAuth }>
            Sign In
          </div>
          <div
            className="register-link header-list-item"
            onClick={ this.props.toggleAuth }>
            <div className="register">{"Register (It's Free)"}</div>
          </div>
          <div className={ "sign-in-up-modal " + this.props.auth }>
            { signInUp }
          </div>
        </div>
      );
    }
  });
})(this);
