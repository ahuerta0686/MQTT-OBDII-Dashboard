var torqueService = new TorqueService();

var map;
var carPosition;

function init() {
  carPosition = { lat: 0, lng: 0 };
  torqueService.data.subscribe(function (data) {
    carPosition.lat = Number(data.latitude);
    carPosition.lng = Number(data.longitude);
  });
}

function initGoogleMapsApi() {
  map = new google.maps.Map($('#map')[0], {
    zoom: 16,
    center: carPosition,
    disableDefaultUI: true,
    zoomControl: true,
    scaleControl: true,
    fullscreenControl: true
  });

  var followCarControl = new FollowCarControl(map, carPosition);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(followCarControl.init());
}

init();
var viewModel = new ViewModel(torqueService);
