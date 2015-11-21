window.SignInPage = React.createClass({

  mixins: [ReactRouter.History, React.addons.LinkedStateMixin],

  getInitialState: function () {
    return { username: "", password: "" };
  },

  handleSubmit: function (e) {
    e.preventDefault();
    debugger
    ApiUtil.signIn(this.state, function (currentUser) {
      debugger
      if (typeof currentUser.id !== "undefined") {
        debugger
        this.history.pushState(null, "/");
      } else {
        debugger
      }
    }.bind(this));
  },

  render: function () {
    return (
      <div>
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
