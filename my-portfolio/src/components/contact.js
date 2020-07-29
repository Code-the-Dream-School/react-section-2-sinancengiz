import React from 'react';
import { Container, Form, Button,Col,Row} from 'react-bootstrap';

function Contact() {
  return (
    <div id="contact_main_div">
      <Container>
        <br></br>
        <h1>I’m excited to learn about your project.</h1>
        <h1>Ready to get started?</h1>
        <br></br>
      </Container>

    <Row>
      <Col md="2">

      </Col>

      <Col md="8">
      <Form id="contact_form">
        <Form.Group controlId="first_name_last_name">
          <Form.Row>
            <Col>
              <Form.Control placeholder="First name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last name" />
            </Col>
          </Form.Row>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="first_name_last_name">
          
          <Form.Row>
            <Col>
            <Form.Control size="sm" as="select">
              <option>Choose Project Type</option>
              <option>Responsive</option>
              <option>Web App</option>
              <option>Mobile App</option>
            </Form.Control>
            </Col>
            <Col>
            <Form.Control size="sm" as="select">
              <option>Choose Your Budget</option>
              <option>$5000 - $10000</option>
              <option>$10000 - $25000</option>
              <option>$25000+</option>
            </Form.Control>
            </Col>
          </Form.Row>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control as="textarea" rows="3" placeholder="Write About Your Project" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
      </Form>
      </Col>

      <Col md="2">

      </Col>
    </Row>
 
    </div>
  );
}

export default Contact;