angular.module("app").service("gameRulesService",function(){

    this.gameRules = {
      eightball: "Think of a yes or no question then click on shake to get an answer from the mystical eightball",
      TicTacToe: "The object of Tic Tac Toe is to get three in a row. You play on a three by three game board. You play as X and the computer is O. You and the computer will alternate placing Xs and Os on the game board until either of you has three in a row or all nine squares are filled. Click on Reset to restart the game, and click Enable HAL 9000 for more of a challenge.",
      CoinToss: "Click heads or tails to call the flip. If the coin lands on your call you win!",
      roulette: "Load the gun then fire, if there is a bullet in the chamber you lose",
      soduku: "soduku rules",
      roy: " roy rules"


    }




})
