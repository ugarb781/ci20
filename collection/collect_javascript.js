fetch("data.json")
.then(function(blob){return blob.json();})
.then(function(json){buildPage(json);})

function buildPage(data){
  console.log(data);

  var galleryimages = data;

  //galleryimages =

  var galleryset = document.querySelector('#gallery');
  galleryset.innerHTML='';
  for (i = 0; i < galleryimages.length; i++){
    var img = document.createElement('img');
    img.src = galleryimages[i].ImageUrl1;

    var divRight = document.createElement('div');
    divRight.appendChild(img);

    galleryset.appendChild(divRight);
  }

}


var names = ["Brigitte Ugarte","Joshua Varela", "Mabel Avila","Manny Avila", "Amelia Avila","Haydee Varela", "Wacho Gonzalez",
"Elsie Gonzalez", "Wendy Varela","Alberto Varela", "Matthew Garcia", "Noah Garcia", "Yan Marrero","Haruka Amemiya" ];

var people = document.querySelector("#people");
people.innerHTML = '';
for (i = 0; i < names.length; i++){
  var sepname = document.createElement("span");
  var node= document.createTextNode(names[i]);
  sepname.appendChild(node);
  sepname.id = names[i];
  sepname.classList.add("nameStyle");
  sepname.addEventListener("click", changeColor);
  function changeColor(){
    console.log("clicked");
    sepname.style.color = "black";
  }
  people.appendChild(sepname);


}
