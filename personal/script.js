document.querySelector("img").addEventListener("click",play);


function play(){
    let go = 1;
    alert (go);
}


function start() {
    let song = new Audio("dan.mp3"); 
    song.play(); 
}

window.onload = start;