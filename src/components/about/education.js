
import React, { useState, useEffect } from 'react';
import { Container,Col,Row,Jumbotron} from 'react-bootstrap';
import laptop_image_1 from '..//../images/laptop_red.jpg';
var Airtable = require('airtable');


function Education () {

    const [education_data, setEducation] = useState([]);

      // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    let tempEducation = [];
    var base = new Airtable({apiKey: 'key1bnAovRtUxG5JH'}).base('appUxngQGQZRUx6rR');

    base('education').select({
      view: 'Grid view'
    }).firstPage(function(err, records) {
      if (err) { console.error(err); return; }
      records.forEach(function(record) {
        var dummy_dict = {
          name:record.get('Name'),
          school: record.get('school'),
          year: record.get('year'),
        }
        tempEducation.push(dummy_dict)
      });
      setEducation(tempEducation);
    });
  },[] );


  var education = []

  for (var i=0; i < education_data.length; i++) {
    education.push(
      <Col md={12}>
      <Container className="education_item">
        <Row>
        <Col md={12}>
        <h2>{education_data.length > 0 ? education_data[i].name: null}</h2>
        </Col>
        <Col md={12}>
        <p>{education_data.length > 0 ? education_data[i].school: null}</p>
        </Col>
        <Col md={12}>
        <p> {education_data.length > 0 ? education_data[i].year: null}</p>
        </Col>
        </Row>
      </Container>
      </Col>
        )
    }

  return (
    <div id="education_div" >
      <Jumbotron>  
        <Col lg={12} id="top_header">
            <h1>Education History </h1>
            <p>Sinan loves learning new stuff and he is learning none stop and values education </p>
        </Col>
      </Jumbotron>

      <Row>
          {education}
      </Row>
        
      <Jumbotron>  
        <Col lg={12} id="third_row_with_image">
            <img src={laptop_image_1} alt="Logo" />
        </Col>
      </Jumbotron>

    </div>
  );

}

export default Education;