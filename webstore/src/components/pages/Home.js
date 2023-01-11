import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Slider from '../inc/Slider'

function Home () {
  return (
    <div>
      <Slider />
    
      <Container fluid>
        <Row className="homepage_row">
        <Col>
            <h1 className="sign_up_slogan"><span className="sign_up_disc"><a href="/register">Sign up</a></span> and get 10% discount for your next purchase!</h1>
        </Col>
        </Row>
        </Container>
      </div>
   
  );
  }

export default Home;