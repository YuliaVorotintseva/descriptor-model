import styleClasses from './LoadFile.module.css'

const LoadFile = () => {
  return (
    <div className={styleClasses.Load}>
      <div class='content'>
        <h3>Download files with data</h3>
        <form class='box field is-grouped is-grouped-right'>
          <div class="file control is-primary has-name is-boxed">
            <label class="file-label">
              <input class="file-input" type="file" name="resume" />
              <span class="file-cta">
                <span class="file-icon">
                  <img src="download.png" />
                </span>
                <span class="file-label">
                  Choose a file…
                </span>
              </span>
            </label>
          </div>

          <div class="file control has-name is-boxed">
            <label class="file-label">
              <input class="file-input" type="file" name="resume" />
              <span class="file-cta">
                <span class="file-icon">
                  <img src="get_pdf.png" />
                </span>
                <span class="file-label">
                  Select from DB
                </span>
              </span>
            </label>
          </div>
        </form>

        <div class="field is-grouped">
          <p class="control">
            <a class="button is-light">
              <span class="file-icon">
                <img src="delete_file.png" />
              </span>
              Delete files
            </a>
          </p>
          <p class="control">
            <a href='/create' class="button is-primary">
              <span class="file-icon">
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