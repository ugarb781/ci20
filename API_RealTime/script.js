var xmlhttp = new XMLHttpRequest();
var url = "https://api.nytimes.com/svc/books/v3/lists/current/young-adult-hardcover.json?api-key=PD4jVM0s4hhgaMkjJsKBiRqJAQOoPeWu"; //your file name (or, the structured URL for API call)
var data = [];
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    console.log(data);
    createBooks(data);
    createselectedBook();
    info();
    createTitle();
    createimg();
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function createBooks(data) {
  var docs = data.results.books;
  console.log(docs);
  var listoftitles = [];

  for (var k = 0; k < docs.length; k++) {
    listoftitles.push(docs[k].title);
  }
  console.log(listoftitles);
  for (var i = 0; i < docs.length; i++) {

    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    var spine = document.createElement("div");
    spine.classList.add("book-covers");
    spine.id = "spine" + i;


    spine.style.backgroundColor = bgColor;
    spine.style.width = "30%";


    var spineTitle = document.createElement("p");
    spineTitle.innerText = docs[i].title;
    spineTitle.style.color = "white";
    spineTitle.style.mixBlendMode = "difference";
    spineTitle.style.textAlign = "center";
    spineTitle.classList.add("affected" + [i]);
    spineTitle.id = i;
    spineTitle.addEventListener("click", createInfo);

    spine.appendChild(spineTitle);
    document.querySelector(".book-container").appendChild(spine);

  }
  createFilterSort();


  var azbttn = document.querySelector("#alphabetize");
  azbttn.addEventListener("click", alphabetizefilter);
  var rbttn = document.querySelector("#restore");
  rbttn.addEventListener("click", restorefilter);

  var wbttn = document.querySelector("#weeks");
  wbttn.addEventListener("click", wfilter);

  function rebuildPage() {
    console.log("ahhh");
    for (var j = 0; j < docs.length; j++) {
      document.querySelector(".affected" + [j]).innerHTML = "";
      document.querySelector(".affected" + [j]).innerText = docs[j].title;
      console.log(docs[j].title);
    }
  }


  function alphabetizefilter() {

    console.log("ALPHABET");
    docs.sort(function(a, b) {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      }
      if (b.title.toLowerCase() < a.title.toLowerCase()) {
        return 1;
        return 0
      }
    });

    rebuildPage();
  }

  function restorefilter() {
    console.log("ALPHABET");
    docs.sort(function(a, b) {
      if (a.publisher.toLowerCase() < b.publisher.toLowerCase()) {
        return -1;
      }
      if (b.publisher.toLowerCase() < a.publisher.toLowerCase()) {
        return 1;
        return 0
      }
    });

    rebuildPage();
  }

  function wfilter() {
    console.log("ALPHABET");
    docs.sort(function(a, b) {
      if (a.weeks_on_list > b.weeks_on_list) {
        return -1;
      }
      if (b.weeks_on_list > a.weeks_on_list) {
        return 1;
        return 0
      }
    });

    rebuildPage();
  }


  function createInfo(target) {
    document.querySelector("#selected-book").style.display = "block";
    document.querySelector(".book-information").style.display = "block";
    var booktitle = docs[event.target.id].title;
    var bookauthor = docs[event.target.id].author;
    var bookdescription = docs[event.target.id].description;
    var bookpublisher = docs[event.target.id].publisher;
    var booknum = docs[event.target.id].weeks_on_list;

    var btitle = document.querySelector("#book-title");
    var bauthor = document.querySelector("#book-author");
    var bdesc = document.querySelector("#book-desc");
    var bpub = document.querySelector("#book-pub");
    var bnum = document.querySelector("#book-num");

    btitle.innerHTML = "";
    bauthor.innerHTML = "";
    bdesc.innerHTML = "";

    bpub.innerHTML = "Publisher: " + bookpublisher;
    bnum.innerHTML = "Number of Weeks: " + booknum;
    btitle.innerText = booktitle;
    bauthor.innerText = bookauthor;
    bdesc.innerText = bookdescription;

    document.querySelector("#readmore").href = docs[event.target.id].amazon_product_url;
    document.querySelector("#content").src = docs[event.target.id].book_image;

    document.querySelector("#selected-title").innerText = booktitle;
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    if (event.target.id == "0") {
      console.log("spine0");
      document.querySelector("#selected-book").style.backgroundColor = document.querySelector("#spine0").style.backgroundColor;
      for (var i = 0; i < numbers.length; i++) {
        document.querySelector("#spine" + [0]).style.display = "none";
        document.querySelector("#spine" + [i]).style.display = "block";
      }


    } else if (event.target.id == "1") {
      console.log("spine1");
      document.querySelector("#selected-book").style.backgroundColor = document.querySelector("#spine1").style.backgroundColor;
      for (var i = 0; i < numbers.length; i++) {
        document.querySelector("#spine" + [1]).style.display = "none";
        document.querySelector("#spine" + [i]).style.display = "block";
      }
    } else if (event.target.id == "2") {
      console.log("spine2");
      document.querySelector("#selected-book").style.backgroundColor = document.querySelector("#spine2").style.backgroundColor;
      for (var i = 0; i < numbers.length; i++) {
        document.querySelector("#spine" + [2]).style.display = "none";
        document.querySelector("#spine" + [i]).style.display = "block";
      }
    } else if (event.target.id == "3") {
      console.log("spine3");
      document.querySelector("#selected-book").style.backgroundColor = document.querySelector("#spine3").style.backgroundColor;
      for (var i = 0; i < numbers.length; i++) {
        document.querySelector("#spine" + [3]).style.display = "none";
        document.querySelector("#spine" + [i]).style.display = "block";
      }
    } else if (event.target.id == "4") {
      console.log("spine4");
      document.querySelector("#selected-book").style.backgroundColor = document.querySelector("#spine4").style.backgroundColor;
      for (var i = 0; i < numbers.length; i++) {
        document.querySelector("#spine" + [4]).style.display = "none";
        document.querySelector("#spine" + [i]).style.display = "block";
      }
    } else if (event.target.id == "5") {
      console.log("spine5");
      document.querySelector("#selected-book").style.backgroundColor = document.querySelector("#spine5").style.backgroundColor;
      for (var i = 0; i < numbers.length; i++) {
        document.querySelector("#spine" + [5]).style.display = "none";
        document.querySelector("#spine" + [i]).style.display = "block";
      }
    } else if (event.target.id == "6") {
      console.log("spine6");
      document.querySelector("#selected-book").style.backgroundColor = document.querySelector("#spine6").style.backgroundColor;
      for (var i = 0; i < numbers.length; i++) {
        document.querySelector("#spine" + [6]).style.display = "none";
        document.querySelector("#spine" + [i]).style.display = "block";
      }
    } else if (event.target.id == "7") {
      console.log("spine7");
      document.querySelector("#selected-book").style.backgroundColor = document.querySelector("#spine7").style.backgroundColor;
      for (var i = 0; i < numbers.length; i++) {
        document.querySelector("#spine" + [7]).style.display = "none";
        document.querySelector("#spine" + [i]).style.display = "block";
      }
    } else if (event.target.id == "8") {
      console.log("spine8");
      document.querySelector("#selected-book").style.backgroundColor = document.querySelector("#spine8").style.backgroundColor;
      for (var i = 0; i < numbers.length; i++) {
        document.querySelector("#spine" + [8]).style.display = "none";
        document.querySelector("#spine" + [i]).style.display = "block";
      }
    } else if (event.target.id == "9") {
      console.log("spine9");
      document.querySelector("#selected-book").style.backgroundColor = document.querySelector("#spine9").style.backgroundColor;
      for (var i = 0; i < numbers.length; i++) {
        document.querySelector("#spine" + [9]).style.display = "none";
        document.querySelector("#spine" + [i]).style.display = "block";
      }
    }
  }




}

