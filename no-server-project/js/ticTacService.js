angular.module("app").service("ticTacService",function(){


  var rowA = ['E','E','E'];
  var rowB = ['E','E','E'];
  var rowC = ['E','E','E'];


  var game =[rowA, rowB, rowC];

  var count = 0;

this.viewgame = function(){
  console.log(game);
}
this.afterFirst = function (){
  var board = game.join("")
  var numX = howManyX(board);


  if (numX===1) {

    return true;
  }

  return false;
}

  this.resetGame = function(){
      count = 0;
     rowA = ['E','E','E'];
     rowB = ['E','E','E'];
     rowC = ['E','E','E'];
      game =[rowA, rowB, rowC];
  }

  this.boardIsFull= function(){
    var board = game.join("")
    // console.log(board);
    var numX = howManyX(board);
    // console.log(numX);
    if (numX === 5) {
      return true;
    }
    return false;
  }



        this.getResult = function queryWinner(reset){
            var resultsArray =[];

            var row1 = game[0][0]+ game[1][0]+game[2][0];
            var row2 = game[0][1]+ game[1][1]+game[2][1];
            var row3 = game[0][2]+ game[1][2]+game[2][2];
            var col1 = rowA.join("");
            var col2 = rowB.join("");
            var col3 = rowC.join("");
            var dia1 = game[0][0]+ game[1][1]+game[2][2];
            var dia2 = game[0][2]+ game[1][1]+game[2][0];

              resultsArray = [
                row1,
                row2,
                row3,
                col1,
                col2,
                col3,
                dia1,
                dia2
              ];



              // console.log(resultsArray);

           for (var i = 0; i < resultsArray.length; i++) {
            //  console.log(i);
             if (/X{3}/.test(resultsArray[i])) {
               return "X is the Winner"
             }
             if (/O{3}/.test(resultsArray[i])) {
               return "O is the Winner"
             }
           }
          //  console.log(resultsArray);
           return false;
         }



  this.pushData = function(string, value){
    // console.log(game);
    if (string === "a1") {
      game[0][0] = value;
      // console.log(game);
    }
    if (string === "a2") {
      game[0][1] = value;
      // console.log(game);
    }
    if (string === "a3") {
      game[0][2] = value;
      // console.log(game);
    }
    if (string === "b1") {
      game[1][0] = value;
      // console.log(game);
    }
    if (string === "b2") {
      game[1][1] = value;
      // console.log(game);
    }
    if (string === "b3") {
      game[1][2] = value;
      // console.log(game);
    }
    if (string === "c1") {
      game[2][0] = value;
      // console.log(game);
    }
    if (string === "c2") {
      game[2][1] = value;
      // console.log(game);
    }
    if (string === "c3") {
      game[2][2] = value;
      // console.log(game);
    }
  }



  this.getAiLocation = function(){
  var drunk = 0;

  function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  drunk = getRandomIntInclusive(0,8);
  if (drunk === 0) {
    if (game[0][0] === 'E') {
      return "a1"
    }else {
      count = count + 1;
    }
  }
  if (drunk === 1) {
    if (game[0][1] === 'E') {
      return "a2"
    }else {
      count = count + 1;
    }
  }
  if (drunk === 2) {
    if (game[0][2] === 'E') {
      return "a3"
    }else {
      count = count + 1;
    }
  }
  if (drunk === 3) {
    if (game[1][0] === 'E') {
      return "b1"
    }else {
      count = count + 1;
    }
  }
  if (drunk === 4) {
    if (game[1][1] === 'E') {
      return "b2"
    }else {
      count = count + 1;
    }
  }
  if (drunk === 5) {
    if (game[1][2] === 'E') {
      return "b3"
    }else {
      count = count + 1;
    }
  }
  if (drunk === 6) {
    if (game[2][0] === 'E') {
      return "c1"
    }else {
      count = count + 1;
    }
  }
  if (drunk === 7) {
    if (game[2][1] === 'E') {
      return "c2"
    }else {
      count = count + 1;
    }
  }
  if (drunk === 8) {
    if (game[2][2] === 'E') {
      return "c3"
    }else {
      count = count + 1;
    }
  }
  // console.log("i ran");
  // console.log(count);
  // if (count >= 9) {
  //   return false;
  // }
    this.getAiLocation();

}


function first (){
  // console.log("first");
var gameTemp = [].concat.apply([], game);
var played = 0;
for (var i = 0; i < gameTemp.length; i++) {
  if (gameTemp[i]==='X') {
    played = i;
  }
}
// console.log(played);
// console.log(gameTemp);
if (/[0268]/.test(played)) {
  return "b2";
}
if (/[13457]/.test(played)) {
  return "c1";
}

}

function play(string){
  boardObj = {
  row1: ['a1','a2','a3'],
  row2: ['b1','b2','b3'],
  row3: ['c1','c2','c3'],
  col1: ['a1','b1', 'c1'],
  col2: ['a2','b2', 'c2'],
  col3: ['a3','b3', 'c3'],
  dia1: ['a1','b2', 'c3'],
  dia2: ['c1','b2', 'a3']
  }

  var line = string.replace(/(.{4}$)/g, "").split("")
  var locArray = /(.{4}$)/g.exec(string);
  var lineLoc = locArray[0];

  for (var i = 0; i < line.length; i++) {
    if (line[i] === 'E') {
      return boardObj[lineLoc][i];
    }
  }
}



function howManyX(string){
var numX = string.replace(/[^X]/g, "");
return numX.length;
}
function howManyO(string){
var numX = string.replace(/[^O]/g, "");
return numX.length;
}

function canIWin(array){
  for (var j = 0; j < array.length; j++) {
    if (howManyO(array[j])===2 && howManyX(array[j])===0) {
      return array[j];
    }
  }
  return false;
}

function need2block(array){
  for (var j = 0; j < array.length; j++) {
    if (howManyX(array[j])===2 && howManyO(array[j])===0) {
      return array[j];
    }
  }
  return false;
}

function playEdges (){
  var edges = game[0][1]+ game[1][0]+ game[1][2]+ game[2][1];
  // console.log(edges);
  var edgeLocations =['a2','b1','b3','c2']
  for (var i = 0; i < edges.length; i++) {
    if (edges[i]=== 'E') {
      return edgeLocations[i];
    }
  }
}
function canPlayEdges (){
  var edges = game[0][1]+ game[1][0]+ game[1][2]+ game[2][1];
  // console.log(edges);
  var edgeLocations =['a2','b1','b3','c2']
  for (var i = 0; i < edges.length; i++) {
    if (edges[i]=== 'E') {
      return true;
    }
  }
  return false;
}

  function playCorners (){
    var corners = game[0][0]+ game[0][2]+ game[2][0]+ game[2][2];
    // console.log(corners);
    var cornerLocations =['a1','a3','c1','c3'];
    for (var i = 0; i < corners.length; i++) {
      if (corners[i]=== 'E') {

        return cornerLocations[i];
      }
    }
}

function canPlayCorners (){
  var corners = game[0][0]+ game[0][2]+ game[2][0]+ game[2][2];
  // console.log(corners);
  var cornerLocations =['a1','a3','c1','c3'];
  for (var i = 0; i < corners.length; i++) {
    if (corners[i]=== 'E') {

      return true;
    }
  }
  return false;
}

function patternDefault(){
  if (canPlayCorners()) {
    return playCorners();
  }
  if (canPlayEdges()) {
    return playEdges();
  }
  console.log("something broke");
}

function playBestCorner(){
  var col1 = game[0][0]+ game[1][0]+game[2][0];
  var row3 = rowC.join("");

  if (howManyO(col1)===1&&howManyX(col1) ===0) {
    // console.log(col1);
    return "a1"
  }
  if (howManyO(row3)===1 && howManyX(row3) === 0 ) {
    // console.log("row3");
    return "c3"
  }
  return playCorners();
}



function isTrap(){
  var corners = game[0][0]+ game[0][2]+ game[2][0]+ game[2][2];
  var edges = game[0][1]+ game[1][0]+ game[1][2]+ game[2][1];
  if (howManyX(corners) === 1 && howManyX(edges) === 1) {
    return true;
  }
 return false;
}

function counterMeasures(){
  var corners = game[0][0]+ game[0][2]+ game[2][0]+ game[2][2];
  var edges = game[0][1]+ game[1][0]+ game[1][2]+ game[2][1];

  for (var i = 0; i < corners.length; i++) {

    if (corners[i] === 'X') {

      for (var j = 0; j < edges.length; j++) {

        if (edges[j]=== "X") {


          // console.log(i , j);
              if (i===1 && j===1||i===2&&j===0) {
                return 'a1'
              }
              if (i===0 && j===2||i===3&&j===0) {
                return 'a3'
              }
              if (i===0 && j===3||i===3&&j===1) {
                return 'c1'
              }
              if (i===1 && j===3||i===2&&j===2) {
                return 'c3'
              }

            }
          }
        }
      }

  }


function threaten(){
  // console.log('threaten');
  if (game[1][1]=== 'E') {
    return "b2"
  }
  if (canPlayCorners()) {
    // console.log("corner...");
    return playBestCorner();
  }
  if (canPlayEdges()) {
    //play best edge
    //is there a best edge?
    return playEdges();
  }

}


this.soberLocation = function () {
  // console.log("sober location");
  var board = game.join("")
  var numX = howManyX(board);


  if (numX===1) {

    return first();
  }

  if (numX===2 && isTrap()) {
    return counterMeasures();
  }





  var resultsArray =[];
// console.log(224);
  var col1 = game[0][0]+ game[1][0]+game[2][0] + "col1";
  var col2 = game[0][1]+ game[1][1]+game[2][1] + "col2";
  var col3 = game[0][2]+ game[1][2]+game[2][2] + "col3";
  var row1 = rowA.join("") + "row1";
  var row2 = rowB.join("") +"row2";
  var row3 = rowC.join("") + "row3";
  var dia1 = game[0][0]+ game[1][1]+game[2][2]+ "dia1";
  var dia2 = game[0][2]+ game[1][1]+game[2][0]+ "dia2";
// console.log(233);
    resultsArray = [
      row1,
      row2,
      row3,
      col1,
      col2,
      col3,
      dia1,
      dia2
    ];

    if (canIWin(resultsArray)) {
      var line2winOn = canIWin(resultsArray);
      return play(line2winOn);
    }

    if (need2block(resultsArray)) {
      var line2block = need2block(resultsArray);
      return play(line2block);
    }
    if (dia1==="XOXdia1"|| dia2==="XOXdia2") {
      return playEdges();
    }



    return threaten();
}


})
