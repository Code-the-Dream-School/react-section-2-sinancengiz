import React, { useState, useEffect } from 'react';
import { Container,Jumbotron,Col,Row } from 'react-bootstrap';
var Airtable = require('airtable');

function Online_Courses() {

  const [online_courses_data, setOnline_Courses] = useState([]);

    // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
  let tempOnline_Courses = [];
  var base = new Airtable({apiKey: 'key1bnAovRtUxG5JH'}).base('appUxngQGQZRUx6rR');

  base('online_courses').select({
    view: 'Grid view'
  }).firstPage(function(err, records) {
    if (err) { console.error(err); return; }
    records.forEach(function(record) {
      var dummy_dict = {
        name:record.get('Name'),
        institude: record.get('institude'),
        date: record.get('date'),
      }
      tempOnline_Courses.push(dummy_dict)
    });
    setOnline_Courses(tempOnline_Courses);
  });
  },[] );

  var online_courses = []

  for (var i=0; i < online_courses_data.length; i++) {
    online_courses.push(
      <Col md={12}>
      <Container className="education_item">
        <Row>
        <Col md={12}>
        <h2>{online_courses_data.length > 0 ? online_courses_data[i].name: null}</h2>
        </Col>
        <Col md={12}>
        <p>{online_courses_data.length > 0 ? online_courses_data[i].institude: null}</p>
        </Col>
        <Col md={12}>
        <p> {online_courses_data.length > 0 ? online_courses_data[i].date: null}</p>
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
            <h1>Personal Development/Online Courses </h1>
            <p>Sinan loves learning new stuff and he is learning none stop and values education </p>
        </Col>
      </Jumbotron>
      {online_courses}
    </div>
  );
}

export default Online_Courses;