import template from './app.component.html';
import style from './app.component.scss';

function AppController($scope) {
  
}

AppController.$inject = ['$scope'];

export default app => {
  app.component('app', {
    template,
    controller: AppController
  });
}
