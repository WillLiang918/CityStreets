(function (root) {
  root.ListItemPhoto = React.createClass ({

    render: function () {
      var klass;
      klass = this.props.saved ? " normal-image saved" : "normal-image";
      return (
        <div>
          <img className={klass} src={this.props.photo} />
        </div>
      );
    }
  });
})(this);
