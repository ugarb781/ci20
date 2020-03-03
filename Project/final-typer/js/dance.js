var entryCount = 0;
var displayCount = 0;
var counter = 90;
var countfinish = 0;
var cursor = document.querySelector("#cursor");

var dancenames = document.querySelector(".answers");

var dancelist = [
  "Merengue",
  "Bachata",
  "Samba",
  "Mambo",
  "Tango",
  "Salsa",
  "Flamenco",
  "Paso Doble",
  "Reggaeton",
  "Bomba",
  "Kizomba",
  "Bolero"
];
var write = document.querySelector("#writing");
function appearance() {
  var randomWord = dancelist[Math.floor(Math.random() * dancelist.length)];
  dancenames.innerHTML = randomWord;
  return randomWord;
}

function startCounter() {
  countfinish = setInterval(countdown(), 1000);
}

function countdown() {
  if (counter > 0) {
    counter = counter - 1;
    document.querySelector("#count").innerHTML = counter;
  } else {
    clearInterval(countfinish);
  }
}

window.onload = startCounter();

var danceChar = appearance();
//showing the full word from the array
console.log(danceChar);

document.onkeydown = function(e) {
  function createLetter(key) {
    entryCount += 1;
    displayCount += 1;
    var span = document.createElement("span");
    span.innerHTML = key;
    cursor.parentNode.insertBefore(span, cursor);
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
  if (startText) {
    startText.remove();
  }
  if (e.keyCode == 8) {
    deleteElement();
  }
  if (e.keyCode == 13) {
    // createLetter("<br>");
    // danceChar;
    // appearance();
  }
  if (e.key == " ") {
    createLetter("&nbsp;");
  }

  if ("abcdefghijklmnopqrstuvwxyz-".includes(e.key.toLowerCase())) {
    createLetter(e.key);
    matchWord();
    matchAnswerWord();
  }

  function matchWord() {
    var char = e.key;

    if (danceChar[entryCount - 1] == char) {
      console.log("yes");
      dancenames.style.color = "#FD005B";
    } else {
      console.log("no");
      deleteElement();
      createWrongLetter(e.key);
      dancenames.style.color = "blue";
    }
  }

  function matchAnswerWord() {
    var char = e.key;
    if (danceChar[entryCount - 1] == char) {
      console.log("it's working");
      dancenames.style.color = "#FD005B";
    } else {
      console.log("it's notworking");
      dancenames.style.color = "blue";
    }
  }

  console.log(
    "entry #" +
      entryCount +
      " : " +
      e.keyCode +
      " | " +
      e.key +
      ". Showing " +
      displayCount
  );
};
