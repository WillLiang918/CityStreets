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
              <div className="search-location">
                <label>Location</label>
                <input
                  type="text"
                  placeholder="Neighborhood / Address / Building / Keyword"/>
              </div>
            </div>

            <div className="search-row group">
              <label>Price</label>
              <input
                type="text"
                placeholder="Any"/>
                <label>to</label>
              <label></label>
              <input
                type="text"
                placeholder="Any"/>
              <label>Bedrooms</label>
              <input
                type="text"
                placeholder="Any Beds"/>
              <label>Bathrooms</label>
              <input
                type="text"
                placeholder="Any Baths"/>
              </div>
            <br/>


            <button>Search</button>
          </form>
        </div>
      );
    }
  });
})(this);
