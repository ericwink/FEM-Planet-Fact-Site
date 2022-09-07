import { useState } from "react"
import source from '../public/assets/icon-source.svg'
import chevron from '../public/assets/icon-chevron.svg'
import data from '../public/assets/data.json'

function App() {

  const [pageState, setPageState] = useState('overview')

  const url = window.location.pathname.slice(1, 2)

  function mobileNav() {
    const nav = document.getElementById('planet-nav')
    nav.classList.toggle('show')
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
            <li><div className="planet-icon mercury"></div><a href="/0">Mercury</a><img className="chevron" src={chevron} alt="chevron" /></li>
            <li><div className="planet-icon venus"></div><a href="/1">Venus</a><img className="chevron" src={chevron} alt="chevron" /></li>
            <li><div className="planet-icon earth"></div><a href="/2">Earth</a><img className="chevron" src={chevron} alt="chevron" /></li>
            <li><div className="planet-icon mars"></div><a href="/3">Mars</a><img className="chevron" src={chevron} alt="chevron" /></li>
            <li><div className="planet-icon jupiter"></div><a href="/4">Jupiter</a><img className="chevron" src={chevron} alt="chevron" /></li>
            <li><div className="planet-icon saturn"></div><a href="/5">Saturn</a><img className="chevron" src={chevron} alt="chevron" /></li>
            <li><div className="planet-icon uranus"></div><a href="/6">Uranus</a><img className="chevron" src={chevron} alt="chevron" /></li>
            <li><div className="planet-icon neptune"></div><a href="/7">Neptune</a><img className="chevron" src={chevron} alt="chevron" /></li>
          </ul>
        </nav>
      </div>
      <div className="desktop-body-wrapper">
        <section id="planet-info" className="grid">
          <div className="image-wrapper">
            <img className="planet" src={pageState === 'structure' ? data[url].images.internal : data[url].images.planet} alt={data[url].name} />
            {pageState === 'geology' ? <img className="geology" src={data[url].images.geology} alt={`${data[url].name} geology`} /> : null}
          </div>
          <article>
            <h2>{data[url].name}</h2>
            {pageState === 'overview' ? <p>{data[url].overview.content}</p>
              : pageState === 'structure' ? <p>{data[url].structure.content} </p>
                : <p>{data[url].geology.content}</p>}

            <footer>Source: <a href={data[url].overview.source} > Wikipedia</a><img className="source" src={source} alt="arrow" /></footer>
          </article>
          <nav role='planet feature navigation'>
            <ol role='list'>
              <li tabIndex='0' onClick={() => setPageState('overview')}><span className="hide num">01</span> Overview</li>
              <li tabIndex='0' onClick={() => setPageState('structure')}><span className="hide num">02</span> <span className="hide">Internal </span>Structure</li>
              <li tabIndex='0' onClick={() => setPageState('geology')}><span className="hide num">03</span> Surface <span className="hide">Geology</span></li>
            </ol>
          </nav>
        </section>
        <section id="planet-facts" className="grid">
          <article>
            <h3>Rotation Time</h3>
            <p>{data[url].rotation}</p>
          </article>
          <article>
            <h3>Revolution Time</h3>
            <p>{data[url].revolution}</p>
          </article>
          <article>
            <h3>Radius</h3>
            <p>{data[url].radius}</p>
          </article>
          <article>
            <h3>Average Temp</h3>
            <p>{data[url].temperature}</p>
          </article>
        </section>
      </div>
    </>
  )
}

export default App