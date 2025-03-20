var name = "Abel";
console.log(name);

const player = require('play-sound')();  // Import the play-sound library

function play() {
    player.play('dan.mp3', function(err) {
        if (err) {
            console.log('Error playing the sound:', err);
        } else {
            console.log('Sound played successfully!');
        }
    });

    console.log("It went through it.");
}

play();  // Call the play function to trigger it
