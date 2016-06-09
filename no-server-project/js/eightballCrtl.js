angular.module("app").controller("eightballCtrl",function ($scope,eightballService, $stateParams, gameRulesService){

  $scope.showRules = false;
  $scope.anyResults = false;
  // var userquestion = "life, universe, everything"
  var gameRules = gameRulesService.gameRules;
  // console.log(gameRules);
  for (var key in gameRules) {

    if (key === "eightball") {
      // console.log(key);
      $scope.rules = gameRules[key];
    }
  }


  $scope.shake = function(string){
    $scope.anyResults =true;
    var question = "life, the universe, and everything"
    var answer = eightballService.getAnswer();
    answer = answer.toUpperCase();
    $scope.message = "The answer to :"+ string + " is : " + answer;

  };

  $scope.reset=function(){
    $scope.question = "";
    $scope.anyResults = false;
  };



})
