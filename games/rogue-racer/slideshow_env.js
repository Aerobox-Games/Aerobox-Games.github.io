let slideIndexEnv = 0;
showSlidesEnv();

function showSlidesEnv() {
    let i;
    let slides = document.getElementsByClassName("envSlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndexEnvOld = slideIndexEnv;
    slideIndexEnv = Math.floor(Math.random() * slides.length);
    if (slideIndexEnv == slideIndexEnvOld) slideIndexEnv = slideIndexEnv + 1;
    if (slideIndexEnv >= slides.length) slideIndexEnv = 0;

    slides[slideIndexEnv].style.display = "block";
    setTimeout(showSlidesEnv, 4600);
}