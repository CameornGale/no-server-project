angular.module("app").service("eightballService",function (){
this.getAnswer= function (){
  function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  var result = getRandomIntInclusive(1,4);
  switch (result) {
    case 1:
      return "Signs point to yes"
    break;
    case 2:
      return "Don't count on it"
    break;
    case 3:
      return "Concentrate and ask again"
    break;
    case 4:
      return "Reply hazy try again"
    break;
    default:
      return "Try again later"
  }



}

})
