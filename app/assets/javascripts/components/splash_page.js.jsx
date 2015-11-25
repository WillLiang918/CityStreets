( function (root) {

  var SplashPage = root.SplashPage = React.createClass({
    mixins: [ReactRouter.History, React.addons.LinkedStateMixin],

    render: function () {
      return (
        <div>
          <h3 className="splash-header">New York City Real Estate</h3>
          <SearchForm
            history={ this.history }/>
        </div>
      );
    },
  });
})(this);
