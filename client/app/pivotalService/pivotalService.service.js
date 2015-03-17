'use strict';

angular.module('pivotalUtilsApp')
  .factory('pivotalService', function ($resource, $q, $http, pivotalConfig) {
    var deferred = $q.defer();
    var api = {
      promise: deferred.promise
    };

    $http.defaults.headers.common.Authorization = undefined;

    pivotalConfig.getConfig().then(function(config) {

      api.getProjects = function() {
        return $http.get('/api/pivotal/projects');
      };

      api.getStories = function(projectId, filters) {
        return $http.get('/api/pivotal/projects/' + projectId + '/stories' + buildQueryString(filters));
      }

      deferred.resolve();
    });

    function buildQueryString(filters) {
      if (!filters) {
        return "";
      }

      var i;
      var queryString = "";

      for (i=0; i<filters.length; i++) {
        if (i === 0) {
          queryString += "?";
        }
        queryString += filters[i];
        if (i !== filters.length - 1) {
          queryString += "&";
        }
      }

      return queryString;
    }

    // Public API here
    return api;
  });
