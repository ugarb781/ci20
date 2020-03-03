//checking individual letters

var entryCount = 0;
var displayCount = 0;

var word = "";
var target = "typethis";

function checkWord (){
  if (word == target.slice(0, word.length)){
    console.log("good so far");
  } else {
    console.log("not good");
  }

  if (word == target){
    console.log("done");
  }
}
//e stands for event
document.onkeydown = function(e) {
  if (e.keyCode == 8) {
    word = word.slice(0, word.length - 1);
    //range of the word
    //store that back
  }
  if (e.keyCode == 13) {
    // createLetter("<br>");
    // reset the program
    word = "";
    //did the person make it write
  }
  if (e.key == " ") {
    // createLetter("&nbsp;");
    word = "";
  }
  // anything contained in this string is allowed to print to the screen
  // you can add numbers or symbols
  if ("bcdefghijklmnopqrstuvwxyz012345678".includes(e.key.toLowerCase())) {
    word = word + e.key;
  }
  //compare substring
  //slice into a sing substring

  checkWord();

  console.log(word);
  // console.log("entry #" + entryCount + " : " + e.keyCode + " | " + e.key + ". Showing " + displayCount);
}
