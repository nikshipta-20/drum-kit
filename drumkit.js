//for button
for(var i = 0; i < 7; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var button = this.innerHTML;
        playSong(button);
        buttonAnimation(button);
    });
}

//for keyboard press
document.addEventListener("keydown", function(event) {
    playSong(event.key);
    buttonAnimation(event.key);
});

function playSong(button){
    var musicName;
    switch (button) {
        case "w":
            musicName = "tom-1";
            break;
        case "a":
            musicName = "tom-2";
            break;
        case "s":
            musicName = "tom-3";
            break;
        case "d":
            musicName = "tom-4";
            break;
        case "j":
            musicName = "snare";
            break;
        case "k":
            musicName = "crash";
            break;
        case "l":
            musicName = "kick-bass";
            break;
        default:
            break;
    }
    var sound = new Audio(musicName + ".mp3");
    sound.play();
}

function buttonAnimation(currentKey){
    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");
    
    setTimeout(function() {
        activeKey.classList.remove("pressed");
    }, 100);
}