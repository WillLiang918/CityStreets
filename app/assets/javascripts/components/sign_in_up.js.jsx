(function (root) {
  var SignInUp = root.SignInUp = React.createClass({

    render: function () {

      var signInUp;
      if (this.props.auth) {
        signInUp = (
          <div className={ this.props.auth }>
            <SignInUpFormModal
              history={this.props.history}
              toggleRefineSearch={ this.props.toggleAuth } />
          </div>
        );
      }

      return (
        <div>
          <div onClick={ this.props.toggleAuth }>
            Sign In/Up
          </div>
          <div className={ "sign-in-up-modal " + this.props.auth }>
            { signInUp }
          </div>
        </div>
      );
    }
  });
})(this);
