import { useState } from "react"
import data from './assets/data.json'

function App() {

  // to set state of page, planet nav and planet info
  const [pageState, setPageState] = useState('overview')
  const [navState, setNavState] = useState('0')

  //set page color to planet color variable in css
  const root = document.documentElement
  root.style.setProperty('--clr-planet', `var(--clr-primary-${data[navState].name})`)

  //show/hide the mobile planet menu
  function mobileNav() {
    const nav = document.getElementById('planet-nav')
    nav.classList.toggle('show')
  }

  //handle website navigation when changing planets, reset pageState. Close menu if in mobile
  function handleNavChange(e) {
    setNavState(e.target.id)
    setPageState('overview')
    if (window.innerWidth < 600) {
      mobileNav()
    }
  }

  return (
    <>
      <div className="desktop-header-wrapper">
        <header id="header" className="grid">
          <h1>The Planets</h1>
          <svg role='open navigation in mobile view' onClick={mobileNav} onKeyDown={mobileNav} tabIndex='0' xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" /></g></svg>
        </header>
        <nav id='planet-nav' role='website navigation'>
          <ul>
            <li id="0" className={navState === '0' ? 'active' : null} onClick={(e) => handleNavChange(e)}><div className="planet-icon mercury"></div>Mercury<img className="chevron" src='/assets/icon-chevron.svg' alt="chevron" /></li>
            <li id="1" className={navState === '1' ? 'active' : null} onClick={(e) => handleNavChange(e)}><div className="planet-icon venus"></div>Venus<img className="chevron" src='/assets/icon-chevron.svg' alt="chevron" /></li>
            <li id="2" className={navState === '2' ? 'active' : null} onClick={(e) => handleNavChange(e)}><div className="planet-icon earth"></div>Earth<img className="chevron" src='/assets/icon-chevron.svg' alt="chevron" /></li>
            <li id="3" className={navState === '3' ? 'active' : null} onClick={(e) => handleNavChange(e)}><div className="planet-icon mars"></div>Mars<img className="chevron" src='/assets/icon-chevron.svg' alt="chevron" /></li>
            <li id="4" className={navState === '4' ? 'active' : null} onClick={(e) => handleNavChange(e)}><div className="planet-icon jupiter"></div>Jupiter<img className="chevron" src='/assets/icon-chevron.svg' alt="chevron" /></li>
            <li id="5" className={navState === '5' ? 'active' : null} onClick={(e) => handleNavChange(e)}><div className="planet-icon saturn"></div>Saturn<img className="chevron" src='/assets/icon-chevron.svg' alt="chevron" /></li>
            <li id="6" className={navState === '6' ? 'active' : null} onClick={(e) => handleNavChange(e)}><div className="planet-icon uranus"></div>Uranus<img className="chevron" src='/assets/icon-chevron.svg' alt="chevron" /></li>
            <li id="7" className={navState === '7' ? 'active' : null} onClick={(e) => handleNavChange(e)}><div className="planet-icon neptune"></div>Neptune<img className="chevron" src='/assets/icon-chevron.svg' alt="chevron" /></li>
          </ul>
        </nav>
      </div>
      <div className="desktop-body-wrapper">
        <section id="planet-info" className="grid">
          <div className="image-wrapper">
            <img className="planet" src={pageState === 'structure' ? data[navState].images.internal : data[navState].images.planet} alt={data[navState].name} />
            {pageState === 'geology' ? <img className="geology" src={data[navState].images.geology} alt={`${data[navState].name} geology`} /> : null}
          </div>
          <article>
            <h2>{data[navState].name}</h2>
            {pageState === 'overview' ? <p>{data[navState].overview.content}</p>
              : pageState === 'structure' ? <p>{data[navState].structure.content} </p>
                : <p>{data[navState].geology.content}</p>}

            <footer>Source: <a href={data[navState].overview.source} > Wikipedia</a><img className="source" src='/assets/icon-source.svg' alt="arrow" /></footer>
          </article>
          <nav role='planet feature navigation'>
            <ol role='list'>
              <li tabIndex='0' onClick={() => setPageState('overview')} className={pageState === 'overview' ? 'active' : null}><span className="hide num">01</span> Overview</li>
              <li tabIndex='0' onClick={() => setPageState('structure')} className={pageState === 'structure' ? 'active' : null}><span className="hide num">02</span> <span className="hide">Internal </span>Structure</li>
              <li tabIndex='0' onClick={() => setPageState('geology')} className={pageState === 'geology' ? 'active' : null}><span className="hide num">03</span> Surface <span className="hide">Geology</span></li>
            </ol>
          </nav>
        </section>
        <section id="planet-facts" className="grid">
          <article>
            <h3>Rotation Time</h3>
            <p>{data[navState].rotation}</p>
          </article>
          <article>
            <h3>Revolution Time</h3>
            <p>{data[navState].revolution}</p>
          </article>
          <article>
            <h3>Radius</h3>
            <p>{data[navState].radius}</p>
          </article>
          <article>
            <h3>Average Temp</h3>
            <p>{data[navState].temperature}</p>
          </article>
        </section>
      </div>
    </>
  )
}

export default App