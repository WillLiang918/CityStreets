(function(root){
  root.SearchForm = React.createClass ({
    handleSubmit: function (event) {
      event.preventDefault();
      this.props.history.pushState(null, "result");
    },

    render: function () {
      return (
        <div>
          <form className="search-form group" onSubmit={this.handleSubmit}>

            <div className="search-row group">
              <div className="search-location-container">
                <label className="search-location">Location</label>
                <input
                  type="text"
                  placeholder="Neighborhood / Address / Building / Keyword"/>
              </div>
            </div>

            <div className="search-row group">

              <div>
                <label className="search-price" >Price</label>
                <select
                  type="text">
                  <option>Any</option>
                  <option>1000</option>
                </select>
                <label>to</label>
                <select
                  type="text">
                  <option>Any</option>
                  <option>1000</option>
                </select>
              </div>

              <div>
                <label className="search-bedrooms">Bedrooms</label>
                <select
                  type="text">
                  <option>Any</option>
                  <option>1000</option>
                </select>
              </div>

              <div>
                <label className="search-bathrooms">Bathrooms</label>
                <select
                  type="text">
                  <option>Any</option>
                  <option>1000</option>
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
