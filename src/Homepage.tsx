import './Homepage.css'
import Header from "./components/Header";
import Footer from "./components/Footer";

import RogueRacerTile from "./assets/rogue-racer/rogue-racer-tile.png"
import ElementXTile from "./assets/element-x/element-x-tile.png"

function Homepage() {
  return (
    <div>
      <Header/>

      <div className="min-h-screen flex gap-8 p-12">
        <div className="w-1/4">
          <a href="/games/rogue-racer">
            <img
                src={RogueRacerTile} />
          </a>
        </div>
        <div className="w-1/4">

          <a href="/games/element-x">
            <img
                  src={ElementXTile} />
          </a>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Homepage