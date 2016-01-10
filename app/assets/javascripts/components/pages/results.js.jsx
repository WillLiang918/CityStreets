(function (root) {
  root.Results = React.createClass({
    getInitialState: function () {
      return this.getStateFromStore();
    },
    componentDidMount: function () {
      PropertyStore.addChangeListener(this.onChange);
      ApiUtil.fetchProperties();
    },
    componentWillUnmount: function () {
      PropertyStore.removeChangeListener(this.onChange);
    },
    render: function () {
      var background = (this.state.refineSearch) ? "active" : "non-active";
      return (
        <div>
          <div className="background"></div>
          <div className="result">
            <div
              onClick={this.exitModal}
              className={"modal-screen " + background}>
            </div>
            <ResultHeader
              properties={this.state.properties}
              toggleRefineSearch={this.toggleRefineSearch}
              refineSearch={this.state.refineSearch}
              history={this.props.history}
            />
            <div className="two-thirds">
              <PropertyList
                {...this.props}
                properties={this.state.properties}
              />
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
    getStateFromStore: function () {
      return {
        page: 1,
        properties: PropertyStore.all(),
        refineSearch: false,
      };
    },
    onChange: function () {
      this.setState(this.getStateFromStore());
    },
    toggleRefineSearch: function () {
      this.setState({ refineSearch: !this.state.refineSearch });
    },
    exitModal: function () {
      this.setState({
        refineSearch: false,
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
