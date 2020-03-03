var dancenames = document.querySelector(".answers");
const danceNamelist= ["Merengue", "merengue", "MERENGUE", "Bachata", "bachata", "BACHATA", "Mambo", "mambo", "MAMBO", "Tango", "Samba","SAMBA", "samba","Salsa", "Flamenco", "flamenco","FLAMENCO", "Paso Doble", "Rumba", "Reggaeton", "Bomba", "Kizomba", "KIZOMBA", "kizomba", "Bolero", "BOLERO", "bolero", "conga","CONGA","Conga"];
// randomize here and svae the word into a variable
var dancelist = danceNamelist;
var entryCount = 0;
var displayCount = 0;

function appearance(){
  var randomWord = dancelist[Math.floor(Math.random()* dancelist.length)];
  dancenames.innerHTML = randomWord;
  return randomWord;
}

var danceChar = appearance();


document.onkeypress = function(event) {
  // delete the starting word, if it exists
  var startText = document.querySelector("#type-to-play");
  if (startText) { startText.remove(); }
  var letter = event.key;
  // console.log(event);
  // instead of adding innerHTML to one <span> that already exists, inside here createElement
    // create a new span each time, set the color el.style.color = "red", append it to the not the body, but the text-container
    // document.querySelector("#text-container").appendChild(____);
    // this will put it AFTER the cursor. put it before the cursor
    //
    // document.querySelector("#text-container").insertBefore(____, document.querySelector("#cursor"))


  if ((event.keyCode >= 97 && event.keyCode <= 122) || (event.keyCode >= 65 && event.keyCode <= 90)) {
    entryCount += 1;
    displayCount += 1;

    var char = event.key;
    // var char = danceChar.charAt(entryCount - 1);

    document.querySelector("#text").innerHTML = document.querySelector("#text").innerHTML + letter;
    matchWord();
    //w3 schools
    // var res = dancelist.charAt(0);
    // console.log(res);

  }
  if (entryCount == 1){
     startCounter();
  }


  function matchWord(){
    if(danceChar[entryCount-1] == char){
      console.log("yes");
    } else {
      console.log("no");
      // document.querySelector("#text").innerHTML.style.color="blue";
    }
  }


}

var counter = 60;
var countfinish = 0;


function startCounter(){
  countfinish = setInterval("countdown()", 1000);
}

function countdown(){
  if (counter > 0){
    counter = counter - 1;
    document.querySelector("#count").innerHTML = counter;
    // clearInterval(countfinish);
  }
  else{
    clearInterval(countfinish);
  }

}


//try to make a span element


//creating a constant array called dancelist


//call function

//create a function where the names get randomized for now each refresh

//


//different name on each completion
function renderDanceName(){
 console.log("hello");
 // var current_quote = dancenames;
}

renderDanceName();


// const test = document.querySelector("#type-to-play");

// const list = ['Flamenco', 'Salsa', 'SALSA', 'salsa', 'mambo', 'merengue']
// function startCounter(){
//   //starting the startCounter
//   countfinish = setInterval ("countdown()", 1000);
// }
//
// function countdown(){
//   if(counter > 0){
//     counter = counter - 1;
//
// }
// else {
//   //stop
//   clearInterval(countfinish);
// }
// }
//referencing codepen : https://codepen.io/zunit/pen/qQdNvg
// function danceGenerator(){
//
//   //collecting from inside the html document
//   dancenames.innerHTML = "";
//
//   //randomizing the numbers
//   //direct copy& paste
//   var random = Math.floor(Math.random() * (1943 - 0 + 1)) + 0;
//   for (var i = 0; i < wordArray.length; i++) { //building the words with spans around the letters
//     			var span = document.createElement("span");
//     			span.classList.add("span");
//     			span.innerHTML = wordArray[i];
//     			words.appendChild(span);
//     		}
//     		spans = document.querySelectorAll(".span")}
    //}

// var countDown = document.querySelector("#count").innerHTML;
//
// function current_Time = Date.parse(newDate());
// var deadline
