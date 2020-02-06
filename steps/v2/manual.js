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
