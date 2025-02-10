
document.querySelector("button").addEventListener("click",clicked);


function clicked(){
    var random = Math.floor(Math.random()*10)+1 ;
    var number = document.querySelector(".input").value;
    if (parseInt(number) === random){
        document.querySelector("p").innerHTML ="<strong>The answer is Correct </strong>";
        document.querySelector("p").classList.remove("incorrect");
        document.querySelector("p").classList.add("correct");

    }else{
        document.querySelector("p").innerHTML ="<strong>The answer is Wrong</strong>";
        document.querySelector("p").classList.remove("correct");
        document.querySelector("p").classList.add("incorrect");
    }
}


document.addEventListener("keypress",click)

function click(event){
    
    alert(event.key);

}



