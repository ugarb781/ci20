fetch("data.json")
.then(function(blob){return blob.json();})
.then(function(json){buildPage(json);})


function buildPage(data){
  console.log(data);
  var galleryimages = data;

  var galleryset = document.querySelector('.maincontent');
  galleryset.innerHTML='';
  for (i = 0; i < galleryimages.length; i++){
    var img = document.createElement('img');
    img.src = galleryimages[i].ImageUrl1;
    img.addEventListener("click", lightbox);
    var itemcontainer = document.createElement('div');
    itemcontainer.className += "items";
    function lightbox(target){
      console.log("clicked");
      var light = document.querySelector("#lightbox");
      var exit = document.querySelector("#exit");
      exit.addEventListener("click", removeLightbox);
      function removeLightbox(){
        light.style.display="none";
        exit.style.display="none";
        infocontent.style.display = "none";
      }
      var infocontent =document.querySelector(".information-content");
      light.style.display="flex";
      exit.style.display="inline";
      infocontent.style.display = "flex";

      var mainimage = document.querySelector("#mainimage");
      mainimage.innerHTML = "";
      var largeimage = document.createElement('img');
      var selected =event.target.src;
      largeimage.src = selected;

      // largeimage.src = galleryimages[i].ImageUrl1;
      mainimage.appendChild(largeimage);
      //add main image here

    }
    itemcontainer.appendChild(img);

    galleryset.appendChild(itemcontainer);
  }

 }



var filterTime =  [["Reset", "Reiniciar"], ["Chronologize", "Cronologizar"], ["Oldest", "Más antinguas"], ["Newest", "Más recientes"]];

var timemenu = document.querySelector(".timemenu");

timemenu.innerHTML ="";

for (var i = 0; i < filterTime.length; i++) {
  var liTime = document.createElement("li");
  var node = document.createTextNode(filterTime[i][0]);
  liTime.appendChild(node);
  liTime.id = filterTime[i][0];
  timemenu.appendChild(liTime);
}
var dates =["2015","2010","2005","2000","1995", "1990", "1985", "1980", "1975", "1970", "1965", "1960"];
var years = document.querySelector('.years');

for (var i = 0; i < dates.length; i++) {
  var lidates = document.createElement("li");
  var node = document.createTextNode(dates[i]);
  lidates.appendChild(node);
  lidates.id = "years" + dates[i];
  years.appendChild(lidates);
}

features = [["Family & Friends", "Fam", "Familiares y Amigos"], ["Unknown People","Unknown","Desconocidos"],["Film Format", "FType", "Formatos de Película"], ["Color", "Color", "Colores"],["Size","Size","Medida"], ["Writing Media", "WritingMedia", "Técnica"], ["Location", "Location", "Lugar"], ["Topics", "Topics", "Temas"]];

var filtermenu = document.querySelector('.filter-menu');
filtermenu.innerHTML = "";

for (var i = 0; i < features.length; i++) {
  var ulFeatures = document.createElement("ul");
  var node = document.createTextNode(features[i][0]);
  ulFeatures.appendChild(node);
  ulFeatures.id = features[i][1];
  filtermenu.appendChild(ulFeatures);
}


