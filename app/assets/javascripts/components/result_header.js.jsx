(function (root) {
  root.ResultHeader = React.createClass({
    // getInitialState: function () {
    //   return { refineSearch: false };
    // },
    //
    // handleClick: function () {
    //   debugger
    //   this.setState({ refineSearch: !this.state.refineSearch });
    // },

    render: function () {
      // var refineSearch;
      // if (this.state.refineSearch) {
      //   refineSearch = (
      //     <div>
      //       <SearchForm />
      //     </div>
      //   );
      // } else {
      //   refineSearch = (
      //     <div>
      //     </div>
      //   );
      // }

      return (
        <div className="result-header-component">
          <ResultHeaderOptions history={ this.props.history }/>
        </div>
      );
    }
  });
})(this);
