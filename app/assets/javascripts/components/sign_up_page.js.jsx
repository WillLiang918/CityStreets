window.SignUpPage = React.createClass({

  mixins: [ReactRouter.History, React.addons.LinkedStateMixin],

  getInitialState: function () {
    return { username: "", password: "", errors: [] };
  },

  demoUser: function (e) {
    e.preventDefault();
    ApiUtil.signIn({username: "admin", password: "password"}, function (currentUser) {
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

  handleSubmit: function (e) {
    e.preventDefault();
    ApiUtil.signUp(this.state, function (currentUser) {
      if (typeof currentUser.id !== "undefined") {
        this.history.pushState(null, "/");
      } else {
        this.setState({
          password: "",
          errors: currentUser.errors
        });
      }
    }.bind(this));
  },

  render: function () {
    return (
      <div className="sign-up-page">
        <ul valueLink={this.state.errors}>
          {this.state.errors.map( function (error, idx) {
              return (
                <li className="error" key={idx}>
                  {error}
                </li>
              );
          }.bind(this))}
        </ul>
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
            placeholder="Password (at least 6 characters)"
            valueLink={this.linkState("password")} />
        </label>

        <button className="submit-button">Register</button>
        </form>
        <button
          className="submit-button"
          onClick={this.demoUser}>Demo User</button>
      </div>
    );
  }
});
