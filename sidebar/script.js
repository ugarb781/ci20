var pages= ["home", "writings", "drawings", "sketchbook", "prints", "travel", "organizations", "contact","links"];


//get from HTML document a class titled sidebar
var sb = document.querySelector(".sidebar");

for (let i = 0; i < pages.length; i++){
  console.log(pages[i]);

  //check if all pages are there
  //create the link format
  var link = `<a href ="${pages[i]}.html" class="sidebar-link"> ${pages[i]}</a>`;

  //attach to the innerHTML
  sb.innerHTML += link;
}
