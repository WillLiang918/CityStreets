(function(root){

  var Detail = root.Detail = React.createClass({

    mixins: [ReactRouter.History, React.addons.LinkedStateMixin],

    getInitialState: function () {
      return { saved: CurrentUserStore.isSaved(this.props.property.id) };
    },

    // componentDidMount: function() {
    //   CurrentUserStore.addChangeListener(this._onChange);
    //   //  This will throw 500 server errors
    //   // ApiUtil.fetchSavedProperties();
    // },
    //
    // componentWillUnmount: function () {
    //   CurrentUserStore.removeChangeListener(this._onChange);
    // },

    handleClick: function () {
      if (CurrentUserStore.isSaved(this.props.property.id)) {
        this.setState({
          saved: false
        });
      } else {
        this.setState({
          saved: true
        });
      }

      // ApiUtil.createSavedProperty({
      //   user_id: CurrentUserStore.currentUser().id,
      //   property_id: that.props.property.id
      // }, that.changeButton);
      // ApiUtil.fetchCurrentUser();
    },

    render: function () {

      var savedButton = this.state.saved ?
          <div className="detail-save-button">x</div> :
          <div className="detail-save-button">★ save</div>;

      return(
        <div className="detail-component">
          <ul className="detail-title group" >
            <li className="detail-address">{this.props.property.address}</li>
            <li onClick={this.handleClick}>{savedButton}</li>
          </ul>
          <div className="detail-price">
            {this.props.property.price}
          </div>
          <div className="detail-info">
            <p>
              {this.props.property.details}
            </p>
          </div>
          <div className="detail-info">
            Listed by
          </div>
        </div>
      );
    }
  });
})(this);
