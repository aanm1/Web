document.querySelector("img").addEventListener("click",play);





function start() {
    const song = new Audio("dan.mp3"); 
    song.play(); 
}


function play(){
    let go = 1;
    alert (go);
    start();
}


