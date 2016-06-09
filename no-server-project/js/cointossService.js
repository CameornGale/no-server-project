angular.module("app").service("cointossService",function (){
  function headsOrTails(){
    function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    var result = getRandomIntInclusive(1,2);

    if (result === 2) {
      return "Heads"
    }
    return "Tails"
  }

  this.getResult = headsOrTails;


})
