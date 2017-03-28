import angular from 'angular';
import GoogleMapsLoader from 'google-maps';

import AppComponent from './app.component';

import DashboardComponent from './components/dashboard/dashboard.component';

const app = angular.module('mqttObdDashboard', []);

AppComponent(app);
DashboardComponent(app);