function createTitle() {
  var h4 = document.createElement("h4");
  var para = document.createTextNode("This week's young adult hardcover best sellers.");
  h4.appendChild(para);
  document.querySelector(".project-title").appendChild(h4);
}

function createselectedBook() {
  var takenout = document.createElement("div");
  takenout.id = "selected-book";
  takenout.style.display = "none";
  takenout.style.backgroundColor = "black";


  var p = document.createElement("p");
  p.innerText = "Title";
  p.style.color = "white";
  p.style.mixBlendMode = "difference";
  p.style.textAlign = "center";
  p.id = "selected-title";
  p.style.cursor = "pointer";

  p.addEventListener("click", putBack);
  takenout.appendChild(p);
  document.querySelector(".result").appendChild(takenout);
}

function putBack() {
  console.log("pulled out");
  if (document.querySelector("#spine0").style.display == "none") {
    document.querySelector("#spine0").style.display = "block";
    document.querySelector("#selected-book").style.display = "none";
  } else if (document.querySelector("#spine1").style.display == "none") {
    document.querySelector("#spine1").style.display = "block";
    document.querySelector("#selected-book").style.display = "none";
  } else if (document.querySelector("#spine2").style.display == "none") {
    document.querySelector("#spine2").style.display = "block";
    document.querySelector("#selected-book").style.display = "none";
  } else if (document.querySelector("#spine3").style.display == "none") {
    document.querySelector("#spine3").style.display = "block";
    document.querySelector("#selected-book").style.display = "none";
  } else if (document.querySelector("#spine4").style.display == "none") {
    document.querySelector("#spine4").style.display = "block";
    document.querySelector("#selected-book").style.display = "none";
  } else if (document.querySelector("#spine5").style.display == "none") {
    document.querySelector("#spine5").style.display = "block";
    document.querySelector("#selected-book").style.display = "none";
  } else if (document.querySelector("#spine6").style.display == "none") {
    document.querySelector("#spine6").style.display = "block";
    document.querySelector("#selected-book").style.display = "none";
  } else if (document.querySelector("#spine7").style.display == "none") {
    document.querySelector("#spine7").style.display = "block";
    document.querySelector("#selected-book").style.display = "none";
  } else if (document.querySelector("#spine8").style.display == "none") {
    document.querySelector("#spine8").style.display = "block";
    document.querySelector("#selected-book").style.display = "none";
  } else if (document.querySelector("#spine9").style.display == "none") {
    document.querySelector("#spine9").style.display = "block";
    document.querySelector("#selected-book").style.display = "none";
  }
}


