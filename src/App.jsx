function App() {

  return (
    <>
      <header>
        <div>
          <p>THE PLANETS</p>
        </div>
        <nav className="site-nav">
          <svg className="hamburger" xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="inherit" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" /></g></svg>
          <ul role='list'>
            <li>Mercury</li>
            <li>Venus</li>
            <li>Earth</li>
            <li>Mars</li>
            <li>Juptier</li>
            <li>Saturn</li>
            <li>Uranus</li>
            <li>Neptune</li>
          </ul>
        </nav>
      </header>
      <section>
        <p>PLANET IMAGE HERE</p>
      </section>
      <section>
        <article>
          <h1>PLANET NAME</h1>
          <p>Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.
          </p>
          <footer>Source: Wikipedia</footer>
        </article>
        <nav>
          <ol>
            <li>Overview</li>
            <li>Internal Structure</li>
            <li>Surface Geology</li>
          </ol>
        </nav>
      </section>
      <section>
        <article>
          <h2>Rotation Time</h2>
          <p>XX.X DAYS</p>
        </article>
        <article>
          <h2>Revolution Time</h2>
          <p>XX.XX DAYS</p>
        </article>
        <article>
          <h2>Radius</h2>
          <p>X,XXXX KM</p>
        </article>
        <article>
          <h2>Average Temp</h2>
          <p>XXXd C</p>
        </article>
      </section>
    </>
  )
}

export default App
