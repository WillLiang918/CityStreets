window.SignUpPage = React.createClass({

  mixins: [ReactRouter.History, React.addons.LinkedStateMixin],

  getInitialState: function () {
    return { username: "", password: "", errors: [] };
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
      <div>
        <ul valueLink={this.state.errors}>
          {this.state.errors.map( function (error, idx) {
              return (
                <li className="error" key={idx}>
                  {error}
                </li>
              );
          }.bind(this))}
        </ul>
        <h2>Sign Up</h2>
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
