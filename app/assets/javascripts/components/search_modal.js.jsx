(function(root){
  root.SearchFormModal = React.createClass ({

    mixins: [ReactRouter.History, React.addons.LinkedStateMixin],

    getInitialState: function () {
      return {
          location: "",
          minPrice: null,
          maxPrice: null,
          bedrooms: null,
          bathrooms: null };
    },

    componentDidMount: function () {
      FilterParamsStore.addChangeListener(this._onChange);
      ApiUtil.fetchProperties();
    },

    componentWillUnmount: function () {
      // FilterParamsStore.removeChangeListener(this._onChange);
    },

    handleSubmit: function (event) {
      event.preventDefault();

      ApiActions.updateSearchParams(this.state);
      var params = FilterParamsStore.params();
      this.setState(params);
      ApiUtil.fetchProperties();
      this.props.history.pushState(null, "result");
    },

    _onChange: function () {
    },

    render: function () {
      return (
        <div>
          <div>Title</div>
          <form className="search-form group" onSubmit={this.handleSubmit}>

            <div className="search-row group">
              <div className="search-location-container">
                <label className="search-location">Location</label>
                <input
                  type="text"
                  valueLink={this.linkState("location")}
                  placeholder="Neighborhood / Address / Building / Keyword"/>
              </div>
            </div>

            <div className="search-row group">

              <div>
                <label className="search-price" >Price</label>
                <select
                  className="price-params"
                  valueLink={this.linkState("minPrice")}
                    type="text">
                    <option>Any</option>
                    <option>1000</option>
                    <option>2000</option>
                    <option>3000</option>
                    <option>4000</option>
                    <option>5000</option>
                    <option>6000</option>
                    <option>7000</option>
                </select>
                <label className="between-price">to</label>
                <select
                  className="price-params"
                  valueLink={this.linkState("maxPrice")}
                    type="text">
                    <option>Any</option>
                    <option>1000</option>
                    <option>2000</option>
                    <option>3000</option>
                    <option>4000</option>
                    <option>5000</option>
                    <option>6000</option>
                    <option>7000</option>
                </select>
              </div>

              <div>
                <label className="search-bedrooms">Bedrooms</label>
                <select
                valueLink={this.linkState("bedrooms")}
                  type="text">
                  <option>Any</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>

              <div>
                <label className="search-bathrooms">Bathrooms</label>
                <select
                valueLink={this.linkState("bathrooms")}
                  type="text">
                  <option>Any</option>
                  <option>1</option>
                  <option>1.5</option>
                  <option>2</option>
                  <option>2.5</option>
                  <option>3</option>
                  <option>3.5</option>
                  <option>4</option>
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
