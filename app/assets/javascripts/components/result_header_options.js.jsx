(function (root) {
  root.ResultHeaderOptions = React.createClass({
    getInitialState: function () {
      return { refineSearch: false };
    },

    handleClick: function () {
      this.setState({ refineSearch: !this.state.refineSearch });
    },

    render: function () {

      var refineSearch;
      if (this.state.refineSearch) {
        refineSearch = (
          <div>
            <SearchForm history={this.props.history} />
          </div>
        );
      } else {
        refineSearch = (
          <div>
          </div>
        );
      }

      return (
        <div className="result-header-options-component">
          <a onClick={ this.handleClick } className="refine-search-button">Refine This Search</a>
          <div> { refineSearch }</div>
        </div>
      );
    }
  });
})(this);
