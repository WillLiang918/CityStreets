( function (root) {
  var SignModalTitle = root.SignModalTitle = React.createClass({
    render: function () {
      return (
        <div className="sign-in-up-modal-navbar group">
          <div
            className="sign-form-modal-cancel"
            onClick={ this.handleClick }>Cancel</div>
          <div
            className="sign-form-modal-sign-in">Sign In</div>
        </div>
      );
    },

    handleClick: function () {
      this.props.toggleAuth();
    },
  });
})(this);
