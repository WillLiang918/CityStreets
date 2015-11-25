( function (root) {
  var SearchModalTitle = root.SearchModalTitle = React.createClass({

    toggleRefineSearch: function () {
      this.props.toggleRefineSearch();
    },
    
    render: function () {
      return (
        <div className="search-modal-navbar group">
          <div className="search-modal-navbar-left">
            Close
          </div>
          <div className="search-modal-navbar-middle">
            Refine Your Search
          </div>
          <div
            className="search-modal-navbar-right"
            onClick={ this.toggleRefineSearch }>
            Apply
          </div>
        </div>
      );
    }
  });
})(this);
