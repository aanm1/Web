document.querySelectorAll("button")[0].addEventListener("click",clicked);
document.querySelectorAll("button")[1].addEventListener("click",clicked);
document.querySelectorAll("button")[2].addEventListener("click",clicked);
document.querySelectorAll("button")[3].addEventListener("click",clicked);
document.querySelectorAll("button")[4].addEventListener("click",clicked);
document.querySelectorAll("button")[5].addEventListener("click",clicked);
document.querySelectorAll("button")[6].addEventListener("click",clicked);
document.querySelector(".mode").addEventListener("click",change);
document.addEventListener("keypress",pressed);


function pressed(event){
    alert(event.key+ " was pressed");

}



function clicked(){
    var get = this.innerHTML;

    switch(get){
        case "w":
            var waudio = new Audio("sounds/tom-1.mp3");
            waudio.play();
            break;
        case "a":
            var aaudio = new Audio("sounds/tom-2.mp3");
            aaudio.play();
            break;
        case "s":
            var saudio = new Audio("sounds/tom-3.mp3");
            saudio.play();
            break;
        case "d":
            var daudio = new Audio("sounds/tom-4.mp3");
            daudio.play();
            break;
        case "j":
            var jaudio = new Audio("sounds/snare.mp3");
            jaudio.play();
            break;
        case "k":
            var kaudio = new Audio("sounds/crash.mp3");
            kaudio.play();
            break;
        case "l":
            laudio = new Audio("sounds/kick-bass.mp3");
            laudio.play();
            break;
        default:
            alert("No available key");
    
    }
    change();
   
    
    
}
function change(){
    document.querySelector("html").classList.toggle("claude");
    document.querySelector("head").classList.toggle("claude");
    document.querySelector("body").classList.toggle("claude");

}
