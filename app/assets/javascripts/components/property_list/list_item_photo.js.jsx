(function (root) {
  root.ListItemPhoto = React.createClass ({

    render: function () {
      var klass;
      klass = this.props.saved ? " normal-image saved" : "normal-image";
      return (
        <div className="list-item-photo-container">
          <div className={"triangle-icon-" + this.props.saved }>
            <div className="star-icon">★</div>
          </div>
          <img className={klass} src={this.props.photo} />
        </div>
      );
    }
  });
})(this);
