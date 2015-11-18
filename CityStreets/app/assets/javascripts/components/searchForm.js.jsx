(function(root){
  root.SearchForm = React.createClass ({
    handleSubmit: function (event) {
      event.preventDefault();
      this.props.history.pushState(null, "result");
    },

    render: function () {
      return (
        <div>
          <form className="search-form" onSubmit={this.handleSubmit}>
            <label>Location</label>
            <input
              type="text"
              placeholder="Neighborhood / Address / Building / Keyword"/>
            <br/>
            <label>Price</label>
            <input
              type="text"
              placeholder="Any"/>
            <br/>
            <label></label>
            <input
              type="text"
              placeholder="Any"/>
            <br/>
            <label>Bedrooms</label>
            <input
              type="text"
              placeholder="Any Beds"/>
            <br/>
            <label>Bathrooms</label>
            <input
              type="text"
              placeholder="Any Baths"/>
            <br/>
            <button>Search</button>
          </form>
        </div>
      );
    }
  });
})(this);
