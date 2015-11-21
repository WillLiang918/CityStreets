$(function () {

  var root = document.getElementById("content");
  var RouterHandler = ReactRouter.RouterHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass ({
    render: function () {
      return (
        <div>
          <MainHeader />
          {this.props.children}
        </div>
      );
    }
  });

  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={SearchForm}/>
      <Route path="photo" component={PhotoForm} />
      <Route path="signin" component={SignInPage} />
      // <Route path="signup" component={PhotoForm} />
      <Route path="result" component={Result} />
      <Route path="properties/:propertyId" component={PropertyShow} />
    </Route>
  );

  React.render(<Router>{routes}</Router>, root);
});
