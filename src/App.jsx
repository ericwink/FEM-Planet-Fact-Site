import { useState } from "react"
import data from './assets/data.json'

function App() {

  // to set state of page to show planet information
  const [pageState, setPageState] = useState('overview')

  //to access the current url and pull the appropriate planet info from the .json file
  const url = window.location.pathname.slice(1, 2)
  const planetNum = url || '0'

  const root = document.documentElement
  root.style.setProperty('--clr-planet', `var(--clr-primary-${data[planetNum].name})`)
  console.log(root)


  //show/hide the mobile planet menu
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
            <li><div className="planet-icon mercury"></div><a className={planetNum === '0' ? 'active' : null} href="/0">Mercury</a><img className="chevron" src='/assets/icon-chevron.svg' alt="chevron" /></li>
            <li><div className="planet-icon venus"></div><a className={planetNum === '1' ? 'active' : null} href="/1">Venus</a><img className="chevron" src='/assets/icon-chevron.svg' alt="chevron" /></li>
            <li><div className="planet-icon earth"></div><a className={planetNum === '2' ? 'active' : null} href="/2">Earth</a><img className="chevron" src='/assets/icon-chevron.svg' alt="chevron" /></li>
            <li><div className="planet-icon mars"></div><a className={planetNum === '3' ? 'active' : null} href="/3">Mars</a><img className="chevron" src='/assets/icon-chevron.svg' alt="chevron" /></li>
            <li><div className="planet-icon jupiter"></div><a className={planetNum === '4' ? 'active' : null} href="/4">Jupiter</a><img className="chevron" src='/assets/icon-chevron.svg' alt="chevron" /></li>
            <li><div className="planet-icon saturn"></div><a className={planetNum === '5' ? 'active' : null} href="/5">Saturn</a><img className="chevron" src='/assets/icon-chevron.svg' alt="chevron" /></li>
            <li><div className="planet-icon uranus"></div><a className={planetNum === '6' ? 'active' : null} href="/6">Uranus</a><img className="chevron" src='/assets/icon-chevron.svg' alt="chevron" /></li>
            <li><div className="planet-icon neptune"></div><a className={planetNum === '7' ? 'active' : null} href="/7">Neptune</a><img className="chevron" src='/assets/icon-chevron.svg' alt="chevron" /></li>
          </ul>
        </nav>
      </div>
      <div className="desktop-body-wrapper">
        <section id="planet-info" className="grid">
          <div className="image-wrapper">
            <img className="planet" src={pageState === 'structure' ? data[planetNum].images.internal : data[planetNum].images.planet} alt={data[planetNum].name} />
            {pageState === 'geology' ? <img className="geology" src={data[planetNum].images.geology} alt={`${data[planetNum].name} geology`} /> : null}
          </div>
          <article>
            <h2>{data[planetNum].name}</h2>
            {pageState === 'overview' ? <p>{data[planetNum].overview.content}</p>
              : pageState === 'structure' ? <p>{data[planetNum].structure.content} </p>
                : <p>{data[planetNum].geology.content}</p>}

            <footer>Source: <a href={data[planetNum].overview.source} > Wikipedia</a><img className="source" src='/assets/icon-source.svg' alt="arrow" /></footer>
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
            <p>{data[planetNum].rotation}</p>
          </article>
          <article>
            <h3>Revolution Time</h3>
            <p>{data[planetNum].revolution}</p>
          </article>
          <article>
            <h3>Radius</h3>
            <p>{data[planetNum].radius}</p>
          </article>
          <article>
            <h3>Average Temp</h3>
            <p>{data[planetNum].temperature}</p>
          </article>
        </section>
      </div>
    </>
  )
}

export default App


//dynamic color
//set color in json?
