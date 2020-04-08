fetch("data.json")
.then(function(blob){return blob.json();})
.then(function(json){buildPage(json);});

function buildPage(data){
  console.log(data);
}
