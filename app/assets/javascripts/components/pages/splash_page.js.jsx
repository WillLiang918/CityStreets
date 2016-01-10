(function (root) {
  var SplashPage = root.SplashPage = React.createClass({
    mixins: [ReactRouter.History],
    render: function () {
      return (
        <div>
         <div className="video-container">
           <video
            className="home-page-splash-video"
            src="http://s3.amazonaws.com/city-streets-development/videos/background.m4v"
            autoPlay
            type="video/mp4">
          </video>
        </div>
        <div className="splash-content-container">
          <div className="splash-content">
            <div className="splash-page-search">
              <h3 className="splash-header">New York City Real Estate</h3>
              <SearchForm
                history={this.props.history}
                toggleRefineSearch={this.toggleRefineSearch}
                />
            </div>
            </div>
          </div>
        </div>
      );
    },
    toggleRefineSearch: function () {},
  });
})(this);
