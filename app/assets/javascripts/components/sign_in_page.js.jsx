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
        <p className="error" valueLink={this.state.errors}>{this.state.errors}</p>
        <form onSubmit={ this.handleSubmit }>
        <label>
          <input
            type="text"
            placeholder="Username"
            valueLink={this.linkState("username")} />
        </label>

        <label>
          <input
            type="password"
            placeholder="Password"
            valueLink={this.linkState("password")} />
        </label>

        <button className="submit-button">Sign In</button>
        </form>
      </div>
    );
  }
});
