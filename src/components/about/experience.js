import React, { useState, useEffect } from 'react';
import { Container, Jumbotron, Col, Row} from 'react-bootstrap';
import laptop_image_1 from '..//../images/laptops_blue.jpg';


var Airtable = require('airtable');

function Experience() {

const [experience_data, setExperience] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
useEffect(() => {
let tempExperience = [];
var base = new Airtable({apiKey: 'key1bnAovRtUxG5JH'}).base('appUxngQGQZRUx6rR');

base('experience').select({
  view: 'Grid view'
}).firstPage(function(err, records) {
  if (err) { console.error(err); return; }
  records.forEach(function(record) {
    var dummy_dict = {
      position:record.get('position'),
      company: record.get('company'),
      time: record.get('time'),
    }
    tempExperience.push(dummy_dict)
  });
  setExperience(tempExperience);
});
},[] );

var experience = []

for (var i=0; i < experience_data.length; i++) {
  experience.push(
    <Col md={12}>
      <Container className="education_item">
        <Row>
        <Col md={12}>
        <h2>{experience_data.length > 0 ? experience_data[i].position: null}</h2>
        </Col>
        <Col md={12}>
        <p>{experience_data.length > 0 ? experience_data[i].company: null}</p>
        </Col>
        <Col md={12}>
        <p> {experience_data.length > 0 ? experience_data[i].time: null}</p>
        </Col>
        </Row>
      </Container>
      </Col>
      )
  }



  return (
    <div id="online_course_div">
      <Jumbotron>  
        <Col lg={12} id="top_header">
            <h1>Work Experience </h1>
            <p>Sinan is a team worker and loves working in a harmony with others</p>
            
        </Col>
      </Jumbotron>
      <Row>
        {experience}
      </Row>
      

      <Jumbotron>  
        <Col lg={12} id="third_row_with_image">
            <img src={laptop_image_1} alt="Logo" />
        </Col>
      </Jumbotron>

    </div>
  );
}

export default Experience;