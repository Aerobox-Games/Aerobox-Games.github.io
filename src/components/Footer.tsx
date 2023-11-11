

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="flex">
            {/* <div class="row">
                <a href="">
                    <img src="../footer/social_media/discord.png" class="social_media_button" width=48px
                        style="padding-left: 8px;padding-right: 8px;">
                </a>
                <a href="https://www.instagram.com/aeroboxgames/">
                    <img src="../footer/social_media/instagram.png"
                        class="social_media_button" width=48px style="padding-left: 8px;padding-right: 8px;">        
                </a>
                <a href="https://www.youtube.com/channel/UCpzyYv9IWLoeZcepSK3sIWw?view_as=subscriber">
                    <img src="../footer/social_media/youtube.png" class="social_media_button" width=48px
                        style="padding-left: 8px;padding-right: 8px;">        
                </a>
                <a href="https://www.twitch.tv/aeroboxgames">
                    <img src="../footer/social_media/twitch.png"
                        class="social_media_button" width=48px style="padding-left: 8px;padding-right: 8px;">

                </a>
                <a href="https://twitter.com/AeroboxG">
                    <img src="../footer/social_media/twitter.png"
                        class="social_media_button" width=48px style="padding-left: 8px;padding-right: 8px;">        
                </a>
            </div>

            <div class="row">
                <a href="mailto:contact@aeroboxgames.com" style="padding-left: 8px;padding-right: 8px;">Contact</a>
                <a href="mailto:support@aeroboxgames.com" style="padding-left: 8px;padding-right: 8px;">Support</a>
            </div> */}

            <div className="">
                Aerobox Games Copyright © {currentYear} - All rights reserved
            </div>
        </div>
    )
}

export default Footer
