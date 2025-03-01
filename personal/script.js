function start() {
    let song = new Audio("dan.mp3");  // Create a new audio object
    song.play();  // Play the audio file
}

// Execute the function when the window has fully loaded
window.onload = start();