(function (root) {
  root.Result = React.createClass({
    getInitialState: function () {
      return {
        refineSearch: false,
        properties: PropertyStore.all(),
        photos: PhotoStore.all()
       };
    },

    componentDidMount: function () {
      PropertyStore.addChangeListener(this._onChange);
      PhotoStore.addChangeListener(this._onChange);
      ApiUtil.fetchProperties();
      ApiUtil.fetchPhotos(PropertyStore.getIds);
      ApiUtil.fetchCurrentUser();
    },

    componentWillUnmount: function () {
      PropertyStore.removeChangeListener(this._onChange);
      PhotoStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
      this.setState({ properties: PropertyStore.all() });
    },

    render: function () {
      return (
        <div className="result">
          <ResultHeader
            refineSearch={ this.state.refineSearch }
            toggleRefineSearch= { this.toggleRefineSearch }
            history={this.props.history}/>
          <div>
            <PropertyList
              properties={this.state.properties}
              photos={this.state.photos}
              history={this.props.history}/>
          </div>
          <div>
            <Map />
          </div>
        </div>
      );
    },

    toggleRefineSearch: function () {
      this.setState({ refineSearch: !this.state.refineSearch });
    },
  });
})(this);
