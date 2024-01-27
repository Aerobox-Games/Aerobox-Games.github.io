import Footer from "../components/Footer"
import Header from "../components/Header"

import RogueRacerLogo from "../assets/rogue-racer/logo.png"
// import RogueRacerMask from "../assets/rogue-racer/mask.png"

import CyberRacerImage from "../assets/rogue-racer/cyber_racer.webp"
import GyaruRacerImage from "../assets/rogue-racer/gyaru_racer.webp"

import YouTubeEmbed from "../components/YouTubeEmbed"
import ScreenshotCarousel from "../components/rouge-racer/ScreenshotCarousel"
import ContentHeader from "../components/rouge-racer/ContentHeader"

// import Car1 from "../assets/rogue-racer/cars/01.png"

// import GlitchImages from "../components/rouge-racer/GlitchImages"

function RougeRacer() {
    return (
        <div className=" bg-black">
            <Header/>

            <div className="flex justify-center relative overflow-hidden">
                    <img className="w-3/6
                                    lg:w-2/6" 
                        src={RogueRacerLogo}/>

                <img className="absolute top-[0%] h-[200%] left-[5%]
                                md:left-[20%]" 
                    src={GyaruRacerImage}/>
                
                <img className="absolute  top-[5%] h-[200%] right-[8%]
                                md:right-[21%]" 
                    src={CyberRacerImage}/>
            </div>

            <div className="mx-4 mb-4 py-8
                            md:mx-[10%] md:py-24 md:mb-12
                            lg:mx-[15%]">
                <YouTubeEmbed embedId="foKgcQQnMok"/>
            </div>
            
            {/* <div className="relative py-16 bg-w">
                <div className="relative">
                    <GlitchImages />

                    <img className="absolute top-0 w-full" src={RogueRacerMask}/>
                </div>

                <img className="absolute top-[15%] w-3/6 left-2/4 translate-y-[-50%] translate-x-[-50%]
                                lg:w-2/6" 
                    src={RogueRacerLogo}/>


            </div> */}

            {/* <div className="mx-4 py-8 text-center">
                <ContentHeader text="About"/> 
                <p>Rogue Racer is an upcoming racing game with narrative and combat elements developed by Aerobox Games.</p>
                <p>Stay tuned! </p>
            </div> */}

            <div className="px-2 mb-4 flex justify-center 
                            md:mx-[10%] md:py-24 md:mb-12
                            lg:mx-[5%]">
                <iframe src="https://store.steampowered.com/widget/764420/" frameBorder="0" width="646" height="190"></iframe>
            </div>

            <div className="mx-4 py-8
                            md:px-[5%]
                            lg:px-[2%]">
                <ContentHeader text="Screenshots"/>                
                <ScreenshotCarousel />
            </div>

            <Footer/>
        </div>
    )
}

export default RougeRacer
