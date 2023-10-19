let slideIndexCar = 0;
showSlidesCar();

function showSlidesCar() {
    const images = [
        "images/cars/01.png",
        "images/cars/02.png",
        "images/cars/03.png",
        "images/cars/04.png",
        "images/cars/05.png",
        "images/cars/06.png",
        "images/cars/07.png",
    ];

    slideIndexCarOld = slideIndexCar;
    slideIndexCar = Math.floor(Math.random() * images.length);
    if (slideIndexCar == slideIndexCarOld) slideIndexCar = slideIndexCar + 1;
    if (slideIndexCar >= images.length) slideIndexCar = 0;

    document.getElementById("cars").src = images[slideIndexCar];
    setTimeout(showSlidesCar, 4600);
}