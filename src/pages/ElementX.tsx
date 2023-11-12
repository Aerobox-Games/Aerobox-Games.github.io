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

// import Screenshot_1 from "../assets/element-x/screenshots/screenshot_1.jpg"

function ElementX() {
    return (
        <div>
            <Header/>

            <div className="flex justify-center">
                <img src={Logo}/>
            </div>
 
            <div className="px-8 mb-12 flex justify-center">
                <meta name="theme-color" content="#4285f4" />
                <iframe src="https://store.steampowered.com/widget/1361120/" frameBorder="0" width="646" height="190" allowTransparency></iframe>
            </div>

            <div className="px-8 mb-12 md:px-24 lg:px-96">
                <YouTubeEmbed embedId="P7ZU3IZtmg0"/>
            </div>

            <div className="px-8 mb-12">
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

            {/* <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                <div className="carousel-item">
                    <img src={Screenshot_1} className="rounded-box" />
                </div> 
            </div> */}

            <div  className="mb-12">
                <ContentHeader text="Features"/>
                <div className="flex flex-col md:flex-row">
                    <GameContent image={ExperienceImage} text="Arcade style competitive scoring; Global, friends, and personal leaderboards"/>
                    <GameContent image={CoreSwitchImage} text="Procedurally generated maps, bosses and attack patterns in every play through"/>
                    <GameContent image={HealthUpImage} text="100+ different upgrades and 20+ unlockable perks to craft your own play style"/>
                    <GameContent image={SkullImage} text="Variety of UI and player cosmetics"/>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default ElementX