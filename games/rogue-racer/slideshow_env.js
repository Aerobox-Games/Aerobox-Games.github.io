let slideIndexEnv = 0;
showSlidesEnv();

function showSlidesEnv() {
    const images = [
        "images/bgs/764420_20231006231043_1.png",
        "images/bgs/764420_20231018150115_1.png",
        "images/bgs/764420_20231018150608_1.png",
        "images/bgs/764420_20231018152352_1.png",
        "images/bgs/764420_20231006231359_1.png",
        "images/bgs/764420_20231018150155_1.png",
        "images/bgs/764420_20231018150715_1.png",
        "images/bgs/764420_20231018152533_1.png",
        "images/bgs/764420_20231007120719_1.png",
        "images/bgs/764420_20231018150259_1.png",
        "images/bgs/764420_20231018150826_1.png",
        "images/bgs/764420_20231007121142_1.png",
        "images/bgs/764420_20231018150426_1.png",
        "images/bgs/764420_20231018152142_1.png",
    ];

    slideIndexEnvOld = slideIndexEnv;
    slideIndexEnv = Math.floor(Math.random() * images.length);
    if (slideIndexEnv == slideIndexEnvOld) slideIndexEnv = slideIndexEnv + 1;
    if (slideIndexEnv >= images.length) slideIndexEnv = 0;

    document.getElementById("envs").src = images[slideIndexEnv];
    setTimeout(showSlidesEnv, 4800);
}