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

    render: function () {
      return (
        <div>
          <MainHeader
            currentUser={ this.state.currentUser }
            auth={ this.state.auth }
            toggleAuth={ this.toggleAuth }
            history={ this.props.history }/>
          <h3 className="splash-header">New York City Real Estate</h3>
          <SearchForm
            history={ this.history }/>
        </div>
      );
    },

    toggleAuth: function () {
      this.setState({ auth: !this.state.auth });
    },
    
  });
})(this);
