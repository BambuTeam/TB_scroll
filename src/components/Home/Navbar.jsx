

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';



const Navbar = () => {
    return (
        <Container fluid >
            <Row>
            <Col>   
            <div className='navbar_l'>
                <h1>LOGO</h1>
            </div>
            </Col> 
            <Col>
           <div id='navbar_r'>
           </div>
           </Col>
           </Row>
        </Container>
    )
}
export default Navbar;