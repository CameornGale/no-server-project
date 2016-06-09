angular.module("app").controller("ticTacControl",function($scope,$stateParams,$timeout,ticTacService,gameRulesService){

  // $scope.move = function(){
  //   console.log("im defined!");
  // }
  // $scope.test = function(){
  //   console.log("hi! :)")
  // }
  var result = false;

  $scope.anyResults = false;


  function showResults(){
  if (result) {
    $scope.message = result;
    $scope.anyResults = true;
  }
}


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



// $scope.move = function (){
//   console.log("i ran");
//     document.getElementById('id1').style.right =  parseInt((document.getElementById('id1').style.right-10))+'px';
//       $timeout($scope.move, 20);
// }






  var round = 0;
  $scope.isDisableda1 = false;
  $scope.isDisableda2 = false;
  $scope.isDisableda3 = false;
  $scope.isDisabledb1 = false;
  $scope.isDisabledb2 = false;
  $scope.isDisabledb3 = false;
  $scope.isDisabledc1 = false;
  $scope.isDisabledc2 = false;
  $scope.isDisabledc3 = false;
  $scope.sober = false;
  var playDrunk = true;

  var array = ['a1','a2','a3','b1','b2','b3','c1','c2','c3'];

$scope.turnOnSoberAI = function(){
  $scope.sober = true;
  playDrunk = false;

}






      function checkRound(){
        // console.log("checking round");
        if (ticTacService.afterFirst()) {
          $scope.sober = true;
        }


      if (ticTacService.boardIsFull()) {

          $scope.message = "It's a Draw";
          result = "It's a Draw";
          showResults();

      }

    }

    function aiTurn(){
      if (ticTacService.boardIsFull()) {
        return checkRound();
      }
      var location = ticTacService.getAiLocation();
      while (location === undefined) {
        location = ticTacService.getAiLocation();
      }
      $scope[location] = "O";
      for (var ai = 0; ai < array.length; ai++) {
        if (array[ai]===location) {
          var disable = "isDisabled"+ location;
          $scope[disable] = true;
        }
      }
      round = round + 1;
      ticTacService.pushData(location, "O");
      result = ticTacService.getResult();
      if (result === "O is the Winner") {
        $scope.message = result;
        showResults();
        // if (confirm("play again?")) {
        //
        //   reset();
        // }
      }

    }




    function aiSober(){
      // console.log("sober");
      // ticTacService.testSoberAi();
      var location = ticTacService.soberLocation();
      round = round + 1;
      $scope[location] = "O";
      for (var ai = 0; ai < array.length; ai++) {
        if (array[ai]===location) {
          var disable = "isDisabled"+ location;
          $scope[disable] = true;
        }
      }
      ticTacService.pushData(location, "O");
      result = ticTacService.getResult();
      if (result === "O is the Winner") {
          $scope.message = result;
          showResults()
      }

    }








  $scope.placeToken = function(location){
      checkRound();
    $scope[location] = "X";
    for (var i = 0; i < array.length; i++) {
      if (array[i]===location) {
        var disable = "isDisabled"+ location;
        $scope[disable] = true;
      }
    }

    ticTacService.pushData(location, "X");
    // ticTacService.viewgame();
    result = ticTacService.getResult()
    if (result === "X is the Winner") {
        $scope.message = result;
        showResults()
        return;

    }
    if (playDrunk) {
      aiTurn();

    }
    if (!playDrunk) {
      aiSober();
    }





  checkRound()

  }

  function reset (){
    ticTacService.resetGame();
    result = false;
    round =0;
    $scope.a1 = '';
    $scope.a2 = '';
    $scope.a3 = '';
    $scope.b1 = '';
    $scope.b2 = '';
    $scope.b3 = '';
    $scope.c1 = '';
    $scope.c2 = '';
    $scope.c3 = '';
    $scope.isDisableda1 = false;
    $scope.isDisableda2 = false;
    $scope.isDisableda3 = false;
    $scope.isDisabledb1 = false;
    $scope.isDisabledb2 = false;
    $scope.isDisabledb3 = false;
    $scope.isDisabledc1 = false;
    $scope.isDisabledc2 = false;
    $scope.isDisabledc3 = false;
    $scope.sober = false;
    $scope.anyResults = false;
    playDrunk = true;

  }
$scope.reset = reset;




})



//===1==2===3===
