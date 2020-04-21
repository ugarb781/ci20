fetch("data.json")
  .then(function(blob) {
    return blob.json();
  })
  .then(function(json) {
    buildPage(json);
  })


function buildPage(data) {
  console.log(data);
  var galleryimages = data;

  var galleryset = document.querySelector('.maincontent');
  galleryset.innerHTML = '';
  for (i = 0; i < galleryimages.length; i++) {
    var img = document.createElement('img');
    img.src = galleryimages[i].ImageUrl1;
    img.addEventListener("click", lightbox);
    var itemcontainer = document.createElement('div');

    //splitting
    var topics = galleryimages[i].FamilyandFriends.split("; ");

    for (var j = 0; j < topics.length; j++) {
      if (topics[j] === " " || !topics[j]) continue;
      topics[j] = topics[j].replace(/ /g, "");
      itemcontainer.classList.add(topics[j]);
    }
    var itemfilters = ["items", galleryimages[i].Type, galleryimages[i].Shape, galleryimages[i].Color, galleryimages[i].Frame, galleryimages[i].Orienation];
    itemcontainer.classList.add(...itemfilters);
    img.id = "image" + [i];



    itemcontainer.appendChild(img);
    galleryset.appendChild(itemcontainer);
  }

  function lightbox(target) {
    console.log("clicked");
    var light = document.querySelector("#lightbox");
    var exit = document.querySelector("#exit");
    exit.addEventListener("click", removeLightbox);

    function removeLightbox() {
      light.style.display = "none";
      exit.style.display = "none";
      infocontent.style.display = "none";
    }

    var infocontent = document.querySelector(".information-content");
    light.style.display = "flex";
    exit.style.display = "inline";
    infocontent.style.display = "flex";

    var mainimage = document.querySelector("#mainimage");
    mainimage.innerHTML = "";
    var largeimage = document.createElement('img');
    var selected = event.target.src;
    console.log(event.target.src);
    largeimage.src = selected;
    mainimage.appendChild(largeimage);

    var index = parseInt(event.target.id.slice(5));
    //
    var heading = document.querySelector("#title");
    var description =document.querySelector(".description");
    description.innerHTML = "";
    var p =document.createElement("p");

    heading.innerHTML = "";
    var h1 = document.createElement("h1");
    //repeat patterns
    var pdescription = document.createTextNode(galleryimages[index].Description);
    var headingTitle = document.createTextNode(galleryimages[index].Title);
    // var headingtitle = document.createTextNode(event.target.id);
    h1.appendChild(headingTitle);
    p.appendChild(pdescription);
    description.appendChild(p);
    heading.appendChild(h1);


  }
}


//everything related to sorting time
var filterTime = [
  ["Reset", "Reiniciar"],
  ["Chronologize", "Cronologizar"],
  ["Oldest", "Más antinguas"],
  ["Newest", "Más recientes"]
];
var timemenu = document.querySelector(".timemenu");
timemenu.innerHTML = "";
for (var i = 0; i < filterTime.length; i++) {
  var liTime = document.createElement("li");
  var node = document.createTextNode(filterTime[i][0]);
  liTime.appendChild(node);
  liTime.id = filterTime[i][0];
  timemenu.appendChild(liTime);
}
var dates = ["2015", "2010", "2005", "2000", "1995", "1990", "1985", "1980", "1975", "1970", "1965", "1960"];
var years = document.querySelector('.years');

for (var i = 0; i < dates.length; i++) {
  var lidates = document.createElement("li");
  var node = document.createTextNode(dates[i]);
  lidates.appendChild(node);
  lidates.id = "years" + dates[i];
  years.appendChild(lidates);
}

var reset = document.querySelector("#Reset");
reset.addEventListener("click", resetbttn);


function resetbttn() {
  var items = document.querySelectorAll(".items");
  for (var i = 0; i < items.length; i++) {
    items[i].classList.add("fade");
    items[i].style.display = "block";
  }
  // if
}

//everything related to features and filter menu

var features = [
//  ["Family & Friends", "Fam", "Familiares y Amigos"],
//  ["Unknown People", "Unknown", "Desconocidos"],
  ["Film Format", "FType", "Formatos de Película"],
  ["Orientation","Orientation"],
  ["Shape", "Shape"],
  ["Color", "C", "Colores"],
  ["Size", "Size", "Medida"],
//  ["Writing Media", "WritingMedia", "Técnica"],
  ["Country", "Country", "País"],
  ["Topics", "Topics", "Temas"]
];

