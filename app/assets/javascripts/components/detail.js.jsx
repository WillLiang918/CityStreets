(function(root){

  var Detail = root.Detail = React.createClass({

    mixins: [ReactRouter.History, React.addons.LinkedStateMixin],

    getInitialState: function () {
      return { saved: !!CurrentUserStore.isSaved(this.props.property.id) };
    },

    // handleClick: function () {
    //   if (!!CurrentUserStore.isSaved(this.props.property.id)){
    //     var id = CurrentUserStore.isSaved(this.props.property.id);
    //     ApiUtil.destroySavedProperty(id, this.onSuccess);
    //   } else {
    //     ApiUtil.createSavedProperty({
    //       user_id: CurrentUserStore.currentUser().id,
    //       property_id: this.props.property.id
    //     });
    //   }
    // },

    unsave: function () {
      if (CurrentUserStore.currentUser()) {
        var id = CurrentUserStore.isSaved(this.props.property.id);
        ApiUtil.destroySavedProperty(id);
        ApiUtil.fetchCurrentUser();
        this.setState({ saved: false });
      }
    },

    save: function () {
      if (CurrentUserStore.currentUser()) {
        ApiUtil.createSavedProperty({
          user_id: CurrentUserStore.currentUser().id,
          property_id: this.props.property.id
        });
        ApiUtil.fetchCurrentUser();
        this.setState({ saved: true });
      } else {
        this.history.pushState(null, "/signin");
      }
    },

    render: function () {

      var savedButton;
      if (this.state.saved) {
        savedButton = <div onClick={this.unsave} className="detail-save-button">x</div>;
      } else {
        savedButton = <div onClick={this.save} className="detail-save-button">★ save</div>;
      }
      return(
        <div className="detail-component">
          <ul className="detail-title group" >
            <li className="detail-address">{this.props.property.address}</li>
            <li>{savedButton}</li>
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
