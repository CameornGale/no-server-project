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

headsOrTails();



function howManyX(string){
var numX = string.replace(/[^X]/g, "");
return numX.length;
}


var string = "empty,empty,OX,empty,emptyO,X,O";
howManyX(string);
