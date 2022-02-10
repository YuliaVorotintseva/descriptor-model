const LoadFile = props => {
  return (
    <div class='content'>
      <h3>You can download only PDF files</h3>
      <div class="file has-name is-boxed">
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
    </div>
  )
}

export default LoadFile