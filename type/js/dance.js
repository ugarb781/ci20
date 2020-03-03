var entryCount = 0;
var displayCount = 0;
var cursor = document.querySelector("#cursor");

var dancenames = document.querySelector(".answers");

var dancelist = ["cha-cha",
  "CHA-CHA", "Cha-Cha", "Merengue", "MERENGUE",
  "merengue", "Bachata", "bachata", "BACHATA", "Samba",
  "SAMBA", "samba", "Mambo", "mambo", "MAMBO", "Tango",
  "TANGO", "tango", "Salsa", "SALSA", "salsa", "Flamenco",
  "flamenco", "FLAMENCO", "Paso Doble", "PASO DOBLE", "Reggaeton",
  "REGGAETON", "reggaeton", "Bomba", "Kizomba", "Bolero"
];

var comparison = [];
var word = [];

function appearance() {
  var randomWord = dancelist[Math.floor(Math.random() * dancelist.length)];
  dancenames.innerHTML = randomWord;
  comparison.push(randomWord);
  console.log(comparison);
}
console.log(comparison);

var danceChar = appearance();

document.onkeydown = function(e) {
  var char = e.key;
  var pinkleft = document.querySelector(".bottom-left-foot");
  var pinkright = document.querySelector(".bottom-right-foot");

  function createLetter(key) {
    entryCount += 1;
    displayCount += 1;
    var span = document.createElement("span");
    span.innerHTML = key;
    cursor.parentNode.insertBefore(span, cursor);
    //add to an array
    word.push(char);
    console.log(word);
    //pushing into the array word
    //it's working
  }

  function createWrongLetter(key) {
    entryCount += 1;
    displayCount += 1;
    var span = document.createElement("span");

    span.style.color = "blue";
    span.innerHTML = key;
    cursor.parentNode.insertBefore(span, cursor);
  }

  function deleteElement() {

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
  if (startText) {
    startText.remove()
  };
  if (e.keyCode == 8) {
    console.log(word);
    word.pop();
    deleteElement();
    console.log(word);
    var blueleft = document.querySelector(".errorf");
    blueleft.style.display = "none";
    pinkleft.classList.add("neutral");
    pinkright.classList.add("neutral");
    //remove all these
    pinkleft.classList.remove("pinkALeft");
    pinkright.classList.remove("pinkARight");
    pinkright.classList.remove("pinkBRight");
    pinkright.classList.remove("pinkCRight");
    pinkright.classList.remove("pinkDRight");
    pinkright.classList.remove("pinkERight");
    pinkleft.classList.remove("pinkFLeft");
    pinkright.classList.remove("pinkFRight");
    pinkleft.classList.remove("pinkGLeft");
    pinkright.classList.remove("pinkHRight");
    pinkleft.classList.remove("pinkILeft");
    pinkleft.classList.remove("pinkJLeft");
    pinkleft.classList.remove("pinkKLeft");
    pinkleft.classList.remove("pinkLLeft");
    pinkleft.classList.remove("pinkMLeft");
    pinkleft.classList.remove("pinkNLeft");
    pinkright.classList.remove("pinkPRight");


  }
  if (e.keyCode == 13) {

  }


  if (e.key == " ") {
    createLetter("&nbsp;");
  }


  if ("abcdefghijklmnopqrstuvwxyz-".includes(e.key.toLowerCase())) {
    createLetter(e.key);
    matchWord();
    matchAnswerWord();
  }
  if (e.key == "a" || e.key == "A") {
    pinkleft.classList.add("pinkALeft");
    pinkright.classList.add("pinkARight");
    //
    pinkright.classList.remove("pinkBRight");
    pinkright.classList.remove("pinkCRight");
    pinkright.classList.remove("pinkDRight");
    pinkright.classList.remove("pinkERight");
    pinkleft.classList.remove("pinkFLeft");
    pinkright.classList.remove("pinkFRight");
    pinkleft.classList.remove("pinkGLeft");
    pinkright.classList.remove("pinkHRight");
    pinkleft.classList.remove("pinkILeft");
    pinkleft.classList.remove("pinkJLeft");
    pinkleft.classList.remove("pinkKLeft");
    pinkleft.classList.remove("pinkLLeft");
    pinkleft.classList.remove("pinkMLeft");
    pinkleft.classList.remove("pinkNLeft");
    pinkright.classList.remove("pinkPRight");
    pinkleft.classList.remove("pinkSLeft");
    pinkright.classList.remove("neutral");
  }
  if (e.key == "b" || e.key == "B") {
    pinkleft.classList.add("pinkALeft");
    pinkright.classList.add("pinkBRight");
    //
    pinkright.classList.remove("pinkARight");
    pinkright.classList.remove("pinkCRight");
    pinkright.classList.remove("pinkDRight");
    pinkright.classList.remove("pinkERight");
    pinkleft.classList.remove("pinkFLeft");
    pinkright.classList.remove("pinkFRight");
    pinkleft.classList.remove("pinkGLeft");
    pinkright.classList.remove("pinkHRight");
    pinkleft.classList.remove("pinkILeft");
    pinkleft.classList.remove("pinkJLeft");
    pinkleft.classList.remove("pinkKLeft");
    pinkleft.classList.remove("pinkLLeft");
    pinkleft.classList.remove("pinkMLeft");
    pinkleft.classList.remove("pinkNLeft");
    pinkright.classList.remove("pinkPRight");
    pinkleft.classList.remove("pinkSLeft");
    pinkright.classList.remove("neutral");
  }

  if (e.key == "c" || e.key == "C") {
    pinkleft.classList.add("pinkALeft");
    pinkright.classList.add("pinkCRight");
    //
    pinkright.classList.remove("pinkARight");
    pinkright.classList.remove("pinkBRight");
    pinkright.classList.remove("pinkDRight");
    pinkright.classList.remove("pinkERight");
    pinkleft.classList.remove("pinkFLeft");
    pinkright.classList.remove("pinkFRight");
    pinkleft.classList.remove("pinkGLeft");
    pinkright.classList.remove("pinkHRight");
    pinkleft.classList.remove("pinkILeft");
    pinkleft.classList.remove("pinkJLeft");
    pinkleft.classList.remove("pinkKLeft");
    pinkleft.classList.remove("pinkLLeft");
    pinkleft.classList.remove("pinkMLeft");
    pinkleft.classList.remove("pinkNLeft");
    pinkright.classList.remove("pinkPRight");
    pinkleft.classList.remove("pinkSLeft");
    pinkright.classList.remove("neutral");

  }
  if (e.key == "d" || e.key == "D") {
    pinkleft.classList.add("pinkALeft");
    pinkright.classList.add("pinkDRight");
    //
    pinkright.classList.remove("pinkARight");
    pinkright.classList.remove("pinkBRight");
    pinkright.classList.remove("pinkCRight");
    pinkright.classList.remove("pinkERight");
    pinkleft.classList.remove("pinkFLeft");
    pinkright.classList.remove("pinkFRight");
    pinkleft.classList.remove("pinkGLeft");
    pinkright.classList.remove("pinkHRight");
    pinkleft.classList.remove("pinkILeft");
    pinkleft.classList.remove("pinkJLeft");
    pinkleft.classList.remove("pinkKLeft");
    pinkleft.classList.remove("pinkLLeft");
    pinkleft.classList.remove("pinkMLeft");
    pinkleft.classList.remove("pinkNLeft");
    pinkright.classList.remove("pinkPRight");
    pinkleft.classList.remove("pinkSLeft");
    pinkright.classList.remove("neutral");
  }

  if (e.key == "e" || e.key == "E") {
    pinkleft.classList.add("pinkALeft");
    pinkright.classList.add("pinkERight");
    //remove
    pinkright.classList.remove("pinkARight");
    pinkright.classList.remove("pinkBRight");
    pinkright.classList.remove("pinkCRight");
    pinkright.classList.remove("pinkDRight");
    pinkleft.classList.remove("pinkFLeft");
    pinkright.classList.remove("pinkFRight");
    pinkleft.classList.remove("pinkGLeft");
    pinkright.classList.remove("pinkHRight");
    pinkleft.classList.remove("pinkILeft");
    pinkleft.classList.remove("pinkJLeft");
    pinkleft.classList.remove("pinkKLeft");
    pinkleft.classList.remove("pinkLLeft");
    pinkleft.classList.remove("pinkMLeft");
    pinkleft.classList.remove("pinkNLeft");
    pinkright.classList.remove("pinkPRight");
    pinkleft.classList.remove("pinkSLeft");
    pinkright.classList.remove("neutral");
  }
  if (e.key == "f" || e.key == "F") {
    pinkleft.classList.add("pinkFLeft");
    pinkright.classList.add("pinkFRight");
    //remove
    pinkleft.classList.remove("pinkALeft");
    pinkright.classList.remove("pinkARight");
    pinkright.classList.remove("pinkBRight");
    pinkright.classList.remove("pinkCRight");
    pinkright.classList.remove("pinkDRight");
    pinkright.classList.remove("pinkERight");
    pinkleft.classList.remove("pinkGLeft");
    pinkright.classList.remove("pinkHRight");
    pinkleft.classList.remove("pinkILeft");
    pinkleft.classList.remove("pinkJLeft");
    pinkleft.classList.remove("pinkKLeft");
    pinkleft.classList.remove("pinkLLeft");
    pinkleft.classList.remove("pinkMLeft");
    pinkleft.classList.remove("pinkNLeft");
    pinkright.classList.remove("pinkPRight");
    pinkleft.classList.remove("pinkSLeft");
    pinkright.classList.remove("neutral");

  }
  if (e.key == "g" || e.key == "G") {
    pinkleft.classList.add("pinkGLeft");
    pinkright.classList.add("pinkBRight");

    //remove
    pinkleft.classList.remove("pinkALeft");
    pinkright.classList.remove("pinkARight");
    pinkright.classList.remove("pinkCRight");
    pinkright.classList.remove("pinkDRight");
    pinkright.classList.remove("pinkERight");
    pinkright.classList.remove("pinkFRight");
    pinkleft.classList.remove("pinkGLeft");
    pinkright.classList.remove("pinkHRight");
    pinkleft.classList.remove("pinkILeft");
    pinkleft.classList.remove("pinkJLeft");
    pinkleft.classList.remove("pinkKLeft");
    pinkleft.classList.remove("pinkLLeft");
    pinkleft.classList.remove("pinkMLeft");
    pinkleft.classList.remove("pinkNLeft");
    pinkright.classList.remove("pinkPRight");
    pinkleft.classList.remove("pinkSLeft");
    pinkright.classList.remove("neutral");

  }

  if (e.key == "h" || e.key == "H") {
    pinkleft.classList.add("pinkFLeft");
    pinkright.classList.add("pinkHRight");

    //remove
    pinkright.classList.remove("pinkARight");
    pinkright.classList.remove("pinkBRight");
    pinkright.classList.remove("pinkCRight");
    pinkright.classList.remove("pinkDRight");
    pinkright.classList.remove("pinkERight");
    pinkright.classList.remove("pinkFRight");
    pinkleft.classList.remove("pinkGLeft");
    pinkleft.classList.remove("pinkILeft");
    pinkleft.classList.remove("pinkJLeft");
    pinkleft.classList.remove("pinkKLeft");
    pinkleft.classList.remove("pinkLLeft");
    pinkleft.classList.remove("pinkMLeft");
    pinkleft.classList.remove("pinkNLeft");
    pinkright.classList.remove("pinkPRight");
    pinkleft.classList.remove("pinkSLeft");
    pinkright.classList.remove("neutral");

  }

  if (e.key == "i" || e.key == "I") {
    pinkright.classList.add("pinkBRight");
    pinkleft.classList.add("pinkILeft");

    //remove
    //
    pinkright.classList.remove("pinkARight");
    pinkright.classList.remove("pinkCRight");
    pinkright.classList.remove("pinkDRight");
    pinkright.classList.remove("pinkERight");
    pinkleft.classList.remove("pinkFLeft");
    pinkright.classList.remove("pinkFRight");
    pinkleft.classList.remove("pinkGLeft");
    pinkright.classList.remove("pinkHRight");
    pinkleft.classList.remove("pinkJLeft");
    pinkleft.classList.remove("pinkKLeft");
    pinkleft.classList.remove("pinkLLeft");
    pinkleft.classList.remove("pinkMLeft");
    pinkleft.classList.remove("pinkNLeft");
    pinkright.classList.remove("pinkPRight");
    pinkleft.classList.remove("pinkSLeft");
    pinkright.classList.remove("neutral");

  }

  if (e.key == "j" || e.key == "J") {
    pinkright.classList.add("pinkARight");
    pinkleft.classList.add("pinkJLeft");
    //remove
    //
    pinkright.classList.remove("pinkBRight");
    pinkright.classList.remove("pinkCRight");
    pinkright.classList.remove("pinkDRight");
    pinkright.classList.remove("pinkERight");
    pinkleft.classList.remove("pinkFLeft");
    pinkright.classList.remove("pinkFRight");
    pinkleft.classList.remove("pinkGLeft");
    pinkright.classList.remove("pinkHRight");
    pinkleft.classList.remove("pinkILeft");
    pinkleft.classList.remove("pinkKLeft");
    pinkleft.classList.remove("pinkLLeft");
    pinkleft.classList.remove("pinkMLeft");
    pinkleft.classList.remove("pinkNLeft");
    pinkright.classList.remove("pinkPRight");
    pinkleft.classList.remove("pinkSLeft");
    pinkright.classList.remove("neutral");

  }
  if (e.key == "k" || e.key == "K") {
    pinkright.classList.add("pinkARight");
    pinkleft.classList.add("pinkKLeft");
    //remove
    //
    pinkleft.classList.remove("pinkJLeft");
    pinkright.classList.remove("pinkBRight");
    pinkright.classList.remove("pinkCRight");
    pinkright.classList.remove("pinkDRight");
    pinkright.classList.remove("pinkERight");
    pinkleft.classList.remove("pinkFLeft");
    pinkright.classList.remove("pinkFRight");
    pinkleft.classList.remove("pinkGLeft");
    pinkright.classList.remove("pinkHRight");
    pinkleft.classList.remove("pinkILeft");
    pinkleft.classList.remove("pinkLLeft");
    pinkleft.classList.remove("pinkMLeft");
    pinkleft.classList.remove("pinkNLeft");
    pinkright.classList.remove("pinkPRight");
    pinkleft.classList.remove("pinkSLeft");
    pinkright.classList.remove("neutral");

  }
  if (e.key == "l" || e.key == "L") {
    pinkright.classList.add("pinkARight");
    pinkleft.classList.add("pinkLLeft");
    //remove
    //
    pinkleft.classList.remove("pinkJLeft");
    pinkright.classList.remove("pinkBRight");
    pinkright.classList.remove("pinkCRight");
    pinkright.classList.remove("pinkDRight");
    pinkright.classList.remove("pinkERight");
    pinkleft.classList.remove("pinkFLeft");
    pinkright.classList.remove("pinkFRight");
    pinkleft.classList.remove("pinkGLeft");
    pinkright.classList.remove("pinkHRight");
    pinkleft.classList.remove("pinkILeft");
    pinkleft.classList.remove("pinkKLeft");
    pinkleft.classList.remove("pinkMLeft");
    pinkleft.classList.remove("pinkNLeft");
    pinkright.classList.remove("pinkPRight");
    pinkleft.classList.remove("pinkSLeft");
    pinkright.classList.remove("neutral");

  }

  if (e.key == "m" || e.key == "M") {
    pinkright.classList.add("pinkARight");
    pinkleft.classList.add("pinkMLeft");

    //REMOVE
    pinkleft.classList.remove("pinkJLeft");
    pinkright.classList.remove("pinkBRight");
    pinkright.classList.remove("pinkCRight");
    pinkright.classList.remove("pinkDRight");
    pinkright.classList.remove("pinkERight");
    pinkleft.classList.remove("pinkFLeft");
    pinkright.classList.remove("pinkFRight");
    pinkleft.classList.remove("pinkGLeft");
    pinkright.classList.remove("pinkHRight");
    pinkleft.classList.remove("pinkILeft");
    pinkleft.classList.remove("pinkKLeft");
    pinkleft.classList.remove("pinkLLeft");
    pinkleft.classList.remove("pinkNLeft");
    pinkright.classList.remove("pinkPRight");
    pinkleft.classList.remove("pinkSLeft");
    pinkright.classList.remove("neutral");

  }
  if (e.key == "n" || e.key == "N") {
    pinkright.classList.add("pinkHRight");
    pinkleft.classList.add("pinkNLeft");
    //REMOVE
    pinkright.classList.remove("pinkARight");
    pinkleft.classList.remove("pinkJLeft");
    pinkright.classList.remove("pinkBRight");
    pinkright.classList.remove("pinkCRight");
    pinkright.classList.remove("pinkDRight");
    pinkright.classList.remove("pinkERight");
    pinkleft.classList.remove("pinkFLeft");
    pinkright.classList.remove("pinkFRight");
    pinkleft.classList.remove("pinkGLeft");
    pinkleft.classList.remove("pinkILeft");
    pinkleft.classList.remove("pinkKLeft");
    pinkleft.classList.remove("pinkLLeft");
    pinkleft.classList.remove("pinkMLeft");
    pinkright.classList.remove("pinkPRight");
    pinkleft.classList.remove("pinkSLeft");
    pinkright.classList.remove("neutral");

  }

  if (e.key == "o" || e.key == "O") {
    pinkright.classList.add("pinkHRight");
    pinkleft.classList.add("pinkILeft");
    //REMOVE
    pinkright.classList.remove("pinkARight");
    pinkleft.classList.remove("pinkJLeft");
    pinkright.classList.remove("pinkBRight");
    pinkright.classList.remove("pinkCRight");
    pinkright.classList.remove("pinkDRight");
    pinkright.classList.remove("pinkERight");
    pinkleft.classList.remove("pinkFLeft");
    pinkright.classList.remove("pinkFRight");
    pinkleft.classList.remove("pinkGLeft");
    pinkleft.classList.remove("pinkKLeft");
    pinkleft.classList.remove("pinkLLeft");
    pinkleft.classList.remove("pinkMLeft");
    pinkleft.classList.remove("pinkNLeft");
    pinkright.classList.remove("pinkPRight");
    pinkleft.classList.remove("pinkSLeft");
    pinkright.classList.remove("neutral");

  }
  if (e.key == "p" || e.key == "P") {
    pinkleft.classList.add("pinkILeft");
    pinkright.classList.add("pinkPRight");
    //REMOVE
    pinkright.classList.remove("pinkARight");
    pinkleft.classList.remove("pinkJLeft");
    pinkright.classList.remove("pinkBRight");
    pinkright.classList.remove("pinkCRight");
    pinkright.classList.remove("pinkDRight");
    pinkright.classList.remove("pinkERight");
    pinkleft.classList.remove("pinkFLeft");
    pinkright.classList.remove("pinkFRight");
    pinkleft.classList.remove("pinkGLeft");
    pinkleft.classList.remove("pinkKLeft");
    pinkleft.classList.remove("pinkLLeft");
    pinkleft.classList.remove("pinkMLeft");
    pinkleft.classList.remove("pinkNLeft");
    pinkright.classList.remove("pinkHRight");
    pinkleft.classList.remove("pinkSLeft");
    pinkright.classList.remove("neutral");

  }
  if (e.key == "q" || e.key == "Q") {
    pinkright.classList.add("pinkDRight");
    pinkleft.classList.add("pinkALeft");
    //REMOVE
    pinkright.classList.remove("pinkARight");
    pinkleft.classList.remove("pinkJLeft");
    pinkright.classList.remove("pinkBRight");
    pinkright.classList.remove("pinkCRight");
    pinkright.classList.remove("pinkERight");
    pinkleft.classList.remove("pinkFLeft");
    pinkright.classList.remove("pinkFRight");
    pinkleft.classList.remove("pinkGLeft");
    pinkleft.classList.remove("pinkKLeft");
    pinkleft.classList.remove("pinkLLeft");
    pinkleft.classList.remove("pinkMLeft");
    pinkleft.classList.remove("pinkNLeft");
    pinkright.classList.remove("pinkHRight");
    pinkright.classList.remove("pinkPRight");
    pinkright.classList.remove("pinkDRight");
    pinkleft.classList.remove("pinkSLeft");
    pinkright.classList.remove("neutral");

  }
  if (e.key == "r" || e.key == "R") {
    pinkleft.classList.remove("pinkMLeft");
    pinkleft.classList.add("pinkILeft");
    //REMOVE
    pinkright.classList.remove("pinkARight");
    pinkright.classList.remove("pinkDRight");
    pinkleft.classList.remove("pinkJLeft");
    pinkright.classList.remove("pinkBRight");
    pinkright.classList.remove("pinkCRight");
    pinkright.classList.remove("pinkERight");
    pinkleft.classList.remove("pinkFLeft");
    pinkright.classList.remove("pinkFRight");
    pinkleft.classList.remove("pinkGLeft");
    pinkleft.classList.remove("pinkKLeft");
    pinkleft.classList.remove("pinkLLeft");
    pinkleft.classList.remove("pinkNLeft");
    pinkright.classList.remove("pinkHRight");
    pinkright.classList.remove("pinkPRight");
    pinkleft.classList.remove("pinkSLeft");
    pinkright.classList.remove("neutral");

  }
  if (e.key == "s" || e.key == "S") {
    pinkleft.classList.add("pinkSLeft");
    pinkright.classList.add("neutral");
    //remove all these
    pinkleft.classList.remove("pinkALeft");
    pinkright.classList.remove("pinkARight");
    pinkright.classList.remove("pinkBRight");
    pinkright.classList.remove("pinkCRight");
    pinkright.classList.remove("pinkDRight");
    pinkright.classList.remove("pinkERight");
    pinkleft.classList.remove("pinkFLeft");
    pinkright.classList.remove("pinkFRight");
    pinkleft.classList.remove("pinkGLeft");
    pinkright.classList.remove("pinkHRight");
    pinkleft.classList.remove("pinkILeft");
    pinkleft.classList.remove("pinkJLeft");
    pinkleft.classList.remove("pinkKLeft");
    pinkleft.classList.remove("pinkLLeft");
    pinkleft.classList.remove("pinkMLeft");
    pinkleft.classList.remove("pinkNLeft");
    pinkright.classList.remove("pinkPRight");

  }

  if (e.key == "t" || e.key == "T") {
    pinkleft.classList.add("pinkGLeft");
    pinkright.classList.add("pinkCRight");
    //remove all these
    pinkleft.classList.remove("pinkALeft");
    pinkright.classList.remove("pinkARight");
    pinkright.classList.remove("pinkBRight");
    pinkright.classList.remove("pinkDRight");
    pinkright.classList.remove("pinkERight");
    pinkleft.classList.remove("pinkFLeft");
    pinkright.classList.remove("pinkFRight");
    pinkright.classList.remove("pinkHRight");
    pinkleft.classList.remove("pinkILeft");
    pinkleft.classList.remove("pinkJLeft");
    pinkleft.classList.remove("pinkKLeft");
    pinkleft.classList.remove("pinkLLeft");
    pinkleft.classList.remove("pinkMLeft");
    pinkleft.classList.remove("pinkNLeft");
    pinkright.classList.remove("pinkPRight");
    pinkleft.classList.remove("pinkSLeft");
    pinkright.classList.remove("neutral");

  }
  if (e.key == "u" || e.key == "U") {
    pinkleft.classList.add("pinkNLeft");
    pinkright.classList.remove("pinkARight");
    //remove all these
    pinkleft.classList.remove("pinkALeft");
    pinkright.classList.remove("pinkBRight");
    pinkright.classList.remove("pinkDRight");
    pinkright.classList.remove("pinkERight");
    pinkleft.classList.remove("pinkFLeft");
    pinkright.classList.remove("pinkFRight");
    pinkleft.classList.remove("pinkILeft");
    pinkleft.classList.remove("pinkJLeft");
    pinkleft.classList.remove("pinkKLeft");
    pinkleft.classList.remove("pinkLLeft");
    pinkleft.classList.remove("pinkMLeft");
    pinkright.classList.remove("pinkPRight");
    pinkleft.classList.remove("pinkSLeft");
    pinkright.classList.remove("neutral");

  }
  if (e.key == "v" || e.key == "V") {

    pinkright.classList.add("pinkFRight");
    pinkleft.classList.remove("pinkMLeft");
    //remove all these
    pinkleft.classList.remove("pinkALeft");
    pinkright.classList.remove("pinkBRight");
    pinkright.classList.remove("pinkDRight");
    pinkright.classList.remove("pinkERight");
    pinkleft.classList.remove("pinkFLeft");
    pinkleft.classList.remove("pinkILeft");
    pinkleft.classList.remove("pinkJLeft");
    pinkleft.classList.remove("pinkKLeft");
    pinkleft.classList.remove("pinkLLeft");
    pinkright.classList.remove("pinkPRight");
    pinkleft.classList.remove("pinkSLeft");
    pinkright.classList.remove("neutral");
  }
  if (e.key == "w" || e.key == "W") {
    pinkright.classList.add("pinkERight");
    pinkleft.classList.add("neutral");
    //remove all these
    pinkleft.classList.remove("pinkALeft");
    pinkright.classList.remove("pinkBRight");
    pinkright.classList.remove("pinkDRight");
    pinkleft.classList.remove("pinkFLeft");
    pinkleft.classList.remove("pinkILeft");
    pinkleft.classList.remove("pinkJLeft");
    pinkleft.classList.remove("pinkKLeft");
    pinkleft.classList.remove("pinkLLeft");
    pinkright.classList.remove("pinkPRight");
    pinkleft.classList.remove("pinkSLeft");

  }
  if (e.key == "x" || e.key == "X") {
  pinkleft.classList.add("pinkSLeft");
  pinkleft.classList.remove("pinkILeft");
  //remove all these
  pinkleft.classList.remove("pinkALeft");
  pinkright.classList.remove("pinkBRight");
  pinkright.classList.remove("pinkDRight");
  pinkleft.classList.remove("pinkFLeft");
  pinkleft.classList.remove("pinkILeft");
  pinkleft.classList.remove("pinkJLeft");
  pinkleft.classList.remove("pinkKLeft");
  pinkleft.classList.remove("pinkLLeft");
  pinkright.classList.remove("pinkPRight");

  }
  if (e.key == "y" || e.key == "Y") {
    pinkright.classList.remove("pinkHRight");
    pinkleft.classList.add("pinkALeft");
    //remove all these
    pinkleft.classList.remove("pinkALeft");
    pinkright.classList.remove("pinkBRight");
    pinkright.classList.remove("pinkDRight");
    pinkleft.classList.remove("pinkFLeft");
    pinkleft.classList.remove("pinkILeft");
    pinkleft.classList.remove("pinkJLeft");
    pinkleft.classList.remove("pinkKLeft");
    pinkleft.classList.remove("pinkLLeft");
    pinkright.classList.remove("pinkPRight");

  }
  if (e.key == "z" || e.key == "Z") {
    pinkleft.classList.add("pinkALeft");
    pinkright.classList.remove("pinkPRight");
    //
    pinkright.classList.remove("pinkBRight");
    pinkright.classList.remove("pinkCRight");
    pinkright.classList.remove("pinkDRight");
    pinkright.classList.remove("pinkERight");
    pinkleft.classList.remove("pinkFLeft");
    pinkright.classList.remove("pinkFRight");
    pinkleft.classList.remove("pinkGLeft");
    pinkright.classList.remove("pinkHRight");
    pinkleft.classList.remove("pinkILeft");
    pinkleft.classList.remove("pinkJLeft");
    pinkleft.classList.remove("pinkKLeft");
    pinkleft.classList.remove("pinkLLeft");
    pinkleft.classList.remove("pinkMLeft");
    pinkleft.classList.remove("pinkNLeft");
    pinkleft.classList.remove("pinkSLeft");
    pinkright.classList.remove("neutral");

  }

  function matchWord() {
    cache = word.join('');
    if (comparison[0].startsWith(cache)) {
      console.log("yes");
      dancenames.style.color = "#FD005B";
      word.join('');
      console.log(word.join(''));
      console.log(word);
    } else {
      console.log("no");
      deleteElement();
      createWrongLetter(e.key);
      dancenames.style.color = "blue";
      var blueleft = document.querySelector(".errorf");
      blueleft.style.display = "inline-block";
    }
  }

  function matchAnswerWord() {
    if (word.join('') == comparison) {

      console.log("yes it is");
      comparison.pop();
      console.log(comparison);
      appearance();
    }

    if (comparison[0].startsWith(cache)) {
      console.log("it's working");
      dancenames.style.color = "#FD005B";
    } else {
      console.log("it's notworking");
      dancenames.style.color = "blue";
      var blueleft = document.querySelector(".blue-e-foot-left");
      var blueright = document.querySelector(".blue-e-foot-right");
      blueleft.style.display = "inline-block";
      blueright.style.display = "inline-block";
      blueleft.style.position = "relative";
      blueleft.style.left = Math.floor(Math.random() * 375) + "px";
      blueleft.style.bottom = Math.floor(Math.random() * 667) + "px";
      blueleft.style.transform = "rotate(" + Math.floor(Math.random() * 375) + "deg)";
      blueright.style.position = "relative";
      blueright.style.left = Math.floor(Math.random() * 375) + "px";
      blueright.style.bottom = Math.floor(Math.random() * 667) + "px";
      blueright.style.transform = "rotate(" + Math.floor(Math.random() * 375) + "deg)";
    }
  }


  console.log("entry #" + entryCount + " : " + e.keyCode + " | " + e.key + ". Showing " + displayCount);
}