var filtermenu = document.querySelector('.filter-menu');
filtermenu.innerHTML = "";

for (var i = 0; i < features.length; i++) {
  var ulFeatures = document.createElement("ul");
  ulFeatures.style.display = "block";
  ulFeatures.style.paddingLeft = "15%";
  var node = document.createTextNode(features[i][0]);
  ulFeatures.appendChild(node);
  ulFeatures.id = features[i][1];
  filtermenu.appendChild(ulFeatures);

}

//everything related to shape filters goes here
var shapefilters = ["Square", "Rectangle"];
var shapebttn = document.querySelector("#Shape");

for (var i = 0; i < shapefilters.length; i++) {
  var liShapes = document.createElement("li");
  liShapes.style.display = "block";
  // liShapes.style.paddingTop="40px";
  var node = document.createTextNode(shapefilters[i]);
  liShapes.id = shapefilters[i];
  liShapes.addEventListener("click", sFilter);
  liShapes.appendChild(node);
  shapebttn.appendChild(liShapes);
}

function sFilter() {
  // event.target.id.style.color = "black";

  var sqrimg = document.querySelectorAll(".items.Square");
  console.log(sqrimg);
  var items = document.querySelectorAll(".items");
  if (event.target.id == "Square"){
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = "none";
    }
    for (var i = 0; i < sqrimg.length; i++) {
      sqrimg[i].style.display = "block";
      sqrimg[i].classList.add("fade");
    }
  } else if (event.target.id = "Rectangle") {
    var rectimg = document.querySelectorAll(".items.Rectangle");
    for (var i = 0; i < items.length; i++) {
      items[i].style.display = "none";
    }
    for (var i = 0; i < rectimg.length; i++) {
      rectimg[i].classList.add("fade");
      rectimg[i].style.display = "block";
    }

  }

}


//everything related to film type goes here



var filmTypes = ["AGFA", "Kodak", "FUJIFILM", "Konica", "Unknown"];
var fTypebttn = document.querySelector("#FType");

for (var i = 0; i < filmTypes.length; i++) {
  var lifilmTypes = document.createElement("li");
  lifilmTypes.style.display = "block";
  var node = document.createTextNode(filmTypes[i]);
  lifilmTypes.id = filmTypes[i];
  lifilmTypes.addEventListener("click", filmTypesfilter);
  lifilmTypes.appendChild(node);
  fTypebttn.appendChild(lifilmTypes);
}


function filmTypesfilter(target) {
  var bttn = document.querySelector("#" + event.target.id);
  bttn.style.color = "black";
  console.log(bttn);

  if (event.target.id == "AGFA") {
    for (var i = 0; i < orientation.length; i++) {
      undoColorFilter(orientation[i]);
    }
    undoColorFilter("Square");
    undoColorFilter("Rectangle");
    for (var i = 0; i < filmTypes.length; i++) {
      undoColorFilter(filmTypes.slice(-4));
      currentColorFilter(filmTypes[0]);
    }
  }

  if (event.target.id == "Kodak") {
    for (var i = 0; i < orientation.length; i++) {
      undoColorFilter(orientation[i]);
    }
    undoColorFilter("Square");
    undoColorFilter("Rectangle");
    currentColorFilter("Kodak");
    undoColorFilter("FUJIFILM");
    undoColorFilter("Konica");
    undoColorFilter("Unknown");
    undoColorFilter("AGFA");

  }

  if (event.target.id == "FUJIFILM") {
    for (var i = 0; i < orientation.length; i++) {
      undoColorFilter(orientation[i]);
    }
    undoColorFilter("Square");
    undoColorFilter("Rectangle");
    undoColorFilter("Kodak");
    undoColorFilter("Konica");
    undoColorFilter("Unknown");
    undoColorFilter("AGFA");
    currentColorFilter("FUJIFILM");

  }

  if (event.target.id == "Konica") {
    for (var i = 0; i < orientation.length; i++) {
      undoColorFilter(orientation[i]);
    }
    undoColorFilter("Square");
    undoColorFilter("Rectangle");
    undoColorFilter("Kodak");
    undoColorFilter("AGFA");
    undoColorFilter("FUJIFILM");
    undoColorFilter("Unknown");
    currentColorFilter("Konica");
  }

  if (event.target.id == "Unknown") {
    for (var i = 0; i < orientation.length; i++) {
      undoColorFilter(orientation[i]);
    }
    undoColorFilter("Square");
    undoColorFilter("Rectangle");
    undoColorFilter("Kodak");
    undoColorFilter("Konica");
    undoColorFilter("AGFA");
    undoColorFilter("FUJIFILM");
    currentColorFilter("Unknown");
  }

  var displayedimg = document.querySelectorAll(".items." + event.target.id);
  for (var j = 0; j < displayedimg.length; j++) {
      displayedimg[j].style.display = "block";
    }

}

