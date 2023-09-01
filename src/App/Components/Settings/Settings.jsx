import './styles.css';

export const Settings = () => {
  return (
    <>
      <div>Setings - todo</div>
      <div className='mode__div'>
        <p>Dark Mode</p>
        <div class="cl-toggle-switch">
          <label class="cl-switch">
            <input type="checkbox" />
            <span></span>
          </label>
        </div>
      </div>

      <div className='mode__div'>
        <p>Rozmiar tektu</p>
        <input type="range" name="volume" min="5" max="10" step='1' />
      </div>
    </>
  )
};
