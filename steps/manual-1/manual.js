// code reference: http://talkerscode.com/webtricks/digital-clock-with-complete-time-and-date-using-css-and-javascript.php
//https://www.codesdope.com/blog/article/how-to-create-a-digital-clock-using-javascript/

//function clock(){

//}

//when the window is loading perform a function

window.onload = function(){
  //call a function called clock
  clock();

  //during the function clock it does these action
  function clock(){

    //create a variable called now to retrieve date
    var now = new Date();

    //create a variable called tfhours to get hours
    var tfhours = now.getHours();

    //create a variable called hour
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    //var pm = now.getHours() >= 12

    if (min < 10){
      min = "0" + min;
    }
    if (hour > 12){
      hour = hour - 12;
    }

    if (hour ==0){
      hour=12;
    }
    document.getElementById('hour-display').innerHTML= hour;
    document.getElementById('minute-display').innerHTML= min;
    document.getElementById('seconds-display').innerHTML = sec;
    setTimeout(clock,1000);
  }

}

//create a function where if its pm highlight pm
//create a function where if its am highlight am


//create a function where when you press and it outlines text
//
// presson = document.getElementById("presson");
//
// //add event listener
//
// presson.addEventListener("click",toggleOn);
// press.addEventListener("mouseover",toggleOff);
//
// function toggleOn(){
//   //if(presson == 'white'){
//   //  presson.style.color ="rgb(96, 56, 194)";
// //  }
//   //else{
//     presson.style.color="rgb(96, 56, 194)";
// //  }
// }
// // function toggleOff(){
// //   //if(presson == 'white'){
// //   //  presson.style.color ="rgb(96, 56, 194)";
// // //  }
// //   //else{
// //     presson.style.color="white";
// // //  }
// // }


//press on

presson = document.getElementsByClassName("presson");

function changetext(){
  for (var i=0; i < presson.length; i++){
		presson[i].classList.toggle("without");
	}
  on = document.getElementsByClassName("on");
  for(var i=0; i < on.length; i++){
    on[i].classList.toggle("with");
  }
}

alarm = document.getElementsByClassName("alarm-display");

function showMid(){
  for (var i=0; i < alarm.length; i++){
		alarm[i].classList.toggle("without");
    var f = document.getElementById("flashing-display");
    // I don't know how to get it to appear at the same time???

    //when f is equal to block
    //show none
    //if else block
    if (f.style.display === "block"){
      f.style.display ="none";
    } else{
      f.style.display = "block";
    }
	}
}

h = document.getElementsByClassName("hour-display");

function showHour(){
  for (var i=0; i < h.length; i++){
		h[i].classList.toggle("without");
    var hc = document.getElementById("hour-counter").innerHTML;
    var pc = document.getElementById("previous-counter").innerHTML;
    var rhc = document.getElementById("release-hc").innerHTML;
    //create a counter
    //add by one
    hc++;
    pc++;
    rhc++;
    //take the clock code
    var mid = document.getElementById("ampm-counter").innerHTML;
    if (hc > 11 && pc > 11 && rhc > 11){
      hc = hc - 12;
      pc = pc - 12;
      rhc = rhc -12;
      document.getElementById("ampm-counter").innerHTML = ":00pm";
      document.getElementById("m_ampm").innerHTML = "pm";
      document.getElementById("release-ampm").innerHTML = "pm";
    }

    if (hc ==0 && pc == 0 && rhc == 0){
      hc=12;
      pc=12;
      rhc = 12;
      // document.getElementById("ampm-counter").innerHTML = ":00am";

      //not sure how to get it to display am again but it's an attempt
    }

    // if (hc % 12 == 0){
    //   document.getElementById("ampm-counter").innerHTML = ":00am";
    // }

    document.getElementById("previous-counter").innerHTML = pc;
    document.getElementById("hour-counter").innerHTML = hc;
    document.getElementById("release-hc").innerHTML =rhc;
  }
}

m = document.getElementsByClassName("minute-display");
function showMinute(){
  for (var i=0; i < m.length; i++){
    m[i].classList.toggle("without");
    var mc = document.getElementById("minute-counter").innerHTML;
    var rmc = document.getElementById("release-mc").innerHTML;
    mc++;
    rmc++;
    if (mc < 10 && rmc < 10){
      mc = "0" + mc;
      rmc = "0" + rmc;
    }
    if (mc > 59 && rmc > 59){
      mc = mc - 59;
      rmc = rmc -59;
    }

    if (mc == 0 && rmc == 0){
      minute = 0;
      // document.getElementById("ampm-counter").innerHTML = ":00am";

      //not sure how to get it to display am again but it's an attempt
    }

    // if (hc % 12 == 0){
    //   document.getElementById("ampm-counter").innerHTML = ":00am";
    // }

    document.getElementById("minute-counter").innerHTML = mc;
    document.getElementById("release-mc").innerHTML = rmc;
    }
  }

rel = document.getElementsByClassName("releasebttn");
function release(){

  for(var i=0; i < rel.length; i++){
    rel[i].style.color="white";

    // rel[i].classList.add("flash");
    buzz = document.getElementsByClassName("hours");
    for(var i=0; i < buzz.length; i++){
      buzz[i].classList.add("flash");
    }
  }
}




  // flash = document.getElementsByClassName("flashing-display");
  // for(var i=0; i < flash.length; i++){
  //   flash[i].style.display="block";
  // }
  // var press = document.getElementById("presson");
  // press.classList.toggle("without");
//
