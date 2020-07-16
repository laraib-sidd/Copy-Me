bt = document.querySelectorAll('.drum');

// Detet button and make soun
function drum_click(key) {
    switch (key) {
        case 'a':
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case 'w':
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;


        default:
            console.log(key);
            break;
    }
}

function key_animation(keyPress) {
    var keyPressed = document.querySelector("." + keyPress);
    keyPressed.classList.add('pressed');
    setTimeout(() => {
        keyPressed.classList.remove('pressed')
    }, 100);

}

// Listen to click press and passes it to function
for (let i = 0; i < bt.length; i++) {
    bt[i].addEventListener("click", () => {
        drum_click(bt[i].innerHTML);
        key_animation(bt[i].innerHTML)
    })
}

// Listen key press and passes it to fuction
document.addEventListener('keydown', (event) => {
    drum_click(event.key);
    key_animation(event.key)
})
