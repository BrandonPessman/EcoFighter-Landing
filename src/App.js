import './App.css';
import ImageOne from './images/img.jpg'
import AppleButton from './images/apple-store.png'
import GoogleButton from './images/google-play.png'
import GreenImage from './images/green3.jpg'
import ImpactImage from './images/impact2.jpg'
import CommunityImage from './images/community2.jpg'
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <div className="page">
      <ul>
        <li><a href="default.asp" style={{fontSize: '24px', fontWeight: '800', color: '#3c077d', paddingLeft: '0', position: 'relative'}}>EcoFighter<a href="aboust.asp" style={{position: 'absolute', top: -20, right: -55, color: '#61657f', padding: '5px', borderRadius: '16px', zIndex: '-1', fontSize: '11px'}}>Beta</a></a></li>
        <a href="https://mailchi.mp/957a6d7b289c/beta-signups" target="_blank"><li className="button-link" style={{float: "right", marginLeft: '15px'}}><a href="https://mailchi.mp/957a6d7b289c/beta-signups" target="_blank" style={{color: 'white'}}>Join Waiting List</a></li></a>
        <li style={{float: "right"}}><a className="special-underline"  href="contact.asp">Problem</a></li>
        <li style={{float: "right"}}><a className="special-underline" href="about.asp">Benefits</a></li>
        <li style={{float: "right"}}><a className="special-underline" href="about.asp">Features</a></li>
      </ul>
      <div className="my-container">
        <center>
         <div className="header">
            <div className="header-text">
              <h1 style={{marginBottom: '20px'}}>Sustainability made Fun</h1>
              <h2 style={{marginBottom: '20px'}}>Our Mission is to get people around the world to think about and visualize their <span style={{color: '#730df1', fontWeight: '500'}}>Sustainable Impact</span> through habit building.</h2>
              <a href="https://mailchi.mp/957a6d7b289c/beta-signups" target="_blank"><img src={AppleButton} style={{height: '50px'}} /></a>
              <a href="https://mailchi.mp/957a6d7b289c/beta-signups" target="_blank"><img src={GoogleButton} style={{height: '50px', marginLeft: '5px'}} /></a>
            </div>
            <img className="header-image" alt="Top-down view of houses with trees around them." style={{marginTop: '00px', width: '100%', borderRadius: '16px'}} src={ImageOne} />
          </div>
        </center>

        <div id="panel-features" style={{marginTop: '100px'}}>
          <center>
            <h1 style={{marginBottom: '100px', fontWeight: '500', fontSize: '54px'}}>Features</h1>
            <Row>
              <Col>
                <h1 style={{fontWeight: '500', lineHeight: '40px', marginBottom: '20px', fontSize: '24px'}}>Tracking</h1>
                <h3 style={{lineHeight: '40px'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper neque id augue condimentum molestie. Nam mauris leo, tempus vitae posuere nec, porttitor in urna. Maecenas vitae tempor arcu, sit amet malesuada orci. Quisque sed massa dui. Nulla sed massa purus. Nulla bibendum a sapien at aliquam. Sed in viverra nulla.
                </h3>
              </Col>
              <Col>
                <h1 style={{fontWeight: '500', lineHeight: '40px', marginBottom: '20px', fontSize: '24px'}}>Challenges</h1>
                <h3 style={{lineHeight: '40px'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper neque id augue condimentum molestie. Nam mauris leo, tempus vitae posuere nec, porttitor in urna. Maecenas vitae tempor arcu, sit amet malesuada orci. Quisque sed massa dui. Nulla sed massa purus. Nulla bibendum a sapien at aliquam. Sed in viverra nulla.
                </h3>
              </Col>
              <Col>
                <h1 style={{fontWeight: '500', lineHeight: '40px', marginBottom: '20px', fontSize: '24px'}}>Visualization</h1>
                <h3 style={{lineHeight: '40px'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper neque id augue condimentum molestie. Nam mauris leo, tempus vitae posuere nec, porttitor in urna. Maecenas vitae tempor arcu, sit amet malesuada orci. Quisque sed massa dui. Nulla sed massa purus. Nulla bibendum a sapien at aliquam. Sed in viverra nulla.
                </h3>
              </Col>
            </Row>
          </center>
        </div>

        <div id="panel-benefits" style={{marginTop: '100px'}}>
          <center><h1 style={{marginBottom: '100px', fontWeight: '500', fontSize: '54px'}}>Benefits</h1></center>
          <Row style={{marginBottom: '200px'}}>
            <Col style={{position: 'relative'}}>
            <div style={{margin: '0', position: 'absolute', top: '50%', msTransform: 'translateY(-50%)', transform: 'translateY(-50%)'}}>
              <h1 style={{fontWeight: '500', lineHeight: '40px', marginBottom: '20px', fontSize: '24px', paddingRight: '80px'}}>Greener Society</h1>
              <h3 style={{lineHeight: '40px', paddingRight: '80px'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper neque id augue condimentum molestie. Nam mauris leo, tempus vitae posuere nec, porttitor in urna. Maecenas vitae tempor arcu, sit amet malesuada orci. Quisque sed massa dui. Nulla sed massa purus. Nulla bibendum a sapien at aliquam. Sed in viverra nulla.
              </h3>
            </div>
            </Col>
            <Col>
              <img src={GreenImage} style={{width: '100%', borderRadius: '16px'}} />
            </Col>
          </Row>
          <Row style={{marginBottom: '200px'}}>
            <Col>
              <img src={ImpactImage} style={{width: '100%', borderRadius: '16px'}} />
            </Col>
            <Col style={{position: 'relative'}}>
            <div style={{margin: '0', position: 'absolute', top: '50%', msTransform: 'translateY(-50%)', transform: 'translateY(-50%)'}}>
              <h1 style={{fontWeight: '500', lineHeight: '40px', marginBottom: '20px', fontSize: '24px', paddingLeft: '80px'}}>Knowing your Impact</h1>
              <h3 style={{lineHeight: '40px', paddingLeft: '80px'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper neque id augue condimentum molestie. Nam mauris leo, tempus vitae posuere nec, porttitor in urna. Maecenas vitae tempor arcu, sit amet malesuada orci. Quisque sed massa dui. Nulla sed massa purus. Nulla bibendum a sapien at aliquam. Sed in viverra nulla.
              </h3>
            </div>
            </Col>
          </Row>
          <Row style={{marginBottom: '200px'}}>
            <Col style={{position: 'relative'}}>
            <div style={{margin: '0', position: 'absolute', top: '50%', msTransform: 'translateY(-50%)', transform: 'translateY(-50%)'}}>
              <h1 style={{fontWeight: '500', lineHeight: '40px', marginBottom: '20px', fontSize: '24px', paddingRight: '80px'}}>Community Building</h1>
              <h3 style={{lineHeight: '40px', paddingRight: '80px'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper neque id augue condimentum molestie. Nam mauris leo, tempus vitae posuere nec, porttitor in urna. Maecenas vitae tempor arcu, sit amet malesuada orci. Quisque sed massa dui. Nulla sed massa purus. Nulla bibendum a sapien at aliquam. Sed in viverra nulla.
              </h3>
            </div>
            </Col>
            <Col>
              <img src={CommunityImage} style={{width: '100%', borderRadius: '16px'}} />
            </Col>
          </Row>
        </div>
      </div>
      <center>
      <div style={{width: '100%', backgroundColor: '#3c077d', height: '400px', position: 'relative', margin: 'auto'}}>
    
        <div style={{margin: '0', position: 'absolute', top: '50%', msTransform: 'translate(-50%, -50%)', transform: 'translate(-50%, -50%)', left: '50%', marginRight: '-50%'}}>
          
            <h1 style={{color: 'white'}}>Interested in downloading our app?</h1>
            <br />
            <br />
            <a className="button-link" href="https://mailchi.mp/957a6d7b289c/beta-signups" target="_blank" style={{color: 'white', padding: '30px 50px', marginTop: '40px', position: 'relative', fontSize: '22px', fontWeight: '500'}}>Join Waiting List</a>
         
        </div>
     
      </div>
      </center>
    </div>
  );
}

export default App;
