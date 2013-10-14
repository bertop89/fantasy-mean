window.angular.module('ngff.directives', [])
  .directive('positions', function() {
    return {
      restrict: "E",
      templateUrl: "views/players/positionselect.html"
    };
})

.directive('eplteams', function() {
  return {
    restrict: "E",
    templateUrl: "views/players/eplteamselect.html"
  };
})
.directive('searchlimit', function() {
  return {
    restrict: "E",
    templateUrl: "views/players/searchlimitselect.html"
  };
})
    

