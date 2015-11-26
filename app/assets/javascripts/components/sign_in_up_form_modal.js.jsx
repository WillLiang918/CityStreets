(function (root) {
  var SignInUpFormModal = root.SignInUpFormModal = React.createClass({
    getInitialState: function () {
      return { register: true };
    },

    render: function () {
      var signInUpChoice;
      if ( this.state.register ) {
        signInUpChoice = (
          <SignUpPage
            toggleAuth={ this.props.toggleAuth }/>
        );
      } else {
        signInUpChoice = (
          <SignInPage
            toggleAuth={ this.props.toggleAuth }/>
        );
      }

      return (
        <div className=".sign-in-up-modal">
          <SignModalTitle
            toggleAuth={ this.props.toggleAuth }/>
          <div className="sign-in-up-form-modal">
            <div className="new-user-text">
              Register for free to access all
              CityStreets has to offer including premium
              data and advanced features.</div>
            <div className="modal-tabs-container group">
              <div
                className="register-tab"
                onClick={ this.handleRegister}>Register</div>
              <div
                className="signIn-tab"
                onClick={ this.handleSignIn }>Sign In</div>
            </div>
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
