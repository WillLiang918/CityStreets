$(function () {
  var root = document.getElementById("content");
  var RouterHandler = ReactRouter.RouterHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
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
        toggleAuth: this.toggleAuth
      };
    },
    onChange: function () {
      this.setState(this.getStateFromStore());
    },
    toggleAuth: function () {
      this.setState({auth: !this.state.auth});
    },
  });
  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={SplashPage}/>
      <Route path="photo" component={PhotoForm} />
      <Route path="search" component={Search} />
      <Route path="results" component={Results} />
      <Route path="savedListings" component={SavedListings} />
      <Route path="properties/:propertyId" component={PropertyShow} />
    </Route>
  );
  React.render(<Router>{routes}</Router>, root);
});
