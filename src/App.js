import './App.css';
import ImageOne from './images/img7.png'

function App() {
  return (
    <div className="page">
      <ul>
        <li><a href="default.asp" style={{fontSize: '24px', fontWeight: '800', color: '#3c077d', paddingLeft: '0', position: 'relative'}}>EcoFighter<a href="aboust.asp" style={{position: 'absolute', top: -20, right: -55, color: '#61657f', padding: '5px', borderRadius: '16px', zIndex: '-1', fontSize: '11px'}}>Beta</a></a></li>
        <a href="https://mailchi.mp/957a6d7b289c/beta-signups"><li className="button-link" style={{float: "right", marginLeft: '15px'}}><a href="https://mailchi.mp/957a6d7b289c/beta-signups" style={{color: 'white'}}>Beta Signup</a></li></a>
        <li style={{float: "right"}}><a className="special-underline"  href="contact.asp">How it Works</a></li>
        <li style={{float: "right"}}><a className="special-underline" href="about.asp">Why EcoFighter?</a></li>
        <li style={{float: "right"}}><a className="special-underline" href="about.asp">About</a></li>
      </ul>
      <div className="container">
        <center>
         <div className="header">
            <div className="header-text">
              <h1>Sustainability made Fun</h1>
              <h2>Our Mission is to get people around the world to think about</h2>
              <h2>and visualize their <span style={{color: '#b884f8', fontWeight: '500'}}>Sustainable Impact</span>.</h2>
            </div>
            <img className="header-image" alt="Top-down view of houses with trees around them." style={{marginTop: '00px', width: '100%', borderRadius: '16px'}} src={ImageOne} />
          </div>
          
        </center>
      </div>
    </div>
  );
}

export default App;
