(function(root){
  root.SearchForm = React.createClass ({
    mixins: [React.addons.LinkedStateMixin],
    getInitialState: function () {
      return {
          location: "",
          neighborhood: "",
          minPrice: null,
          maxPrice: null,
          bedrooms: null,
          bathrooms: null,
          matches: [],
          canShow: true,
      };
    },
    handleSubmit: function (event) {
      event.preventDefault();
      ApiActions.updateSearchParams(this.state);
      var params = FilterParamsStore.params();
      this.setState(params);
      ApiUtil.fetchProperties();
      this.props.toggleRefineSearch();
      this.props.history.pushState(null, "results");
    },
    handleKeyPress: function (e) {
      var matches = [];
      this.setState({
        location: e.target.value,
        neighborhood: "",
        canShow: true
      });
      var searchText = new RegExp(e.target.value, 'i');
      for ( var i = 0; i < SearchConstants.NEIGHBORHOOD.length; i++ ) {
        var neighborhood = SearchConstants.NEIGHBORHOOD[i];
        if ( neighborhood.match(searchText) ) {
          matches.push( neighborhood );
        }
      }
      this.setState({matches: matches});
    },
    setNeighborhood: function (location) {
      this.setState({
        location: location,
        neighborhood: location
      });
    },
    toggleCanShow: function () {
      this.setState({canShow: false});
    },
    render: function () {
      var locationDetail;
      if ( this.state.location.length > 0 && this.state.canShow) {
        locationDetail = <SearchLocation
                            toggleCanShow={ this.toggleCanShow }
                            setNeighborhood={ this.setNeighborhood }
                            location={ this.state.location }
                            matches={ this.state.matches }/>;
      }
      return (
        <div>
          <form className="search-form group" onSubmit={this.handleSubmit}>
            <div className="search-row group">
              <div className="search-location-container">
                <label className="search-location">Location</label>
                <input
                  type="text"
                  onChange={this.handleKeyPress}
                  value={this.state.location}
                  placeholder="Neighborhood / Address / Building / Keyword"/>
                {locationDetail}
              </div>
            </div>
            <div className="search-row group">
              <div>
                <label className="search-price">Price</label>
                <select
                  className="price-params"
                  valueLink={this.linkState("minPrice")}
                    type="text">
                    <option>Any</option>
                    {SearchConstants.PRICE.map(function (price) {
                      return (
                        <option key={price}>{price}</option>
                      );
                    })}
                </select>
                <label className="between-price">to</label>
                <select
                  className="price-params"
                  valueLink={this.linkState("maxPrice")}
                    type="text">
                    <option>Any</option>
                    {SearchConstants.PRICE.map( function(price) {
                      return (
                        <option key={price}>{price}</option>
                      );
                    })}
                </select>
              </div>
              <div>
                <label className="search-bedrooms">Bedrooms</label>
                <select
                valueLink={this.linkState("bedrooms")}
                  type="text">
                  <option>Any Beds</option>
                    {SearchConstants.BEDROOMS.map(function (bedrooms) {
                      return (
                        <option key={bedrooms}>{bedrooms}</option>
                      );
                    })}
                </select>
              </div>
              <div>
                <label className="search-bathrooms">Bathrooms</label>
                <select
                valueLink={this.linkState("bathrooms")}
                  type="text">
                  <option>Any Baths</option>
                    {SearchConstants.BATHROOMS.map(function (bathrooms) {
                      return (
                        <option key={bathrooms}>{bathrooms}</option>
                      );
                    })}
                </select>
              </div>
              </div>
            <br/>
            <button className="search-button">Search</button>
          </form>
        </div>
      );
    }
  });
})(this);
