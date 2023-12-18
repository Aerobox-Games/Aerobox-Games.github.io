import './Homepage.css'
import Header from "./components/Header";
import Footer from "./components/Footer";

import RougeRacerHomepageImage from "./assets/rogue-racer/homepage.png"
import ElementXHomepageImage from "./assets/element-x/parallax.png"

import CyberRacerImage from "./assets/rogue-racer/cyber_racer.webp"
import AomoriAzusaImage from "./assets/element-x/aomori_azusa.webp"

import RogueRacerLogo from "./assets/rogue-racer/logo.png"
import ElementXLogo from "./assets/element-x/logo.png"

function Homepage() {
  return (
    <div>
      <Header/>

      <div className="relative h-screen overflow-hidden">
        <div style={{backgroundImage: `url(${RougeRacerHomepageImage})`, clipPath: `polygon(0 0, 0 100%, 100% 0)`}} 
                className="absolute bg-cover bg-center  bg-no-repeat w-full h-full">
          <img className="h-4/6 absolute left-[-20%] bottom-[10%]
                          md:left-[-10%] md:bottom-[10%] 
                          lg:left-[0%] lg:bottom-[-10%] lg:h-full"
            src={CyberRacerImage} />

          <a href="/games/rogue-racer">
            <img className="absolute left-[4%] top-[5%] w-[70%] invert
                            md:left-[9%] md:w-[60%] 
                            lg:hidden"
              src={RogueRacerLogo} />
            <img className="absolute left-[5%] top-[5%] w-[70%]
                            md:left-[10%] md:w-[60%]
                            lg:left-[22%] lg:w-[35%]"
              src={RogueRacerLogo} />
          </a>
          {/* <Link to={`/games/rogue-racer`}>          
            <img className="absolute left-[4%] top-[5%] w-[70%] invert
                            md:left-[9%] md:w-[60%] 
                            lg:hidden"
              src={RogueRacerLogo} />
            <img className="absolute left-[5%] top-[5%] w-[70%]
                            md:left-[10%] md:w-[60%]
                            lg:left-[22%] lg:w-[35%]"
              src={RogueRacerLogo} />
          </Link> */}
        </div>

        <div style={{backgroundImage: `url(${ElementXHomepageImage})`, clipPath: `polygon(100% 100%, 0 100%, 100% 0)`}} 
                className="absolute bg-cover  bg-no-repeat w-full h-full">
          <img className="h-4/6 absolute right-[-15%] bottom-[-15%]
                          md:right-[-5%] md:bottom-[-10%]
                          lg:right-[0%] lg:bottom-[-20%] lg:h-full"
            src={AomoriAzusaImage} />

          <a href="/games/element-x">
            <img className="absolute right-[-15%] bottom-[0%]
                          md:right-[5%]
                          lg:w-[50%] lg:right-[12%]"
              src={ElementXLogo} />
          </a>
{/* 
          <Link to={`/games/element-x`}>
            <img className="absolute right-[-15%] bottom-[0%]
                          md:right-[5%]
                          lg:w-[50%] lg:right-[12%]"
              src={ElementXLogo} />
          </Link> */}
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Homepage