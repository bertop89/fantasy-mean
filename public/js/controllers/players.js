window.angular.module('ngff.controllers.players', [])
  .controller('PlayersController', ['$scope', 'Global', 'EPL', 'Players',
    function ($scope, Global, EPL, Players) {
      $scope.global = Global;
 
      $scope.positions = EPL.positions;
      $scope.eplteams = EPL.teams;
      $scope.limitct = 10;

      $scope.find = function (query) {
        Players.query(query, function (players) {
          $scope.players = players;
        });
      };
    }]);