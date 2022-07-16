function opennav() {
    document.querySelector('.box').style.transform = "translateY(0)";

}

function closenav() {
    document.querySelector('.box').style.transform = "translateY(-100%)";
}

// Contact
var slides = document.getElementsByClassName("lft-img");
var slide = 0;

function changelft() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;

    }
    slide++;
    if (slide > slides.length - 1) {
        slide = 0;
    }
    slides[slide].style.opacity = 1;
}

setInterval(changelft, 4000);


var zlides = document.getElementsByClassName("rgt-img");
var zlide = 0;

function changergt() {
    for (var i = 0; i < zlides.length; i++) {
        zlides[i].style.opacity = 0;

    }
    zlide++;
    if (zlide > zlides.length - 1) {
        zlide = 0;
    }
    zlides[slide].style.opacity = 1;
}

setInterval(changergt, 3500);
