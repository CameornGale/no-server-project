angular.module("app").controller("cointossCtrl", function ($scope, cointossService, $state , $stateParams, gameRulesService){
  $scope.showRules = false;
  $scope.anyResults = false;
  $scope.noResult = true;
  $scope.headsResult = false;
  $scope.tailsResult= false;
  // $scope.coinStyle = {"background": "white"}
  var gameRules = gameRulesService.gameRules;
  // console.log(gameRules);
  for (var key in gameRules) {

    if (key === "CoinToss") {
      // console.log(key);
      $scope.rules = gameRules[key];
    }
  }

    $scope.reset = function(){
      $scope.message = "what will it be this time?"

    }

    $scope.heads = function(){

      var result = cointossService.getResult();
        $scope.anyResults = true;
        $scope.noResult = false;
      if (result === "Heads") {
        $state.go('heads');
        return $scope.message = "It was "+result+" you win!";
      }
      $scope.tailsResult = true;
        $state.go('tails');
      return $scope.message = "It was "+result+" you lose!";
    };
    $scope.tails = function(){
      var result = cointossService.getResult();
        $scope.anyResults = true;
        if (result === "Tails") {
          $state.go('tails');
          return $scope.message = "It was "+result+" you win!";
        }
        $state.go('heads');
        return $scope.message = "It was "+result+" you lose!";
    };

    // <!-- <img ng-show="headsResult" src="img/landedHeads.png" alt="heads" />
    // <img ng-show="tailsResult" src="img/landedTails.png" alt="tails" /> -->


})
