(function (root) {
  root.Result = React.createClass({

    getInitialState: function () {
      return this.getStateFromStore();
    },

    getStateFromStore: function () {
      return {
        currentUser: CurrentUserStore.currentUser(),
        properties: PropertyStore.all(),
        refineSearch: false,
        auth: false
      };
    },

    onChange: function () {
      this.setState( this.getStateFromStore() );
    },

    componentDidMount: function () {
      CurrentUserStore.addChangeListener(this.onChange);
      PropertyStore.addChangeListener(this.onChange);
      ApiUtil.fetchProperties();
      ApiUtil.fetchCurrentUser();
    },

    componentWillUnmount: function () {
      CurrentUserStore.removeChangeListener(this.onChange);
      PropertyStore.removeChangeListener(this.onChange);
    },

    render: function () {
      var background = (this.state.refineSearch) ? "active" : "non-active";

      return (
        <div>
          <div className="background"></div>
          <MainHeader
            currentUser={ this.state.currentUser }
            auth={ this.state.auth }
            toggleAuth={ this.toggleAuth }
            history={ this.props.history }/>
          <div className="result">
            <div
              onClick={ this.exitModal }
              className={ "modal-screen " + background }>
            </div>

            <ResultHeader
              properties={ this.state.properties }
              toggleRefineSearch={ this.toggleRefineSearch }
              refineSearch={ this.state.refineSearch }
              history={ this.props.history }/>
            <div>
              <PropertyList
                currentUser={ this.state.currentUser }
                properties={ this.state.properties }
                photos={ this.state.photos }
                toggleAuth={ this.toggleAuth }
                auth={ this.state.auth }
                history={ this.props.history }/>
            </div>
            <div>
              <Map />
            </div>
          </div>
        </div>
      );
    },

    toggleRefineSearch: function () {
      this.setState({ refineSearch: !this.state.refineSearch });
    },

    toggleAuth: function () {
      this.setState({ auth: !this.state.auth });
    },

    exitModal: function () {
      this.setState({
        refineSearch: false,
        auth: false
       });
    },
  });
})(this);
