
import discordLogo from "../assets/common/discord.png"
import instagramLogo from "../assets/common/instagram.png"
import youtubeLogo from "../assets/common/youtube.png"
import twitchLogo from "../assets/common/twitch.png"
import twitterLogo from "../assets/common/twitter.png"

import SocialLogo from "./SocialLogo"
import FooterLink from "./FooterLink"

import AeroboxLogo from "../assets/common/octopus_logo.png"



function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <div className="p-8 bg-opacity-80 bg-black relative">
            <img className="absolute h-1/2 opacity-20 mx-auto left-0 right-0 bottom-[5%]"
                src={AeroboxLogo}
            />

            <div className="flex justify-center my-8">
                <SocialLogo  href="" logo={discordLogo}/>
                <SocialLogo  href="https://www.instagram.com/aeroboxgames/" logo={instagramLogo}/>
                <SocialLogo  href="https://www.youtube.com/channel/UCpzyYv9IWLoeZcepSK3sIWw?view_as=subscriber" logo={youtubeLogo}/>
                <SocialLogo  href="https://www.twitch.tv/aeroboxgames" logo={twitchLogo}/>
                <SocialLogo  href="https://twitter.com/AeroboxG" logo={twitterLogo}/>
            </div>

            <div className="flex justify-center my-8">
                <FooterLink href="mailto:contact@aeroboxgames.com" text="Contact"/>
                <FooterLink href="mailto:support@aeroboxgames.com" text="Support"/>
            </div>

            <div className="flex justify-center my-8 text-xs">
                Aerobox Games Copyright © {currentYear} - All rights reserved
            </div>
        </div>
    )
}

export default Footer
