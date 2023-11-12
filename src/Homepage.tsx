import {Link} from "react-router-dom";
import './Homepage.css'
import Header from "./components/Header";
import Footer from "./components/Footer";

function Homepage() {
  return (
    <div>
      <Header/>
      <Link to={`/games/rogue-racer`}>Rogue Racer</Link>
      <Link to={`/games/element-x`}>Element X</Link>

      <Footer/>
    </div>
  )
}

export default Homepage
