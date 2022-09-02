import { useState } from "react"
import planet from './assets/planet-earth.svg'

function App() {

  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <>
      <header id="header-and-nav" className="grid">
        <h1>THE PLANETS</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" /></g></svg>
        <nav role='website navigation'>
          <ul>
            <li><a href="#">Mercury</a></li>
            <li><a href="#">Venus</a></li>
            <li><a href="#">Earth</a></li>
            <li><a href="#">Mars</a></li>
            <li><a href="#">Jupiter</a></li>
            <li><a href="#">Saturn</a></li>
            <li><a href="#">Uranus</a></li>
            <li><a href="#">Neptune</a></li>
          </ul>
        </nav>
      </header>
      <section id="planet-info" className="grid">
        <img src={planet} alt="planet earth" />
        <article>
          <h2>PLANET NAME</h2>
          <p>Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.
          </p>
          <footer>Source: <a href="#">Wikipedia</a></footer>
        </article>
        <nav role='planet feature navigation'>
          <ol role='list'>
            <li><span className="hide">01</span> Overview</li>
            <li><span className="hide">02</span> <span className="hide">Internal </span>Structure</li>
            <li><span className="hide">03</span> Surface <span className="hide">Geology</span></li>
          </ol>
        </nav>
      </section>
      <section id="planet-facts" className="grid">
        <article>
          <h3>Rotation Time</h3>
          <p>XX.X DAYS</p>
        </article>
        <article>
          <h3>Revolution Time</h3>
          <p>XX.XX DAYS</p>
        </article>
        <article>
          <h3>Radius</h3>
          <p>X,XXXX KM</p>
        </article>
        <article>
          <h3>Average Temp</h3>
          <p>XXXd C</p>
        </article>
      </section>
    </>
  )
}

export default App
