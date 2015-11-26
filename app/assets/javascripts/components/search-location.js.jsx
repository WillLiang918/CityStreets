( function (root) {

  var SearchLocation = root.SearchLocation = React.createClass({
    getInitialState: function () {
      return { location: this.props.location };
    },

    handleClick: function (e) {
      this.props.toggleCanShow();
      this.props.setNeighborhood(e.target.value);
    },

    render: function () {
      var that = this;
      var matches = [];
      if (this.props.matches.length > 0 ) {
        this.props.matches.forEach( function (match) {
          matches.push(
            <li>
              <input onChange={ that.handleClick } value={ match } type="checkbox">
                <label value={match}>
                  { match }
                </label>
              </input>
            </li>
          );
        });
      } else {
        matches = <div>Search for "{ this.props.location }.."</div>;
      }

      return (
        <div>
          { matches }
        </div>
      );
    }
  });
})(this);
