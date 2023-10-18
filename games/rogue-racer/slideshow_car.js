let slideIndexCar = 0;
showSlidesCar();

function showSlidesCar() {
    let i;
    let slides = document.getElementsByClassName("carSlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndexCarOld = slideIndexCar;
    slideIndexCar = Math.floor(Math.random() * slides.length);
    if (slideIndexCar == slideIndexCarOld) slideIndexCar = slideIndexCar + 1;
    if (slideIndexCar >= slides.length) slideIndexCar = 0;

    slides[slideIndexCar].style.display = "block";
    setTimeout(showSlidesCar, 4600);
}