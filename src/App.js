import './app.css'

function App() {
  return (
    <>
    <div className="App">
      {/* <header className="appleHeader"></header> */}
      <nav className='navBarApple'>
        <a className='navBarText'>
          <img src='../images/appleicon.png' alt='Apple Icon'/>
        </a>
        <a className='navBarText'>Store</a>
        <a className='navBarText'>Mac</a>
        <a className='navBarText'>iPad</a>
        <a className='navBarText'>iPhone</a>
        <a className='navBarText'>Watch</a>
        <a className='navBarText'>AirPods</a>
        <a className='navBarText'>TV & Home</a>
        <a className='navBarText'>Entertainment</a>
        <a className='navBarText'>Accessories</a>
        <a className='navBarText'>Support</a>
      </nav>
    </div>
      <div className='sectionBackground'>
        {/* <img src='../images/iphoneBackground.png'/> */}
        <h1 className='imageText'>
          iPhone 14 Pro
        </h1>
        <h3>
          Pro. Beyond.
        </h3>
      </div>
    </>
  );
}

export default App;
