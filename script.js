var text = document.getElementsByClassName("form-control");
var addItem = document.getElementById("button-addon2");
var input = document.getElementById("input");
var addedItems = document.getElementsByClassName("added-items");

document.getElementById("clear-list").addEventListener("click",function(){
    for(var y = addedItems.length + 10; y > 0; y--){
        if(typeof(document.getElementById("data-"+y)) != 'undefined' && document.getElementById("data-"+y) != null){
            document.getElementById("data-"+y).remove();
        } else{
            continue;
        }    
    }
 });

document.getElementById("input").addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        if(input.value[0] === " " || input.value === "") { 
            document.getElementById("warning").style.display = "block";
          var tym = setTimeout(function(){
                 document.getElementById("warning").style.display = "none"
                },1500);
        }
        else{
        event.preventDefault();
        addItem.click(); 
    }      
    }
});

addItem.addEventListener("click",function(){
    var mainDiv = document.getElementById("main");
    var newDiv = document.createElement("div");
    var head = document.createElement("h5");
    var div1 = document.createElement("div");
    var a1 = document.createElement("a");
    var a2 = document.createElement("a");
    var a3 = document.createElement("a");
    var i1 = document.createElement("i");
    var i2 = document.createElement("i");
    var i3 = document.createElement("i");

    mainDiv.appendChild(newDiv);
    newDiv.appendChild(head);
    newDiv.appendChild(div1);
    div1.appendChild(a1);
    div1.appendChild(a2);
    div1.appendChild(a3);
    a1.appendChild(i1);
    a2.appendChild(i2);
    a3.appendChild(i3);
    
    newDiv.classList.add("added-items", "d-flex","justify-content-between","px-2");
    head.classList.add("item-name","text-capitalize","p-1");
    div1.classList.add("item-icons");
    a1.classList.add("complete-item","max-2","item-icon");
    a2.classList.add("edit-item","mx-2","item-icon");
    a3.classList.add("delete-item","item-icon");

    i = document.getElementsByClassName("added-items").length;
   // console.log(i);
    newDiv.id = "data-"+i;

    a1.href = "#";
    a2.href = "#";
    a3.href = "#";

    a1.setAttribute("onclick", `strikeThrough(${i})`);
    a2.setAttribute("onclick", `editItem(${i})`);
    a3.setAttribute("onclick", `deleteItem(${i})`);
    
    i1.classList.add("fa","fa-check-square-o");
    i2.classList.add("fa","fa-pencil-square-o");
    i3.classList.add("fa","fa-times");

    head.innerHTML = input.value;
    //console.log(document.getElementById("input").value);
    input.value = ""; 
});


function strikeThrough(i){
    document.getElementById("data-"+i).classList.toggle("strike");
  
} 

function editItem(i){
    if(document.getElementById("data-"+i).classList.contains("strike")){
        document.getElementById("data-"+i).classList.toggle("strike");
    }
    document.getElementById("data-"+i).firstChild.contentEditable = true;
    document.getElementById("data-"+i).firstChild.focus();

    $("h5[contenteditable]").keypress(function (evt) {
            var keycode = evt.charCode || evt.keyCode;
            if (keycode  == 13) { //Enter key's keycode
              evt.preventDefault();
              //document.getElementById("input").click();
              document.getElementById("data-"+i).firstChild.contentEditable = false;

            }
          })
              
} 

function deleteItem(i){
    document.getElementById("data-"+i).remove();
   
}

