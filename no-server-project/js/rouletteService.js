angular.module("app").service("rouletteService",function (){

  function roulette(bullets){
    if (bullets === 0) {
      return false;
    }
    var chamber = [0,0,0,0,0,0];
    function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    function load(){
      var place2load = getRandomIntInclusive(0,5);
      if (chamber[place2load] === 0) {
          return chamber[place2load] = 1;
      }
      if (chamber[place2load] === 1) {
        load();
      }
    }
    for (var i = 0; i < bullets; i++) {
      load();
    }
    // console.log(chamber);
    var round2fire = getRandomIntInclusive(0,5);
    for (var j = 0; j < chamber.length; j++) {
      if (chamber[j] === 1) {
          // console.log(j);
          // console.log(round2fire);
        if (round2fire === j) {
          // console.log("die");
          return true;
        }
      }
    }





    return false;
  }
this.fire = roulette;
})
