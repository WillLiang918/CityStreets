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
        auth: false,
      };
    },

    onChange: function () {
      this.setState( this.getStateFromStore() );
    },

    componentDidMount: function () {
      CurrentUserStore.addChangeListener(this.onChange);
      PropertyStore.addChangeListener(this.onChange);
      this.setState({ page: 1 });
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
            <div className="two-thirds">
              <PropertyList
                currentUser={ this.state.currentUser }
                properties={ this.state.properties }
                photos={ this.state.photos }
                toggleAuth={ this.toggleAuth }
                auth={ this.state.auth }
                history={ this.props.history }/>
              <div className="pages">
                <a onClick={this.handlePrev}>Prev</a>
                <a onClick={this.handleNext}>Next</a>
              </div>
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

    handlePrev: function () {
      if (this.state.page > 1) {
        ApiUtil.fetchProperties(this.state.page - 1);
        this.setState({page: this.state.page - 1});
        window.scrollTo(0,0);
      }
    },

    handleNext: function () {
      if (this.state.properties[0].propertiesCount / 10 > this.state.page) {
        ApiUtil.fetchProperties(this.state.page + 1);
        this.setState({page: this.state.page + 1});
        window.scrollTo(0,0);
      }
    },
  });
})(this);
