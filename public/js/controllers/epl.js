window.angular.module('ngff.controllers.epl', [])
  .controller('EPLController', ['$scope','$routeParams','Global','EPL',
    function($scope, $routeParams, Global, EPL) {
      $scope.global = Global;
      $scope.eplteams = EPL.teams;
      $scope.eplteam = EPL.teams[$routeParams['eplTeamId']];
 
    }]);