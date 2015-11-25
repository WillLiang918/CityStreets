(function (root) {
  var SignInUpFormModal = root.SignInUpFormModal = React.createClass({
    getInitialState: function () {
      return { register: true };
    },

    render: function () {

      var signInUpChoice;
      if ( this.state.register ) {
        signInUpChoice = (
          <SignUpPage />
        );
      } else {
        signInUpChoice = (
          <SignInPage />
        );
      }

      return (
        <div className=".sign-in-up-modal">
          <SignModalTitle />
          <div className="sign-in-up-form-modal">
            <div onClick={ this.handleRegister}>Register</div>
            <div onClick={ this.handleSignIn }>Sign</div>
            { signInUpChoice }
          </div>
        </div>
      );
    },

    handleRegister: function () {
      this.setState({ register: true });
    },

    handleSignIn: function () {
      this.setState({ register: false });
    }

  });
})(this);
