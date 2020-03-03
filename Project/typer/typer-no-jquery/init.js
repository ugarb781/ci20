var entryCount = 0;
var displayCount = 0;

function createLetter(key) {
  entryCount += 1;
  displayCount += 1;
  var cursor = document.querySelector("#cursor");
  var span = document.createElement("span");
  span.innerHTML = key;
  cursor.parentNode.insertBefore(span, cursor);
}

function deleteElement() {
  entryCount += 1;
  var letter = document.querySelector("#cursor").previousSibling;
  if (letter) {
    letter.remove();
    displayCount -= 1;
    if (displayCount < 0) {
      displayCount = 0;
    }
  }
}

document.onkeydown = function(e) {
  if (e.keyCode == 8) {
    deleteElement();
  }
  if (e.keyCode == 13) {
    createLetter("<br>");
  }
  if (e.key == " ") {
    createLetter("&nbsp;");
  }

  //write code here
  //isolate a single keys
  // if(e.key == "a" ||  e.key == "A"){
  //if it is capital it is lower case
  //changes and converts
  

    break;
  if(e.key.toLowerCase() == "a"){
    var p = document.createElement("p");
    p.innerHTML = "congrats you won!";
    document.body.appendChild(p);
  }


  // anything contained in this string is allowed to print to the screen
  // you can add numbers or symbols
  if ("bcdefghijklmnopqrstuvwxyz012345678".includes(e.key.toLowerCase())) {
    createLetter(e.key);
  }
  console.log("entry #" + entryCount + " : " + e.keyCode + " | " + e.key + ". Showing " + displayCount);
}
