const Documentation = props => {
  return (
    <main className="container">
      <div className='content'>
        <h1 className="text-white text-uppercase text-center my-4">Documentation</h1>
        <h2 className="text-white text-center my-4">Technologies overview</h2>
      </div>

      <div className='content'>
        <table className="table">
          <thead>
            <tr>
              <th><h3>Backend</h3></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <figure className="image is-128x128">
                  <img alt="django" src="django.jpg" />
                </figure>
              </td>
              <td><h3>Django</h3></td>
              <td><p>a high-level Python web framework</p></td>
            </tr>
            <tr>
              <td>
                <figure className="image is-128x128">
                  <img alt="python" src="python.png" />
                </figure>
              </td>
              <td><h3>Python</h3></td>
              <td><p>a high-level programming language</p></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='content'>
        <table className="table">
          <thead>
            <tr>
              <th><h3>Frontend</h3></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <figure className="image is-128x128">
                  <img alt="react" src="react.png" />
                </figure>
              </td>
              <td><h3>React.js</h3></td>
              <td><p>an open source JavaScript library for developing user interfaces</p></td>
            </tr>
            <tr>
              <td>
                <figure className="image is-128x128">
                  <img alt="redux" src="redux.png" />
                </figure>
              </td>
              <td><h3>Redux</h3></td>
              <td><p>an open source JavaScript library designed to manage the state of the application</p></td>
            </tr>
            <tr>
              <td>
                <figure className="image is-128x128">
                  <img alt="bulma" src="bulma.png" />
                </figure>
              </td>
              <td><h3>Bulma</h3></td>
              <td><p>an open source CSS framework based on Flexbox and built with Sass</p></td>
            </tr>
            <tr>
              <td>
                <figure className="image is-128x128">
                  <img alt="js" src="js.png" />
                </figure>
              </td>
              <td><h3>JavaScript</h3></td>
              <td><p>a high-level programming language</p></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Documentation