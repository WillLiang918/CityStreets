( function (root) {
  var SearchModalTitle = root.SearchModalTitle = React.createClass({

    toggleRefineSearch: function () {
      this.props.toggleRefineSearch();
    },

    handleApply: function () {
      this.props.handleApply();
    },

    render: function () {
      return (
        <div className="search-modal-navbar group">
          <div
            className="search-modal-navbar-left"
            onClick={ this.toggleRefineSearch }>
            Close
          </div>
          <div className="search-modal-navbar-middle">
            Refine Your Search
          </div>
          <div
            className="search-modal-navbar-right"
            onClick={ this.handleApply }>
            Apply
          </div>
        </div>
      );
    }
  });
})(this);
