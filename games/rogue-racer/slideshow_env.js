let slideIndexEnv = 0;
showSlidesEnv();

function showSlidesEnv() {
    let i;
    let slides = document.getElementsByClassName("envSlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndexEnv = Math.floor(Math.random() * slides.length);

    slides[slideIndexEnv].style.display = "block";
    setTimeout(showSlidesEnv, 4600);
}