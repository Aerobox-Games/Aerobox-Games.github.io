//import { PowerGlitch } from "powerglitch";
import { useState, useEffect } from "react";

import Car1 from "../../assets/rogue-racer/cars/01.png";
import Car2 from "../../assets/rogue-racer/cars/02.png";
import Car3 from "../../assets/rogue-racer/cars/03.png";
import Car4 from "../../assets/rogue-racer/cars/04.png";
import Car5 from "../../assets/rogue-racer/cars/05.png";
import Car6 from "../../assets/rogue-racer/cars/06.png";
import Car7 from "../../assets/rogue-racer/cars/07.png";

import Desert1 from "../../assets/rogue-racer/backgrounds/desert_1.png";
import Desert2 from "../../assets/rogue-racer/backgrounds/desert_2.png";
import Desert3 from "../../assets/rogue-racer/backgrounds/desert_3.png";
import Forest1 from "../../assets/rogue-racer/backgrounds/forest_day_1.png";
import Forest2 from "../../assets/rogue-racer/backgrounds/forest_night_1.png";
import Forest3 from "../../assets/rogue-racer/backgrounds/forest_night_2.png";

function GlitchImages() {
  const carImages = [Car1, Car2, Car3, Car4, Car5, Car6, Car7];
  const backgroundImages = [
    Desert1,
    Desert2,
    Desert3,
    Forest1,
    Forest2,
    Forest3,
  ];

  const [currentCar, setCurrentCar] = useState(Car1);
  const [currentBackground, setCurrentBackground] = useState(Desert1);

  function updateCarImage() {
    let carIndex = Math.floor(Math.random() * carImages.length);
    setCurrentCar(carImages[carIndex]);

    let backgroundIndex = Math.floor(Math.random() * backgroundImages.length);
    setCurrentBackground(backgroundImages[backgroundIndex]);

    //PowerGlitch.glitch(".glitch")
  }

//   function glitchImage() {
//     const { startGlitch, stopGlitch } = PowerGlitch.glitch(".glitch", {
//       playMode: "always",
//       createContainers: true,
//       hideOverflow: true,
//       timing: {
//         duration: 1000,
//         iterations: 1,
//       },
//       glitchTimeSpan: {
//         start: 0.5,
//         end: 0.7,
//       },
//       shake: {
//         velocity: 5,
//         amplitudeX: 0.2,
//         amplitudeY: 0.2,
//       },
//       slice: {
//         count: 6,
//         velocity: 5,
//         minHeight: 0.02,
//         maxHeight: 0.15,
//         hueRotate: true,
//       },
//       pulse: false,
//     });

//     startGlitch();
//     setTimeout(() => stopGlitch(), 1000);
//   }

  useEffect(() => {
    let updateInterval = setInterval(() => {
        updateCarImage()
    }, 5000)

    return () => {
        clearInterval(updateInterval)
    }
  },[])


  return (
    <div className="w-full">
      <img className="w-full" src={currentBackground} />

      <img
        className="absolute bottom-[-10%] right-0 w-[75%] glitch"
        src={currentCar}
      />
    </div>
  );
}

export default GlitchImages;
