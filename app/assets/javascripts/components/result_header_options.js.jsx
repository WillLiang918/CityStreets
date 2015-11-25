(function (root) {
  root.ResultHeaderOptions = React.createClass({
    getInitialState: function () {
      return {
        refineSearch: false,
      };
    },

    render: function () {

      var refineSearch;
      if (this.props.refineSearch) {
        refineSearch = (
          <div className={ this.props.refineSearch }>
            <SearchFormModal
              history={this.props.history}
              toggleRefineSearch={ this.props.toggleRefineSearch } />
          </div>
        );
      }

      return (
        <div className="result-header-options-component">
          <a onClick={ this.props.toggleRefineSearch } className="refine-search-button ">Refine This Search</a>
          <div className={ "search-modal "+ this.props.refineSearch }>
            { refineSearch }
          </div>
        </div>
      );
    }
  });
})(this);
