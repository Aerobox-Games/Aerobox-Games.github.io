import Footer from "../components/Footer"
import Header from "../components/Header"

import Logo from "../assets/element-x/logo.png"
import GameContent from "../components/element-x/GameContent"
import ContentHeader from "../components/element-x/ContentHeader"
import YouTubeEmbed from "../components/YouTubeEmbed"

import TeleportImage from "../assets/element-x/icons/teleport.png"
import SlowTimeImage from "../assets/element-x/icons/slow_time.png"
import ExperienceImage from "../assets/element-x/icons/experience.png"
import CoreSwitchImage from "../assets/element-x/icons/core_switch.png"
import HealthUpImage from "../assets/element-x/icons/health_up.png"
import SkullImage from "../assets/element-x/icons/skull.png"

import FireImage from "../assets/element-x/icons/fire.png"
import IceImage from "../assets/element-x/icons/ice.png"
import ElectricityImage from "../assets/element-x/icons/electricity.png"
import ScreenshotCarousel from "../components/element-x/ScreenshotCarousel"

import ParallaxImage from "../assets/element-x/parallax.png"

// import Screenshot_1 from "../assets/element-x/screenshots/screenshot_1.jpg"

function ElementX() {
    return (
        // <div className="element-x-background">
        <div style={{backgroundImage: `url(${ParallaxImage})`}} 
            className="bg-fixed bg-no-repeat bg-cover">
            <Header/>

            <div className="flex justify-center">
                <img src={Logo}/>

            </div>

            <hr className="w3-border-grey mx-[25%] mb-12"></hr>
            
            <div className="text-center mb-12 text-4xl 
                            md:text-6xl ">
                <h1>Roguelike Bullet Hell</h1>  
            </div>
 
            <div className="mx-4 mb-4 py-8 flex justify-center
                            md:mx-[10%] md:py-24 md:mb-12
                            lg:mx-[5%]">
                <meta name="theme-color" content="#4285f4" />
                <iframe src="https://store.steampowered.com/widget/1361120/" frameBorder="0" width="646" height="190" allowTransparency></iframe>
            </div>

            <div className="mx-4 mb-4 py-8
                            md:mx-[10%] md:py-24 md:mb-12
                            lg:mx-[15%]">
                <YouTubeEmbed embedId="P7ZU3IZtmg0"/>
            </div>

            <div className="mx-4 mb-4 py-8 bg-opacity-80 bg-black
                            md:mx-[5%] md:py-24 md:mb-12
                            lg:mx-[15%]">
                <ContentHeader text="Abilities"/>
                <div className="flex flex-col md:flex-row">
                    <GameContent image={SlowTimeImage} text="Slow Time"/>

                    <div className="mx-8 my-4 text-center basis-1 grow">
                        <div className="flex justify-center mb-4">
                            <img className="w-16 mx-2" src={FireImage}/>
                            <img className="w-16 mx-2" src={ElectricityImage}/>
                            <img className="w-16 mx-2" src={IceImage}/>
                        </div>
                        Control Elements
                    </div>

                    <GameContent image={TeleportImage} text="Teleport"/>
                </div>
            </div>

            <div  className="mx-4 mb-4 py-8 bg-opacity-80 bg-black
                             md:mx-[5%] md:py-24 md:mb-12
                             lg:mx-[15%]">
                <ContentHeader text="Features"/>
                <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap">
                    <GameContent image={ExperienceImage} text="Arcade style competitive scoring; Global, friends, and personal leaderboards"/>
                    <GameContent image={CoreSwitchImage} text="Procedurally generated maps, bosses and attack patterns in every play through"/>
                    <GameContent image={HealthUpImage} text="100+ different upgrades and 20+ unlockable perks to craft your own play style"/>
                    <GameContent image={SkullImage} text="Variety of UI and player cosmetics"/>
                </div>
            </div>

            <div className="mx-4 mb-12 
                            md:px-[5%]
                            lg:px-[15%]">
                <ScreenshotCarousel />
            </div>

            <Footer/>
        </div>
    )
}

export default ElementX