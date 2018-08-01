 function randoletters() {

   var table = document.getElementById("puzzel");
   for (var r = 0; r < table.rows.length; r++){
     for(var c = 0; c < 20; c++){
       var cell = table.rows[r].cells[c];
       if(cell.className === "cross"){
         cell.innerHTML = getRandomLetter()
       }
    }
   }
}
function getRandomLetter(){
  var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var randomIndex = Math.floor(Math.random() * (25 - 0 + 1)) + 0;
  return letters[randomIndex];
}

var addedLetters =[]
function coffee(){
  let word = event.target
  word.classList.add("clickedC")
  var allLetters = ["C","O","F","F","E","E"]
  if( word.classList.contains("clickedC")){
    addedLetters.push(word);
  }
  if(allLetters.length == addedLetters.length){
    var tds = document.querySelectorAll('.clickedC');
    for(var i = 0; i < tds.length; i++){
      tds[i].classList.add("strikethrough")
      document.getElementById("cw").className = "strikethrough"
    }
  }
};

var addedLetters2 =[]
function art(){
  let word = event.target
  word.classList.add("clickedArt")
  var allLetters2 = ["A","R","T"]
  if( word.classList.contains("clickedArt")){
    addedLetters2.push(word);
  }
  if(allLetters2.length == addedLetters2.length){
    var tds = document.querySelectorAll('.clickedArt');
    for(var i = 0; i < tds.length; i++){
      tds[i].classList.add("strikethrough")
      document.getElementById("artw").className = "strikethrough"
    }
  }
  };

var addedLetters3 =[]
function novel(){
  let word = event.target
  word.classList.add("clickedN")
  var allLetters3 = ["N","O","V","E","L"]
  if( word.classList.contains("clickedN")){
    addedLetters3.push(word);
  }
  if(allLetters3.length == addedLetters3.length){
    var tds = document.querySelectorAll('.clickedN');
    for(var i = 0; i < tds.length; i++){
      tds[i].classList.add("strikethrough")
      document.getElementById("nw").className = "strikethrough"
    }
  }
 };

var addedLetters5 =[]
function genre(){
  let word = event.target
  word.classList.add("clickedG")
  var allLetters5 = ["G","E","N","R","E"]
  if( word.classList.contains("clickedG")){
    addedLetters5.push(word);
  }
  if(allLetters5.length == addedLetters5.length){
    var tds = document.querySelectorAll('.clickedG');
    for(var i = 0; i < tds.length; i++){
      tds[i].classList.add("strikethrough")
      document.getElementById("gw").className = "strikethrough"
    }
  }
 };

var addedLetters6 =[]
function literacy(){
  let word = event.target
  word.classList.add("clickedL")
  var allLetters6 = ["L","I","T","E","R","A","C","Y"]
  if( word.classList.contains("clickedL")){
    addedLetters6.push(word);
  }
  if(allLetters6.length == addedLetters6.length){
    var tds = document.querySelectorAll('.clickedL');
    for(var i = 0; i < tds.length; i++){
      tds[i].classList.add("strikethrough")
      document.getElementById("lw").className = "strikethrough"
    }
  }
 };

var addedLetters14 =[]
function fantasy(){
  let word = event.target
  word.classList.add("clickedFa")
  var allLetters14 = ["F","A","N","T","A","S","Y"]
  if( word.classList.contains("clickedFa")){
    addedLetters14.push(word);
  }
  if(allLetters14.length == addedLetters14.length){
    var tds = document.querySelectorAll('.clickedFa');
    for(var i = 0; i < tds.length; i++){
      tds[i].classList.add("strikethrough")
      document.getElementById("faw").className = "strikethrough"
    }
  }
 };



var addedLetters8 =[]
function philosophy(){
  let word = event.target
  word.classList.add("clickedPh")
  var allLetters8 = ["P","H","I","L","O","S","O","P","H","Y"]
  if( word.classList.contains("clickedPh")){
    addedLetters8.push(word);
  }
  if(allLetters8.length == addedLetters8.length){
    var tds = document.querySelectorAll('.clickedPh');
    for(var i = 0; i < tds.length; i++){
      tds[i].classList.add("strikethrough")
      document.getElementById("phw").className = "strikethrough"
    }
  }
}





var addedLetters4 =[]
function fiction(){
  let word = event.target
  word.classList.add("clickedFi")
  var allLetters4 = ["F","I","C","T","I","O","N"]
  if( word.classList.contains("clickedFi")){
    addedLetters4.push(word);
  }
  if(allLetters4.length == addedLetters4.length){
    var tds = document.querySelectorAll('.clickedFi');
    for(var i = 0; i < tds.length; i++){
      tds[i].classList.add("strikethrough")
      document.getElementById("fiw").className = "strikethrough"
    }
  }

}





var addedLetters12 =[]
function aesthetics(){
  let word = event.target
  word.classList.add("clickedAes")
  var allLetters12 = ["A","E","S","T","H","E","T", "I","C","S"]
  if( word.classList.contains("clickedAes")){
    addedLetters12.push(word);
  }
  if(allLetters12.length == addedLetters12.length){
    var tds = document.querySelectorAll('.clickedAes');
    for(var i = 0; i < tds.length; i++){
      tds[i].classList.add("strikethrough")
      document.getElementById("aew").className = "strikethrough"
    }
  }

  }




var addedLetters13 =[]
function aristotle(){
  let word = event.target
  word.classList.add("clickedAri")
  var allLetters13 = ["A","R","I","S","T","O","T", "L","E"]
  if( word.classList.contains("clickedAri")){
    addedLetters13.push(word);
  }
  if(allLetters13.length == addedLetters13.length){
    var tds = document.querySelectorAll('.clickedAri');
    for(var i = 0; i < tds.length; i++){
      tds[i].classList.add("strikethrough")
      document.getElementById("arw").className = "strikethrough"
    }
  }

}






var addedLetters11 =[]
function history(){
  let word = event.target
  word.classList.add("clickedH")
  var allLetters11 = ["H","I","S","T","O","R","Y"]
  if( word.classList.contains("clickedH")){
    addedLetters11.push(word);
  }
  if(allLetters11.length == addedLetters11.length){
    var tds = document.querySelectorAll('.clickedH');
    for(var i = 0; i < tds.length; i++){
      tds[i].classList.add("strikethrough")
      document.getElementById("hw").className = "strikethrough"
    }
  }

}




var addedLetters10 =[]
function romanticism(){
  let word = event.target
  word.classList.add("clickedR")
  var allLetters10 = ["R","O","M","A","N","T","I","C","I","S","M"]
  if( word.classList.contains("clickedR")){
    addedLetters10.push(word);
  }
  if(allLetters10.length == addedLetters10.length){
    var tds = document.querySelectorAll('.clickedR');
    for(var i = 0; i < tds.length; i++){
      tds[i].classList.add("strikethrough")
      document.getElementById("rw").className = "strikethrough"

    }
  }

}


function arrays(allLetters){
  if (addedLetters.length != allLetters.length) return false;
  for( var i = 0; i < addedLetters.length; i++){
     if(addedLetters[i] !== allLetters[i]){
       return false;
     }
   }
     return true;
  }


function touched(){
  if(event.target.classList.contains("emptyTouched")){
    event.target.classList.remove("emptyTouched")

  }
  else{
    event.target.classList.add("emptyTouched")


  }
}