// everything related to color
var color = [["Black & White","BW"], ["Color","Color"]];
var colorbttn = document.querySelector("#C");

for (var i = 0; i < color.length; i++) {
  var licolor = document.createElement("li");
  licolor.style.display = "block";
  var node = document.createTextNode(color[i][0]);
  licolor.id = color[i][1];

  licolor.addEventListener("click", colorfilter);
  // lifilmTypes.addEventListener("click", filmTypesfilter);
  licolor.appendChild(node);
  colorbttn.appendChild(licolor);
}

function undoColorFilter(previous_class){
  container = document.getElementsByClassName(previous_class)
  for(var elem of container){
    elem.style="display: none";
  }
}

function currentColorFilter(current_class){
  container = document.getElementsByClassName(current_class)
  for(var elem of container){
    elem.classList.add("fade");
  }
}

function colorfilter(target) {
  var bttn = document.querySelector("#" + event.target.id);

  console.log(bttn, event.target.id);

  if(event.target.id == "Color"){
    undoColorFilter("BW")
    currentColorFilter("Color");
  } else if(event.target.id == "BW"){
    undoColorFilter("Color")
    currentColorFilter("BW");
  }
  bttn.style.color = "black";

  var displayedimg = document.querySelectorAll(".items." + event.target.id);
  for (var j = 0; j < displayedimg.length; j++) {
      displayedimg[j].style.display = "block";
    }
}


// everything related to orientation


var orientation = ["Portrait", "Panorama", "Landscape", "NA"];
var orientationbttn = document.querySelector("#Orientation");

for (var i = 0; i < orientation.length; i++) {
  var lio = document.createElement("li");
  lio.style.display = "block";
  var node = document.createTextNode(orientation[i]);
  lio.id = orientation[i];

  lio.addEventListener("click", orientationfilter);
  // lifilmTypes.addEventListener("click", filmTypesfilter);
  lio.appendChild(node);
  orientationbttn.appendChild(lio);
}


function orientationfilter(target) {
  var bttn = document.querySelector("#" + event.target.id);
  // items[i].classList.add("fade");
  console.log(bttn, event.target.id);

  if(event.target.id == "Portrait"){
    for (var i = 0; i < filmTypes.length; i++) {
      currentColorFilter(filmTypes[i]);
    }
    for (var i = 0; i < orientation.length; i++) {
      undoColorFilter(orientation.slice(-3));
      currentColorFilter(orientation[0]);
    }
  } else if(event.target.id == "Panorama"){
    for (var i = 0; i < filmTypes.length; i++) {
      currentColorFilter(filmTypes[i]);
    }
    undoColorFilter("Portrait");
    undoColorFilter("Landscape");
    undoColorFilter("Square");
    undoColorFilter("Rectangle");
    undoColorFilter("NA");
    currentColorFilter("Panorama");
  }else if(event.target.id == "Landscape"){
    for (var i = 0; i < filmTypes.length; i++) {
      currentColorFilter(filmTypes[i]);
    }
    undoColorFilter("Panorama");
    undoColorFilter("Portrait");
    undoColorFilter("Square");
    undoColorFilter("Rectangle");
    undoColorFilter("NA");
    currentColorFilter("Landscape");
  }else if (event.target.id == "NA"){
    for (var i = 0; i < filmTypes.length; i++) {
      currentColorFilter(filmTypes[i]);
    }
    undoColorFilter("Panorama");
    undoColorFilter("Landscape");
    undoColorFilter("Portrait");
    undoColorFilter("Square");
    undoColorFilter("Rectangle");
    currentColorFilter("NA");
  }
  bttn.style.color = "black";

  var displayedimg = document.querySelectorAll(".items." + event.target.id);
  for (var j = 0; j < displayedimg.length; j++) {
      displayedimg[j].style.display = "block";
    }

}

