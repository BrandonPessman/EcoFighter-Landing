import './App.css';
import ImageOne from './images/img.png'
// import AppleButton from './images/apple-store.png'
// import GoogleButton from './images/google-play.png'
import GreenImage from './images/green3.jpg'
import ImpactImage from './images/impact2.jpg'
import CommunityImage from './images/community2.jpg'
import { Row, Col } from 'reactstrap';

function App() {
  return (
    <div className="page" role="main">
      <ul>
        <li><a href="/" style={{marginLeft: 0, fontSize: '24px', fontWeight: '800', color: '#3c077d', paddingLeft: '0', position: 'relative'}}>EcoFighter<a href="/" style={{position: 'absolute', top: -12, right: -51, color: '#61657f', padding: '5px', borderRadius: '16px', zIndex: '-1', fontSize: '11px'}}>.app</a></a></li>
        <a href="https://mailchi.mp/957a6d7b289c/beta-signups" target="_blank" rel="noreferrer"><li className="button-link" style={{float: "right", marginLeft: '15px'}}><a href="https://mailchi.mp/957a6d7b289c/beta-signups" target="_blank" rel="noreferrer" style={{color: 'white'}}>Join the Waitlist</a></li></a>
        <li style={{float: "right"}}><a className="special-underline" href="#panel-benefits">Benefits</a></li>
        <li style={{float: "right"}}><a className="special-underline" href="#panel-features">Features</a></li>
      </ul>
      <div className="my-container">
        <center>
         <div className="header">
         <div className="header-text">
              <h1 style={{marginBottom: '20px'}}>Sustainability made Fun</h1>
              <h2 style={{marginBottom: '20px', color: 'black'}}>Our Mission is to get people around the world to think about and visualize their Sustainable Impact through habit building.</h2>
              {/* <a href="https://mailchi.mp/957a6d7b289c/beta-signups" target="_blank"><img src={AppleButton} style={{height: '50px'}} /></a>
              <a href="https://mailchi.mp/957a6d7b289c/beta-signups" target="_blank"><img src={GoogleButton} style={{height: '50px', marginLeft: '5px'}} /></a> */}
            </div>
            <img className="header-image" alt="Top-down view of houses with trees around them." style={{marginTop: '00px', width: '100%', borderRadius: '16px'}} src={ImageOne} />
          
          </div>
          <div className="mobile-header">
            <h1 style={{marginBottom: '20px', fontSize: '24px'}}>Sustainability made Fun</h1>
            <h3 style={{marginBottom: '20px', color: 'black'}}>Our Mission is to get people around the world to think about and visualize their Sustainable Impact through habit building.</h3>
            <img alt="Top-down view of houses with trees around them." style={{marginTop: '10px', width: '100%', borderRadius: '16px'}} src={ImageOne} />
          </div>
        </center>

        <div id="panel-features" style={{marginTop: '100px'}}>
          <center>
            <h1 style={{marginBottom: '100px', fontWeight: '500', fontSize: '54px'}}>Features</h1>
            <Row style={{marginBottom: '100px'}}>
              <Col>
                <h1 style={{fontWeight: '500', lineHeight: '40px', marginBottom: '20px', fontSize: '24px', textDecoration: 'underline', textDecorationColor: '#730df1', textDecorationThickness: '3px'}}>Tracking</h1>
                <h3 style={{lineHeight: '40px'}}>
                  Know your growth with the built-in graph and analysis features. In order to encourage good habit making, we also offer a range of motivators such as goals, achievements, and tips on building good habits.  
                </h3>
              </Col>
              <Col>
                <h1 style={{fontWeight: '500', lineHeight: '40px', marginBottom: '20px', fontSize: '24px', textDecoration: 'underline', textDecorationColor: '#730df1', textDecorationThickness: '3px'}}>Competitions</h1>
                <h3 style={{lineHeight: '40px'}}>
                  Companies and ordinary people, can create challenges that focus on a single habit you want to work towards. If you want to compete with friends or with those in your area, there’s plenty of competition to go around.  
                </h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <h1 style={{fontWeight: '500', lineHeight: '40px', marginBottom: '20px', fontSize: '24px', textDecoration: 'underline', textDecorationColor: '#730df1', textDecorationThickness: '3px'}}>Visuals</h1>
                <h3 style={{lineHeight: '40px'}}>
                  What is your impact? Being able to see your growth and visualize your impact is what we are about. This is the core of the app. You will even get to see the impact of those you invited, visualizing your exponential impact.  
                </h3>
              </Col>
              <Col>
                <h1 style={{fontWeight: '500', lineHeight: '40px', marginBottom: '20px', fontSize: '24px', textDecoration: 'underline', textDecorationColor: '#730df1', textDecorationThickness: '3px'}}>Rewards</h1>
                <h3 style={{lineHeight: '40px'}}>
                By competing and keeping up your good work, you can earn fighter coins. These coins can be used for charities, planting trees, carbon offsets, and in our in-app store which offers different cosmetics and rewards.  
                </h3>
              </Col>
            </Row>
          </center>
        </div>

        <div className="mobile-features">
        <center>
            <h1 style={{marginBottom: '20px', marginTop: '60px', fontWeight: '500', fontSize: '54px'}}>Features</h1>
            <Row style={{marginBottom: '20px'}}>
              <Col xs="auto">
                <h1 style={{fontWeight: '500', lineHeight: '40px', marginBottom: '20px', fontSize: '24px', textDecoration: 'underline', textDecorationColor: '#730df1', textDecorationThickness: '3px'}}>Tracking</h1>
                <h3 style={{lineHeight: '40px', marginBottom: '20px'}}>
                  Know your growth with the built-in graph and analysis features. In order to encourage good habit making, we also offer a range of motivators such as goals, achievements, and tips on building good habits.  
                </h3>
              </Col>
              <Col xs="auto">
                <h1 style={{fontWeight: '500', lineHeight: '40px', marginBottom: '20px', fontSize: '24px', textDecoration: 'underline', textDecorationColor: '#730df1', textDecorationThickness: '3px'}}>Competitions</h1>
                <h3 style={{lineHeight: '40px'}}>
                  Companies and ordinary people, can create challenges that focus on a single habit you want to work towards. If you want to compete with friends or with those in your area, there’s plenty of competition to go around.  
                </h3>
              </Col>
            </Row>
            <Row>
              <Col xs="auto">
                <h1 style={{fontWeight: '500', lineHeight: '40px', marginBottom: '20px', fontSize: '24px', textDecoration: 'underline', textDecorationColor: '#730df1', textDecorationThickness: '3px'}}>Visuals</h1>
                <h3 style={{lineHeight: '40px', marginBottom: '20px'}}>
                  What is your impact? Being able to see your growth and visualize your impact is what we are about. This is the core of the app. You will even get to see the impact of those you invited, visualizing your exponential impact.  
                </h3>
              </Col>
              <Col xs="auto">
                <h1 style={{fontWeight: '500', lineHeight: '40px', marginBottom: '20px', fontSize: '24px', textDecoration: 'underline', textDecorationColor: '#730df1', textDecorationThickness: '3px'}}>Rewards</h1>
                <h3 style={{lineHeight: '40px'}}>
                By competing and keeping up your good work, you can earn fighter coins. These coins can be used for charities, planting trees, carbon offsets, and in our in-app store which offers different cosmetics and rewards.  
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
              <h1 style={{fontWeight: '500', lineHeight: '40px', marginBottom: '20px', fontSize: '24px', paddingRight: '80px', textDecoration: 'underline', textDecorationColor: '#730df1', textDecorationThickness: '3px'}}>Greener Society</h1>
              <h3 style={{lineHeight: '40px', paddingRight: '80px'}}>
              Creating habits that are more sustainable inherently contribute to a greener society, which is the ultimate goal of EcoFighter. We want to build something that has a big impact and a lasting effect on everyone who uses it. Being green is the core of EcoFighter.  
              </h3>
            </div>
            </Col>
            <Col>
              <img src={GreenImage} style={{width: '100%', borderRadius: '16px'}} alt="woman with a bike on the street in front of the ocean" />
            </Col>
          </Row>
          <Row style={{marginBottom: '200px'}}>
            <Col>
              <img src={ImpactImage} style={{width: '100%', borderRadius: '16px'}} alt="woman posing on a mountain with hands in the air, looking into the distance" />
            </Col>
            <Col style={{position: 'relative'}}>
            <div style={{margin: '0', position: 'absolute', top: '50%', msTransform: 'translateY(-50%)', transform: 'translateY(-50%)'}}>
              <h1 style={{fontWeight: '500', lineHeight: '40px', marginBottom: '20px', fontSize: '24px', paddingLeft: '80px', textDecoration: 'underline', textDecorationColor: '#730df1', textDecorationThickness: '3px'}}>Knowing your Impact</h1>
              <h3 style={{lineHeight: '40px', paddingLeft: '80px'}}>
                We believe in visualizing your impact. By building a habit and tracking it, we are able to visualize your growth and ultimately visualize your impact. This is a great benefit because it can push you through roadblocks and keep you going.
              </h3>
            </div>
            </Col>
          </Row>
          <Row style={{marginBottom: '200px'}}>
            <Col style={{position: 'relative'}}>
            <div style={{margin: '0', position: 'absolute', top: '50%', msTransform: 'translateY(-50%)', transform: 'translateY(-50%)'}}>
              <h1 style={{fontWeight: '500', lineHeight: '40px', marginBottom: '20px', fontSize: '24px', paddingRight: '80px', textDecoration: 'underline', textDecorationColor: '#730df1', textDecorationThickness: '3px'}}>Community Building</h1>
              <h3 style={{lineHeight: '40px', paddingRight: '80px'}}>
              Workplaces, classrooms, friends, and family can all form communities within the app. Not only that, but you can join public communities and have the chance to form new connections with people who are also interested in being green.   
              </h3>
            </div>
            </Col>
            <Col>
              <img src={CommunityImage} style={{width: '100%', borderRadius: '16px'}} alt="a woman and a man relaxing with their dog and coffee outside" />
            </Col>
          </Row>
        </div>

        <div className="mobile-benefits" style={{padding: '10px'}}>
          <center><h1 style={{marginBottom: '20px', marginTop: '50px', fontWeight: '500', fontSize: '54px'}}>Benefits</h1></center>
          <Row style={{marginBottom: '20px'}}>
            <Col xs="auto" style={{position: 'relative'}}>
              <h1 style={{fontWeight: '500', lineHeight: '40px', marginBottom: '20px', fontSize: '24px', textDecoration: 'underline', textDecorationColor: '#730df1', textDecorationThickness: '3px'}}>Greener Society</h1>
              <img src={GreenImage} style={{width: '100%', borderRadius: '16px', marginBottom: '10px'}} alt="woman with a bike on the street in front of the ocean" />
            </Col>
            <Col xs="auto">
              <h3 style={{lineHeight: '40px'}}>
                Creating habits that are more sustainable inherently contribute to a greener society, which is the ultimate goal of EcoFighter. We want to build something that has a big impact and a lasting effect on everyone who uses it. Being green is the core of EcoFighter.  
              </h3>
            </Col>
          </Row>
          <Row style={{marginBottom: '20px'}}>
            <Col xs="auto" style={{position: 'relative'}}>
              <h1 style={{fontWeight: '500', lineHeight: '40px', marginBottom: '20px', fontSize: '24px', textDecoration: 'underline', textDecorationColor: '#730df1', textDecorationThickness: '3px'}}>Knowing your Impact</h1>
              <img src={ImpactImage} style={{width: '100%', borderRadius: '16px', marginBottom: '10px'}} alt="woman posing on a mountain with hands in the air, looking into the distance" />
            </Col>
            <Col xs="auto">
              <h3 style={{lineHeight: '40px'}}>
                We believe in visualizing your impact. By building a habit and tracking it EcoFighter, we are able to visualize your growth and ultimately visualize your impact. This is a great benefit because it can push you through roadblocks and keep you going.
              </h3>
            </Col>
          </Row>
          <Row style={{marginBottom: '20px'}}>
            <Col xs="auto" style={{position: 'relative'}}>
              <h1 style={{fontWeight: '500', lineHeight: '40px', marginBottom: '20px', fontSize: '24px', textDecoration: 'underline', textDecorationColor: '#730df1', textDecorationThickness: '3px'}}>Community Building</h1>
              <img src={CommunityImage} style={{width: '100%', borderRadius: '16px', marginBottom: '10px'}} alt="a woman and a man relaxing with their dog and coffee outside" />
            </Col>
            <Col xs="auto">
              <h3 style={{lineHeight: '40px'}}>
                Workplaces, classrooms, friends, and family can all form communities within the app. Not only that, but you can join public communities and have the chance to form new connections with people who are also interested in being green.   
              </h3>
            </Col>
          </Row>
        </div>
      </div>
      <center>
      <div style={{width: '100%', backgroundColor: '#3c077d', height: '400px', position: 'relative', margin: 'auto'}}>
        <div style={{margin: '0', position: 'absolute', top: '50%', msTransform: 'translate(-50%, -50%)', transform: 'translate(-50%, -50%)', left: '50%', marginRight: '-50%', padding: '10px'}}>
            <h1 style={{color: 'white'}}>Interested in downloading our app?</h1>
            <br />
            <br />
            <a className="button-link" href="https://mailchi.mp/957a6d7b289c/beta-signups" target="_blank" rel="noreferrer" style={{color: 'white', padding: '30px 50px', marginTop: '40px', position: 'relative', fontSize: '22px', fontWeight: '500'}}>Join the Waitlist</a>
        </div>
      </div>
      </center>
    </div>
  );
}

export default App;
