//assigning an array list
var pages= ["home", "writings", "drawings", "sketchbook", "prints", "travel", "organizations", "contact","links"];


//get from HTML document a class titled sidebar
var sb = document.querySelector(".sidebar");

//creates a for loop
//starts counting at 1 and counts up until it reaches the length of pages
for (var i = 0; i < pages.length; i++){
  console.log(pages[i]);
  //checks if it's working

  var a = document.createElement('a');
  //create an a tag

  //gives/generates text for the a tag
  var link = document.createTextNode(pages[i]);
  a.appendChild(link);
  // adding link to the a tag

  //gives it a physical name
  a.title = pages[i];

  //name + html to give it a link
  a.href= pages[i]+".html";
  
  //adding styling from the css
  a.classList.add("sidebar-link");

  //now how I attach it to sidebar?
  //it's attached but not spread out???
  sb.appendChild(a);
  //check if all pages are there
  //create the link format
  //var link = `<a href ="${pages[i]}.html" class="sidebar-link"> ${pages[i]}</a>`;

  //attach to the innerHTML
  //sb.innerHTML += link;
}
