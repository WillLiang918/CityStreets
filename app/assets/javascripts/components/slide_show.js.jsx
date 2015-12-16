(function (root) {

  var SlideShow = root.SlideShow = React.createClass ({

    render: function () {
      var that = this;
      var propertyPhotos = this.props.property.photos || [];
      return (
        <div className="slide-show">
          <img className="selected-photo"
             src={ this.props.currentPhoto } />
          <ul className="thumb-photos group">
            {
              propertyPhotos.map( function (photo) {
                return <li key={photo}>
                  <img
                    className="thumb"
                    onClick={that.handleClick}
                    src={photo}
                  />
                </li>;
              })
            }
          </ul>
        </div>
      );
    },

    handleClick: function (event) {
      this.props.changeCurrentPhoto(event.target.src);
    },

  });
})(this);