function info() {
  var div = document.createElement("div");
  div.classList.add("book-information");

  div.style.display = "none";
  var h1 = document.createElement("h1");
  h1.style.fontStyle = "italic";
  h1.id = "book-title"
  h1.style.textTransform = "uppercase";
  h1.innerText = "Title of Book";
  var h3 = document.createElement("h3");
  h3.innerText = "Author of Book";
  h3.id = "book-author";

  var p = document.createElement("p");
  p.innerText = "This is where the book information goes";
  p.id = "book-desc";

  var readmore = document.createElement("a");
  readmore.href = "";
  readmore.id = "readmore";
  readmore.innerText = "Read More";

  var pub = document.createElement("p");
  pub.innerText = "Publisher:";
  pub.id = "book-pub";
  var num = document.createElement("p");
  num.innerText = "Number of Weeks:";
  num.id = "book-num";



  div.appendChild(h1);
  div.appendChild(h3);
  // div.append(img);
  div.appendChild(p);
  div.appendChild(readmore);
  div.appendChild(pub);
  div.appendChild(num);

  document.querySelector(".result").appendChild(div);
}

function createimg() {
  var imagecontainer = document.createElement("div");
  var img = document.createElement("img");
  
  img.id = "content";
  imagecontainer.appendChild(img);
  document.querySelector(".result").appendChild(imagecontainer);

}


function createFilterSort() {
  var alphabet = document.createElement("div");
  alphabet.classList.add("buttons");

  var restorebttn = document.createElement("div");
  restorebttn.classList.add("buttons");

  var az = document.createElement("p");
  az.innerText = "Title";

  var restore = document.createElement("p");
  restore.innerText = "Publisher";

  var weeks = document.createElement("div");
  weeks.classList.add("buttons");
  var w = document.createElement("p");
  w.innerText = "Most Number of Weeks";


  alphabet.appendChild(az);
  restorebttn.appendChild(restore);
  weeks.appendChild(w);
  az.id = "alphabetize";

  restore.id = "restore";

  w.id = "weeks"
  document.querySelector(".project-sort").appendChild(alphabet);
  document.querySelector(".project-sort").appendChild(restorebttn);
  document.querySelector(".project-sort").appendChild(weeks);
}
