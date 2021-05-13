let pages = [];

function show(){
    var input = document.getElementById("input");
    var open = document.getElementById("open");
    var tag = document.getElementById("tag");
    var description = document.getElementById("description");
    open.innerHTML = "";
    var object = {tag: tag.value,input : input.value,description : description.value}
    pages.unshift(object);
    loadPages();
    input.value = "";
    tag.value = "";
    description.value = "";
}


//load the pages 
function loadPages(){
  var open = document.getElementById("open");
  open.innerHTML = "";
  for(let i=0;i<pages.length;i++){
    open.innerHTML += ` <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${pages[i].tag}</h5>
          <p class="card-text">${pages[i].description}</p>
          <a href="${pages[i].input}" class="btn btn-primary" target="_blank">Go to website</a>
          <a  class="btn btn-danger" id="delete" onclick="deletePage(event)" ">Delete</a>
        </div>
      </div>
    </div>`;
  }
}

function deletePage(e){
  //get parent of the page which is to be deleted
  var parent = e.target.offsetParent;
  var innerDiv = parent.childNodes[1];
  var children = innerDiv.childNodes;
  //get children
  var h1 = children[1];
  var p = children[3];
  var a = children[7];
  //find the page and delete
  for(let i=0;i<pages.length;i++){
      if(h1.innerText === pages[i].tag){
        if(p.innerText === pages[i].description){
            pages.splice(i);
        }
      }
  }
  loadPages();
}