// var filmTypes = ["AGFA", "Kodak", "FUJIFILM", "Konica", "Unknown"];
//
// var family = [
//   ["Angelita","Angelita"],
//   ["Mabel Avila", "MabelAvila"],
//   ["Manny Avila", "MannyAvila"],
//   ["Shelmy Cepeda","ShelmyCepeda"],
//   ["Jennifer Garcia", "JenniferGarcia"],
//   ["Matthew Garcia", "MatthewGarcia"],
//   ["Noah Garcia", "NoahGarcia"],
//   ["Ryan Garcia", "RyanGarcia"],
//   ["Carol Gonzalez", "CarolGonzalez"],
//   ["Diana Gonzalez", "DianaGonzalez"],
//   ["Doris Gonzalez", "DorisGonzalez"],
//   ["Elsie Gonzalez", "ElsieGonzalez"],
//   ["Esmeralda Gonzalez", "EsmeraldaGonzalez"],
//   ["Evelyn Gonzalez", "EvelynGonzalez"],
//   ["Franklin Gonzalez","FranklinGonzalez"],
//   ["Hugo Gonzalez", "HugoGonzalez"],
//   ["Mariana Gonzalez", "MarianaGonzalez"],
//   ["Sildey Gonzalez", "SildeyGonzalez"],
//   ["Wacho Gonzalez", "WachoGonzalez"],
//   ["William Gonzalez", "WilliamGonzalez"],
//   ["William Leonardo", "WilliamLeonardo"],
//   ["Anmere Malpaso","AnmereMalpaso"],
//   ["Brigitte Ugarte", "BrigitteUgarte"],
//   ["Vanessa","Vanessa"],
//   ["Alberto Varela", "AlbertoVarela"],
//   ["Haydee Varela", "HaydeeVarela"],
//   ["Joshua Varela", "JoshuaVarela"],
//   ["Wendy Varela","WendyVarela"],
// ];
//
// var friends = [
//   "Alex Altamirano",
//   "Haruka Amemiya",
//   "Kaye Kongaika",
//   "Yan Marerro",
//   "Valentina Rojas",
//   "Jean Suh",
//   "Josh Weinfeld"
// ]
//
//
// var tfilter = document.querySelector('#timefilter');
// var buttons = document.querySelector('#buttons');
//
//
// for (var i = 0; i < dates.length; i++) {
//   var lidates = document.createElement("li");
//   var node = document.createTextNode(dates[i]);
//   lidates.appendChild(node);
//   lidates.id = "years" + dates[i];
//   years.appendChild(lidates);
// }
//
//
// for (var i = 0; i < features.length; i++) {
//   var ulFeatures = document.createElement("ul");
//   var node = document.createTextNode(features[i][0]);
//   ulFeatures.appendChild(node);
//   ulFeatures.id = features[i][1];
//   buttons.appendChild(ulFeatures);
// }
//
// var sp = document.querySelector('#spanish');
// var en = document.querySelector('#english');
//
// en.addEventListener("click", revert);
// sp.addEventListener("click", changeLanguage);
//
//
// //everything Spanish
// function changeLanguage(){
//   for (var i = 0; i < enTime.length; i++) {
//     var topmenu = document.querySelector("#"+enTime[i][0]);
//     if (enTime[i][0] != enTime[i][1]){
//       console.log("working here too");
//       topmenu.innerHTML = enTime[i][1];
//     }
//   }
//   for (var i = 0; i < features.length; i++) {
//     var changethis =document.querySelector("#"+features[i][1]);
//     if (features[i][0] != features[i][2]) {
//       console.log("working");
//       changethis.innerHTML = features[i][2];
//     }
//   }
//   sp.style.color = "black";
//   en.style.color = "rgb(42, 44, 235)";
// }
//
// //makes everything English
// function revert(){
//   for (var i = 0; i < enTime.length; i++) {
//     var topmenu = document.querySelector("#"+enTime[i][0]);
//     if (enTime[i][0] != enTime[i][1]){
//       console.log("working here too");
//       topmenu.innerHTML = enTime[i][0];
//     }
//   }
//   for (var i = 0; i < features.length; i++) {
//     var changethis =document.querySelector("#"+features[i][1]);
//     if (features[i][0] != features[i][2]) {
//       console.log("working");
//       changethis.innerHTML = features[i][0];
//     }
//   }
//   en.style.color = "black";
//   sp.style.color = "rgb(42, 44, 235)";
// }
//
// var famfilter = document.querySelector("#Fam");
// famfilter.addEventListener("click", everyone);
//
// var fFilter = document.querySelector("#FType");
//
// for (var i = 0; i < filmTypes.length; i++) {
//   var letsee = document.createElement("li");
//   // letsee.style.listStyle = "circle";
//   letsee.id = filmTypes[i];
//   // letsee.classList.add("hide");
//   var node= document.createTextNode(filmTypes[i]);
//   letsee.appendChild(node);
//   fFilter.appendChild(letsee);
// }
//
//
// for (var i = 0; i < family.length; i++) {
//   var letsee = document.createElement("li");
//   // letsee.style.listStyle = "circle";
//   letsee.id = family[i][1];
//   letsee.classList.add("hide");
//   var node= document.createTextNode(family[i][0]);
//   letsee.appendChild(node);
//   famfilter.appendChild(letsee);
// }
//
// function everyone(){
//   if (document.querySelector(".hide") != document.querySelector(".show")){
//     for (var i = 0; i < family.length; i++) {
//       famfilter.style.color="black";
//       var appearingText= document.querySelector("#" + family[i][1]);
//       appearingText.classList.remove("hide");
//       appearingText.classList.add(".show");
//     }
//   }else{
//     famfilter.style.color="rgb(42, 44, 235)";
//     for (var i = 0; i < family.length; i++) {
//
//       var appearingText= document.querySelector("#" + family[i][1]);
//       appearingText.classList.remove(".show");
//       appearingText.classList.add("hide");
//     }
//   }
//
// }
