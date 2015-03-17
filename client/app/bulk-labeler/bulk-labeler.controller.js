'use strict';

angular.module('pivotalUtilsApp')
  .controller('BulkLabelerCtrl', function ($scope, pivotalService) {
    $scope.message = 'Hello';

    pivotalService.promise.then(function() {
      pivotalService.getProjects().then(function(results) {
        console.log(results);
        $scope.projects = results.data;
        $scope.projectsString = JSON.stringify($scope.projects, null, 2);
      });

      $scope.projectSelected = function() {
        // load stories for project
        pivotalService.getStories($scope.selectedProject).then(function(results) {
          console.log(results.data);
          $scope.stories = results.data;
        });
      };
    });


  });