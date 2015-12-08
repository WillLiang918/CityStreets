( function (root) {
  var SplashPage = root.SplashPage = React.createClass({
    mixins: [ReactRouter.History, React.addons.LinkedStateMixin],

    getInitialState: function () {
      return this.getStateFromStore();
    },

    getStateFromStore: function () {
      return {
        currentUser: CurrentUserStore.currentUser(),
        auth: false
      };
    },

    onChange: function () {
      this.setState( this.getStateFromStore() );
    },

    componentDidMount: function () {
      CurrentUserStore.addChangeListener(this.onChange);
      ApiUtil.fetchCurrentUser();
    },

    componentWillUnmount: function () {
      CurrentUserStore.removeChangeListener(this.onChange);
    },
          //  <iframe
          //   src="//player.vimeo.com/video/96396015?title=0&amp;byline=0&amp;portrait=0&amp;color=3a6774&amp;autoplay=1&amp;loop=1&amp;muted=1"
          //   width="960" height="540" frameBorder="0" webkitallowfullscreen
          //   mozallowfullscreen allowFullScreen>
          //  </iframe>
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
            <MainHeader
              currentUser={ this.state.currentUser }
              auth={ this.state.auth }
              toggleAuth={ this.toggleAuth }
              history={ this.props.history }/>
            <div className="splash-page-search">
              <h3 className="splash-header">New York City Real Estate</h3>
              <SearchForm
                history={ this.history }/>
              </div>
            </div>
          </div>
        </div>
      );
    },

    toggleAuth: function () {
      this.setState({ auth: !this.state.auth });
    },
  });
})(this);
