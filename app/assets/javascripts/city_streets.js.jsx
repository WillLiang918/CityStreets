$(function () {
  var root = document.getElementById("content");
  var RouterHandler = ReactRouter.RouterHandler;
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
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
