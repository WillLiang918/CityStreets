(function(root){
  var Detail = root.Detail = React.createClass({

    render: function () {
      var savedButton;
      if (this.props.saved) {
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
    },

    unsave: function () {
      var id = this.props.isSaved(this.props.id);
      ApiUtil.destroySavedProperty(id);
      this.updateSave();
    },

    save: function () {
      if (CurrentUserStore.currentUser()) {
        ApiUtil.createSavedProperty({
          user_id: this.props.currentUser.id,
          property_id: this.props.id
        });
        this.updateSave();
      } else {
        this.props.toggleAuth();
      }
    },

    updateSave: function () {
      ApiUtil.fetchCurrentUser();
      this.props.updateSave();
    },

  });
})(this);
