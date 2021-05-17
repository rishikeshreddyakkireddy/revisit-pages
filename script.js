loadPages();
function show(){
    var input = document.getElementById("input");
    var open = document.getElementById("open");
    var tag = document.getElementById("tag");
    var description = document.getElementById("description");
    open.innerHTML = "";
    var object = {tags: tag.value,input : input.value,description : description.value};
    localStorage.setItem(input.value, JSON.stringify(object));
    input.value = "";
    tag.value = "";
    description.value = "";
    loadPages();
}


//load the pages 
function loadPages(){
  var open = document.getElementById("open");
  open.innerHTML = "";
  for (const key in localStorage) {
    let k;
    if (localStorage.hasOwnProperty(key)) {
      k = JSON.parse( localStorage.getItem( key ) );
    }
    open.innerHTML += ` <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${k.tags}</h5>
          <p class="card-text">${k.description}</p>
          <a href="${k.input}" class="btn btn-primary" target="_blank">Go to website</a>
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
  for (const key in localStorage) {
      if (localStorage.hasOwnProperty(key)) {
        let k = JSON.parse( localStorage.getItem( key ) );
        var tag = k.tags;
        if(h1.innerText === tag){
          if(p.innerText === k.description){
            localStorage.removeItem(key);
          }
        }
      }
  }
  loadPages();
}