function clickAction(key){

    switch (key) {
        case "W":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "A":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "S":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;                
        case "D":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "J":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;    
        case "K":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "L":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}

noOfDrumButtons = document.querySelectorAll(".set button").length;

for(var i=0;i<noOfDrumButtons;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
    buttoninnerHTML = this.innerHTML;
    clickAction(buttoninnerHTML);
    buttonAnimation(buttoninnerHTML);
});
}

document.addEventListener("keydown", function(event){
    var keyPressed = event.key.toUpperCase();
    clickAction(keyPressed);
    buttonAnimation(keyPressed);
});

function buttonAnimation(currentKey){
    var activeKey = document.querySelector("."+currentKey);
    activeKey.classList.add("pressed");

setTimeout(function() {
    activeKey.classList.remove("pressed");
}, 100);
}