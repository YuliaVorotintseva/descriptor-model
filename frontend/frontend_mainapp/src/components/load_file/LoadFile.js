import styleClasses from './LoadFile.module.css'

const LoadFile = props => {
  return (
    <div className={styleClasses.Load}>
      <div className='content'>
        <h3>Download files with data</h3>
        <form className='box field is-grouped is-grouped-right'>
          <div className="file control is-primary has-name is-boxed">
            <label className="file-label">
              <input className="file-input" type="file" name="resume" />
              <span className="file-cta">
                <span className="file-icon">
                  <img src="download.png" />
                </span>
                <span className="file-label">
                  Choose a file…
                </span>
              </span>
            </label>
          </div>

          <div className="file control has-name is-boxed">
            <label className="file-label">
              <input className="file-input" type="file" name="resume" />
              <span className="file-cta">
                <span className="file-icon">
                  <img src="get_pdf.png" />
                </span>
                <span className="file-label">
                  Select from DB
                </span>
              </span>
            </label>
          </div>
        </form>

        <div className="field is-grouped">
          <p className="control">
            <a className="button is-light">
              <span className="file-icon">
                <img src="delete_file.png" />
              </span>
              Delete files
            </a>
          </p>
          <p className="control">
            <a href='/create' className="button is-primary">
              <span className="file-icon">
                <img src="next.png" />
              </span>
              Next
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoadFile