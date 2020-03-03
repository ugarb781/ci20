var entryCount = 0;
var displayCount = 0;
var cursor = document.querySelector("#cursor");

var dancenames = document.querySelector(".answers");

var dancelist = ["Merengue", "Bachata", "Samba", "Mambo", "Tango", "Salsa", "Flamenco", "Paso Doble", "Reggaeton", "Bomba", "Kizomba", "Bolero"] ;
var write = document.querySelector("#writing");
function appearance(){
  var randomWord = dancelist[Math.floor(Math.random() * dancelist.length)];
  dancenames.innerHTML = randomWord;
  return randomWord;
}

var danceChar = appearance();
console.log(danceChar);
// window.onload = startCounter();

//
// function setUp(){
//   var word = danceChar;
//   console.log(word);
// }



document.onkeydown = function(e) {

  function createLetter(key) {
    entryCount += 1;
    displayCount += 1;
    var span = document.createElement("span");
    span.innerHTML = key;
    cursor.parentNode.insertBefore(span, cursor);
  }

  function createWrongLetter(key){
    entryCount += 1;
    displayCount += 1;
    var span = document.createElement("span");

    span.style.color="blue";
    span.innerHTML = key;
    cursor.parentNode.insertBefore(span, cursor);
  }

  function deleteElement() {

    //subtract to remove the entry count
    entryCount -= 1;
    var letter = document.querySelector("#cursor").previousSibling;
    if (letter) {
      letter.remove();
      displayCount -= 1;
      if (displayCount < 0) {
        displayCount = 0;
      }
    }
  }


  var startText = document.querySelector("#type-to-play");
  if(startText){startText.remove()};
  if (e.keyCode == 8) {
    deleteElement();

  }
  if (e.keyCode == 13) {
    // createLetter("<br>");
    // danceChar;
    appearance();
    setUp();
  }

  //how do I repeat the enter key

  //store the enter key into a var?
  // var changed = e.keyCode == 13;
  //
  // return changed;


  if (e.key == " ") {
    createLetter("&nbsp;");
  }


  if ("abcdefghijklmnopqrstuvwxyz-".includes(e.key.toLowerCase())) {
     createLetter(e.key);
     matchWord();
     matchAnswerWord();
  }

  function matchWord(){
    var char = e.key;

    if(danceChar[entryCount-1] == char){
      console.log("yes");
      dancenames.style.color = "#FD005B";
    } else {
      console.log("no");
      deleteElement();
      createWrongLetter(e.key);
      dancenames.style.color = "blue";
      var blueleft =document.querySelector(".blue-e-foot-left");
      blueleft.style.display= "inline-block";
      var blueright =document.querySelector(".blue-e-foot-right");
      blueright.style.display= "inline-block";
    }
  }

  function matchAnswerWord(){
    var char = e.key;
    if(danceChar[entryCount-1] == char){
      console.log("it's working");
      dancenames.style.color = "#FD005B";
    } else {
      console.log("it's notworking");
      dancenames.style.color = "blue";
    }
  }


  console.log("entry #" + entryCount + " : " + e.keyCode + " | " + e.key + ". Showing " + displayCount);
}
