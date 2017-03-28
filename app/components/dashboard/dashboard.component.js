import MapCardComponent from './map-card/map-card.component';

import template from './dashboard.component.html';

function DashboardController($scope) {
  $scope.title = 'OBD-II Dashboard';
}

DashboardController.$inject = ['$scope'];

export default app => {
  app.component('dashboard', {
    template,
    controller: DashboardController
  });

  MapCardComponent(app);
}
