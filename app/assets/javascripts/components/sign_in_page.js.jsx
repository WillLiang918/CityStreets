window.SignInPage = React.createClass({

  mixins: [ReactRouter.History, React.addons.LinkedStateMixin],

  getInitialState: function () {
    return { username: "", password: "", errors: "" };
  },

  handleSubmit: function (e) {
    e.preventDefault();
    ApiUtil.signIn(this.state, function (currentUser) {
      if (typeof currentUser.id !== "undefined") {
        this.history.pushState(null, "/");
      } else {
        this.setState({
          username: "",
          password: "",
          errors: currentUser.errors
        });
      }
    }.bind(this));
  },

  render: function () {
    return (
      <div>
        <p valueLink={this.state.errors}>{this.state.errors}</p>
        <h1>Sign In</h1>
        <form onSubmit={ this.handleSubmit }>
        <label>
          Username
          <input
            type="text"
            valueLink={this.linkState("username")} />
        </label>

        <label>
          Password
          <input
            type="password"
            valueLink={this.linkState("password")} />
        </label>

        <button>SIGN IN</button>
        </form>
      </div>
    );
  }
});
