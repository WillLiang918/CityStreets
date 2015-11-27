( function (root) {

  var SearchLocation = root.SearchLocation = React.createClass({
    getInitialState: function () {
      return { location: this.props.location };
    },

    handleClick: function (e) {
      this.props.toggleCanShow();
      this.props.setNeighborhood(e.target.value);
    },

    handleMouseEnter: function () {
      this.props.toggleCanShow();
    },

    render: function () {
      var that = this;
      var matches = [];
      if (this.props.matches.length > 0 ) {
        this.props.matches.forEach( function (match) {
          matches.push(
            <li className="location-modal-list-item group">
              <label value={match}>
                <input
                  className="select-location-button"
                  onChange={ that.handleClick }
                  value={ match }
                  type="checkbox">
                </input>
                <div className="select-location">{ match }</div>
              </label>
            </li>
          );
        });
      } else {
        matches = <li
          className="location-modal-list-item pg-list">
            <div
              onMouseEnter={ this.handleMouseEnter }
              className="pg-search">
              Search for "{ this.props.location }.."
            </div>
        </li>;
      }

      return (
        <div className="location-modal-list group">
          { matches }
        </div>
      );
    }
  });
})(this);
