import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="sticky">
            <Link to={`/games`}>Aerobox Games</Link>
        </div>
    )
}

export default Header
