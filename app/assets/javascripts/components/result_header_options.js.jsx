(function (root) {
  root.ResultHeaderOptions = React.createClass({
    getInitialState: function () {
      return { refineSearch: false };
    },

    render: function () {

      var refineSearch;
      if (this.props.refineSearch) {
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
          <a onClick={ this.props.toggleRefineSearch } className="refine-search-button">Refine This Search</a>
          <div> { refineSearch }</div>
        </div>
      );
    }
  });
})(this);
