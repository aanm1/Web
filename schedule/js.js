document.querySelector(".add").addEventListener("click",add);
function add(){
    
    var date = document.querySelector(".date").value;
    var parent = document.querySelector(".list");
    var description = document.querySelector(".describe").value;
    
    
    var statment = document.createElement("p");
    statment.innerHTML = String(date) +" "+ description; 
    var newe = document.createElement("li");
      
    newe.appendChild(statment);
    
    parent.appendChild(newe);
    document.querySelector(".describe").value = "";

}

document.querySelector(".remove").addEventListener("click",remove);
function remove(){
    pick = prompt("Enter the number of the TO Do list you want to delete: ");
    number = pick -1;
    var parent = document.querySelector(".list");

    parent.children[number].remove();
    document.querySelector(".describe").value = "";
    
}

document.querySelector(".replace").addEventListener("click",replace);
function replace(){
    one  = prompt("Select the first Element.");
    two = prompt("Select the Swapping Element.")


    first = one -1;
    second = two -1;

    var parent = document.querySelector(".list");
    store = parent.children[first];
    parent.children[first]= parent.children[second].innerHTML;
    parent.children[second]= store.innerHTML;
    alert("Swap Succcesful");
}

document.querySelector(".clear").addEventListener("click",clear);
function clear(){
    var len = document.querySelector(".list");
    var num = len.children;
    for(var i = num.length -1; i >= 0;i--){
        num[i].remove();
    }
    
}