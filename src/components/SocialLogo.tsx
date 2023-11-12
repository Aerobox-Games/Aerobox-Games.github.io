function SocialLogo({href, logo}: {href:string, logo:string}) {
    return (
        <a href={href}>
            <img className="w-8 mx-2 invert opacity-50 transition-opacity hover:opacity-100 md:mx-4 md:w-12 "
                src={logo}/>
        </a>
    )
}

export default SocialLogo