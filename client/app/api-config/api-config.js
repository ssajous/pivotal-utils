'use strict';

angular.module('pivotalUtilsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('api-config', {
        url: '/api-config',
        templateUrl: 'app/api-config/api-config.html',
        controller: 'ApiConfigCtrl',
        authenticate: true
      });
  });
