(function (root) {
  var ResultHeader = root.ResultHeader = React.createClass({
    toggleRefineSearch: function () {
      this.props.toggleRefineSearch();
    },
    render: function () {
      var count = this.countResults();
      var resultTitle;
      if (count === 1) {
        resultTitle = count + " NYC Real Estate & Apartment for Rent";
      } else {
        resultTitle = count + " NYC Real Estate & Apartments for Rent";
      }
      return (
        <div className="result-header-component">
          <div className="result-title">{resultTitle}</div>
          <ResultHeaderOptions
            refineSearch={this.props.refineSearch}
            toggleRefineSearch= {this.props.toggleRefineSearch}
            history={this.props.history}/>
        </div>
      );
    },
    countResults: function () {
      var property = this.props.properties[0];
      return property ? property.propertiesCount : 0;
    },
  });
})(this);
