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
          {this.props.children}
        </div>
      );
    }
  });

  var ResultContainer = React.createClass ({
    render: function () {
      return (
        <div>
          <div className="result">
            <Result />
          </div>
        </div>
      );
    }
  });

  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={SearchForm}/>
      <Route path="photo" component={PhotoForm} />
      <Route path="result" component={ResultContainer} />
    </Route>
  );

  React.render(<Router>{routes}</Router>, root);
});
