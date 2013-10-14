window.angular.module('ngff.services.epl', [])
  .factory('EPL', function() {
    var EPL = {};
    
    EPL.teams = [
        {"abbr":"MAU","team": "Manchester United", "stadium": "Old Trafford"},
        {"abbr":"LIV","team": "Liverpool", "stadium": "Anfield"}
    ];

    EPL.positions = [
      {"abbr":"GK",  "pos":"Goalkeeper"},
      {"abbr":"DF",  "pos":"Defense"},
      {"abbr":"MF",  "pos":"Midfielder"},
      {"abbr":"ST",  "pos":"Striker"}
    ];
    return EPL;
  });