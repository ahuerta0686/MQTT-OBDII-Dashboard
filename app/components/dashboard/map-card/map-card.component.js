import template from './map-card.component.html';

function MapCardController($scope) {
  console.log(this);
}

MapCardController.$inject = ['$scope'];

export default app => {
  app.component('mapCard', {
    template,
    controller: MapCardController,
    bindings: {
      googleMapsApiKey: '<'
    }
  });
}
