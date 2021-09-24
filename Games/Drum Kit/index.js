var noOfKeys = document.querySelectorAll(".drum").length;


// When you press button keys ...
for (var i = 0; i < noOfKeys; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        var button = this.innerHTML;
        sounddd(button);
    });
}


// When you press keyboard keys ...
document.addEventListener("keypress", function(Event){
    var keyboard = Event.key;
    sounddd(keyboard);
});

function sounddd(key){
    
    switch (key) {
            case "w":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play()
                break;

            case "a":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play()
                break;

            case "s":
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play()
                break;

            case "d":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play()
                break;

            case "j":
                var crash = new Audio("./sounds/crash.mp3");
                crash.play()
                break;

            case "k":
                var kick = new Audio("./sounds/kick.mp3");
                kick.play()
                break;
            case "l":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play()
                break;

            default: console.log(key);
                break;
        }
}







