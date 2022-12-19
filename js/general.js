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

var header = document.getElementById("header");

function unload(name) {
    header.style.animationName = 'unload';
    setTimeout(function () {
        location.replace(name + '.html');
    }, 250);

}
window.addEventListener('load', function (e) {
    header.style.animationName = 'loadbg';
});

var flecha = document.getElementById("flecha2");
var texto = document.getElementById("imgs");

var uwu = false;
flecha.addEventListener('click', function (e) {
    if (!uwu) {
        flecha.style.transform = 'rotate(90deg)';
        flecha.style.transition = '.2s';
        uwu = true;
        texto.style.visibility = 'visible';

    } else {
        flecha.style.transform = 'rotate(0deg)';
        flecha.style.transition = '.2s';
        uwu = false;
        texto.style.visibility = 'hidden';
    }
});

var flecha2 = document.getElementById("flecha3");
var texto2 = document.getElementById("imgs2");

var uwu2 = false;
flecha2.addEventListener('click', function (e) {
    if (!uwu2) {
        flecha2.style.transform = 'rotate(90deg)';
        flecha2.style.transition = '.2s';
        uwu2 = true;
        texto2.style.visibility = 'visible';

    } else {
        flecha2.style.transform = 'rotate(0deg)';
        flecha2.style.transition = '.2s';
        uwu2 = false;
        texto2.style.visibility = 'hidden';
    }
});
var flecha3 = document.getElementById("flecha4");
var texto3 = document.getElementById("imgs3");

var uwu3 = false;
flecha3.addEventListener('click', function (e) {
    if (!uwu3) {
        flecha3.style.transform = 'rotate(90deg)';
        flecha3.style.transition = '.2s';
        uwu3 = true;
        texto3.style.visibility = 'visible';

    } else {
        flecha3.style.transform = 'rotate(0deg)';
        flecha3.style.transition = '.2s';
        uwu3 = false;
        texto3.style.visibility = 'hidden';
    }
});

var flecha4 = document.getElementById("flecha5");
var texto4 = document.getElementById("imgs4");

var uwu4 = false;
flecha4.addEventListener('click', function (e) {
    if (!uwu4) {
        flecha4.style.transform = 'rotate(90deg)';
        flecha4.style.transition = '.2s';
        uwu4 = true;
        texto4.style.visibility = 'visible';

    } else {
        flecha4.style.transform = 'rotate(0deg)';
        flecha4.style.transition = '.2s';
        uwu4 = false;
        texto4.style.visibility = 'hidden';
    }
});