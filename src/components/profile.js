import React from 'react';
import { Container, Jumbotron,Col,Row } from 'react-bootstrap';
import logo from '../images/sinan_cengiz.jpg';
import multi_image_1 from '../images/multi_image_1.png';

function Profile() {
  return (
    <div >
      <Jumbotron>  
          <Col lg={12} id="top_header">
          <Container id="logo_photo">
              <img src={logo} alt="Logo" />
            </Container>
              <h1>Full Stack Web Developer</h1>
              <p>I design and code beautifully simple things, and I love what I do. </p>

          </Col>
        </Jumbotron>
         
         <Container >
            <Row>
            <Col md={12}>

            </Col>
            <Col md={12}>
            <div id="profile_second_row">
              <h1>Hi, I’m Sinan. Nice to meet you.</h1>
              <p> Sinan is an ambitious Web Developer, and who would like to travel and join a team of like-minded developers. A good experienced and creative web developer with more than a year work experience in a variety of exciting projects. Technically competent and industry aware means that each project is undertaken with the most up-to-date and relevant programming foundations available. A strong communicator with the ability to convey ideas clearly with an emphasis on client satisfaction.</p>
            </div>
            </Col>
            <Col md={12}>

            </Col>
            </Row>
          </Container>
        <Jumbotron> 
          <Col lg={12} id="third_row_with_image">
              <img src={multi_image_1} alt="Logo" />
          </Col>
        </Jumbotron>
        
    </div>
  );
}

export default Profile;