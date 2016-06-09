angular.module("app").controller("rouletteCtrl",function ($scope, rouletteService, $stateParams, gameRulesService){

  $scope.showRules = false;
  var gameRules = gameRulesService.gameRules;
  // console.log(gameRules);
  for (var key in gameRules) {
    // console.log(key);
    // console.log($stateParams);
    if (key === "roulette") {
      // console.log(key);
      $scope.rules = gameRules[key];
    }
  }
  $scope.fire = function(num){
    var result = rouletteService.fire(num);
    if (result) {
      $scope.consequence = "YOU DIED!"
    }
    if (!result) {
      $scope.consequence = "YOU LIVED!"
    }
  }




})
