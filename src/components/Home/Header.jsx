

import React from 'react';
import { Container, Row } from 'react-bootstrap';



const Header = () => {
    return (
        <Container fluid >
           
           <div id="landing-video" >
            <div className='vid'> 
            <video loop autoPlay muted>
          <source src="https://tbwa.com/img/slash_loop/attractor.mp4" type="video/mp4" />
          </video>
          </div>   
          </div>
          <Row>
            <div id="title">
            <h1>“We Are The Disruption</h1>
            <h3> Company “</h3>
            </div>
          </Row>
        

        </Container>
    )
}
export default Header;