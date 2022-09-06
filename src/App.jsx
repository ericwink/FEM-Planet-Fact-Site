import { useState } from "react"
import planet from './assets/planet-earth.svg'
import source from './assets/icon-source.svg'
import chevron from './assets/icon-chevron.svg'

function App() {

  const [mobileMenu, setMobileMenu] = useState(false)

  function mobileNav() {
    const nav = document.getElementById('planet-nav')
    nav.classList.toggle('show')
  }

  return (
    <>
      <div className="desktop-wrapper">
        <header id="header" className="grid">
          <h1>THE PLANETS</h1>
          <svg onClick={mobileNav} xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" /></g></svg>
        </header>
        <nav id='planet-nav' role='website navigation'>
          <ul>
            <li><div className="planet-icon mercury"></div><a href="#">Mercury</a><img className="chevron" src={chevron} alt="chevron" /></li>
            <li><div className="planet-icon venus"></div><a href="#">Venus</a><img className="chevron" src={chevron} alt="chevron" /></li>
            <li><div className="planet-icon earth"></div><a href="#">Earth</a><img className="chevron" src={chevron} alt="chevron" /></li>
            <li><div className="planet-icon mars"></div><a href="#">Mars</a><img className="chevron" src={chevron} alt="chevron" /></li>
            <li><div className="planet-icon jupiter"></div><a href="#">Jupiter</a><img className="chevron" src={chevron} alt="chevron" /></li>
            <li><div className="planet-icon saturn"></div><a href="#">Saturn</a><img className="chevron" src={chevron} alt="chevron" /></li>
            <li><div className="planet-icon uranus"></div><a href="#">Uranus</a><img className="chevron" src={chevron} alt="chevron" /></li>
            <li><div className="planet-icon neptune"></div><a href="#">Neptune</a><img className="chevron" src={chevron} alt="chevron" /></li>
          </ul>
        </nav>
      </div>
      <div className="wrapper">
        <section id="planet-info" className="grid">
          <img className="planet" src={planet} alt="planet earth" />
          <article>
            <h2>PLANET</h2>
            <p>Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.
            </p>
            <footer>Source: <a href="#">Wikipedia</a><img className="source" src={source} alt="arrow" /></footer>
          </article>
          <nav role='planet feature navigation'>
            <ol role='list'>
              <li><span className="hide num">01</span> Overview</li>
              <li><span className="hide num">02</span> <span className="hide">Internal </span>Structure</li>
              <li><span className="hide num">03</span> Surface <span className="hide">Geology</span></li>
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
      </div>
    </>
  )
}

export default App
