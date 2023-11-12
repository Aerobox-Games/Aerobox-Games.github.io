import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="sticky z-10 top-0 py-4 px-8 bg-opacity-80 bg-black w-full">
            <button className="bg-black font-bold py-4 px-8 rounded
                                hover:bg-white hover:text-black ">
                <Link to={`/games`}>Aerobox Games</Link>
            </button>
        </div>
    )
}

export default Header
