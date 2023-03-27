
function Task() {

  var item = document.getElementById("box");
  var list_item = document.getElementById("list_item");
  if(item.value != ""){
  
    var make_li = document.createElement("LI");
    make_li.appendChild(document.createTextNode(item.value));
  
    // Adding li to ul
    list_item.appendChild(make_li);
  
    // Reset the value of box
    item.value=""
    
    // Deletion
    make_li.onclick = function(){
      this.parentNode.removeChild(this);
    }
  
  }
  else{
  
    alert("Add your tasks first");
  }
  
  }
  