let slideIndexCar = 0;
showSlidesCar();

function showSlidesCar() {
    let i;
    let slides = document.getElementsByClassName("carSlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndexCar = Math.floor(Math.random() * slides.length);

    slides[slideIndexCar].style.display = "block";
    setTimeout(showSlidesCar, 3300);
}