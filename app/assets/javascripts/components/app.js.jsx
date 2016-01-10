var App = React.createClass ({
  getInitialState: function () {
    return this.getStateFromStore();
  },
  componentDidMount: function () {
    CurrentUserStore.addChangeListener(this.onChange);
    ApiUtil.fetchCurrentUser();
  },
  componentWillUnmount: function () {
    CurrentUserStore.removeChangeListener(this.onChange);
  },
  render: function () {
    var children = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, this.state);
    }, this);
    return (
      <div>
        <MainHeader
          currentUser={this.state.currentUser}
          auth={this.state.auth}
          toggleAuth={this.toggleAuth}
          history={this.props.history}
        />
        {children}
      </div>
    );
  },
  getStateFromStore: function () {
    return {
      currentUser: CurrentUserStore.currentUser(),
      auth: false,
      toggleAuth: this.toggleAuth,
      toggleRefineSearch: this.toggleRefineSearch,
    };
  },
  onChange: function () {
    this.setState(this.getStateFromStore());
  },
  toggleAuth: function () {
    this.setState({auth: !this.state.auth});
  },
});
