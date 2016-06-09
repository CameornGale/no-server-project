angular.module("app").controller("gameCrtl",function($scope, $stateParams, $state, $stateParams,gameRulesService){
  $scope.game = $stateParams.id;

  $scope.showRules = false;
  var gameRules = gameRulesService.gameRules;
  // console.log(gameRules);
  for (var key in gameRules) {
    // console.log(key);
    // console.log($stateParams);
    if ($stateParams.id === key) {
      // console.log(key);
      $scope.rules = gameRules[key];
    }
  }

})
