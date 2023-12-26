import LogoAndTitle from "../assets/common/logo.png"

function Header() {
    return (
        <div className="sticky z-10 top-0 py-0.5 px-2 bg-opacity-80 bg-black w-full flex
                        md:py-1 ">
            <button className="font-bold rounded py-0.5 px-1.5 w-2/6 
                                md:w-2/12
                                lg:w-[10%] ">
                <a href="/">
                    <img className="w-full"
                        src={LogoAndTitle} />
                </a>
            </button>
        </div>
    )
}

export default Header


// mx-4 mb-4 py-8 flex justify-center
//                             md:mx-[10%] md:py-24 md:mb-12
//                             lg:mx-[5%]