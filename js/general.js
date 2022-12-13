var audio = document.getElementById("audio");
var dino = document.getElementById("dino");
var dentro = false;
var aux = 0;

var uwu = setInterval(function () {
    if (dentro) {
        aux += 20;
    }
    dino.style.filter = "hue-rotate(" + aux + "deg)";
}, 25);

dino.addEventListener('mouseover', (e) => {
    dentro = true;
    console.log('toy');
    audio.currentTime = 0;
    audio.play();

});

dino.addEventListener('mouseout', (e) => {
    dentro = false;
    aux = 0;
    audio.pause();
    dino.style.color = "#adff2f"
});