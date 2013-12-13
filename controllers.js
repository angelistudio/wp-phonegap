var app = angular.module("MyApp", []);

app.controller("PostsCtrl", function($scope, $http) {
  $http.defaults.headers.common["X-Custom-Header"] = "Angular.js";
  $http.get('http://www.labilingue.it/api/get_recent_posts/').
    success(function(data, status, headers, config) {
      $scope.posts = data;
    });
});