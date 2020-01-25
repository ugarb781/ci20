
wake = document.getElementById("wakeup");

//alarms class
light = document.getElementById("light");
sound = document.getElementById("sound");
vibe = document.getElementById("vibe");
a = document.getElementsByClassName("alarms");
r = document.getElementsByClassName("rude");

//textalarms
s = document.getElementsByClassName("sound");
l = document.getElementsByClassName("light");
v = document.getElementsByClassName("vibration");

//TextWakeup
wake.addEventListener("click", WakeUp);


//options
light.addEventListener("click", LightText);
sound.addEventListener("click", SoundText);
vibe.addEventListener("click", VibeText);


//show the options

function WakeUp(){
  for (var i=0; i < a.length; i++){
		a[i].style.display ="block";
	}
  function RudeText(){
  	setTimeout(showRude, 2000);
  }
  RudeText();
}

function showRude(){
  for (var i=0; i < r.length; i++){
  r[i].style.display="block";
}
}

//click light show LightText

function LightText(){
  for (var i=0; i < l.length; i++){
		l[i].style.display ="block";
	}
  light.style.textDecoration ="line-through";
}

//click sound show SoundText

function SoundText(){
  for (var i=0; i < s.length; i++){
		s[i].style.display ="block";
	}
  sound.style.textDecoration ="line-through";
}
//click vibration show VibeText

function VibeText(){
  for (var i=0; i < v.length; i++){
		v[i].style.display ="block";
	}
  vibe.style.textDecoration ="line-through";
}
