function FollowCarControl(map, carPosition) {
  var control = this;

  control._carPosition = carPosition;
  control._control = $('<div>');
  control._marker = new google.maps.Marker({
    position: control._carPosition
  });
  control._map = map;

  var controlUI = $('<div>');
  controlUI.addClass('google-maps-control-ui');
  controlUI.addClass('disabled');
  controlUI.prop('title', 'Click to follow car');
  control._control.append(controlUI);

  var controlText = $('<div>');
  controlText.addClass('google-maps-control-text');
  controlText.html('<i class="fa fa-car"></i>');
  controlUI.append(controlText);

  controlUI.on('click', function () {
    control._followCar = true;
    $(control._control).find('.google-maps-control-ui').addClass('disabled');
    control._map.setCenter(control._marker.getPosition());
  });

  control._map.addListener('dragstart', function () {
    control._followCar = false;
    $(control._control).find('.google-maps-control-ui').removeClass('disabled');
  });

}

FollowCarControl.prototype._carPosition = null;
FollowCarControl.prototype._control = null;
FollowCarControl.prototype._followCar = true;
FollowCarControl.prototype._marker = null;
FollowCarControl.prototype._map = null;

FollowCarControl.prototype.init = function () {
  var control = this;
  control._marker.setMap(control._map);

  setInterval(function () {
    control._marker.setPosition(control._carPosition);
    if (control._followCar) {
      control._map.setCenter(carPosition);
    }
  }, 50);

  return control._control[0];
}
