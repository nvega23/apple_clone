import './app.css'

function App() {
  return (
    <>
    <div className="App">
      {/* <header className="appleHeader"></header> */}
      <nav className='navBarApple'>
        {/* <NavLink to={"/newsFeed"}> */}
          <img src='appleicon.png' alt='Apple Icon'/>
        {/* </NavLink> */}
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
        <a className='navBarText'>search</a>
        <a className='navBarText'>cart</a>
      </nav>
    </div>
    <div className='iPhoneInfo'>
      Get $200–$630 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.1
      <a className='linksLearn' href='/shop'>
       Shop iPhone >
      </a>
    </div>
    <div className='imageText'>
          <h1>
            iPhone 14 Pro
          </h1>
          <p className='imagePrint'>
            Pro. Beyond.
          </p>
          <div className='linksImage'>
            <a href='/learn_more' className='linksLearn'>Learn More ></a>

            <a href='/learn_more' className='linksLearn'>Buy ></a>
          </div>
        </div>
      <div className='sectionBackground'>
      </div>
    </>
  );
}

export default App;
