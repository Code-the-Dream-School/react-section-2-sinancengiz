import React, { useState, useEffect } from 'react';
import { Container,Col, Row, Jumbotron } from 'react-bootstrap';
import Airtable from 'airtable'

function Project(props) {

  const [projects_data, setProjects] = useState([]);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    let tempProjects = [];
    var base = new Airtable({apiKey: 'key1bnAovRtUxG5JH'}).base('appUxngQGQZRUx6rR');

    base('projects').select({
      view: 'Grid view'
    }).firstPage(function(err, records) {
      if (err) { console.error(err); return; }
      records.forEach(function(record) {
        var dummy_dict = {
          name:record.get('Name'),
          description: record.get('description'),
          link: record.get('link'),
          image: record.get('image')
        }
        tempProjects.push(dummy_dict)
      });
      setProjects(tempProjects);
    });
  },[] );

  var projects = []

  for (var i=0; i < projects_data.length; i++) {
    projects.push(
      <Col md={6} key={10 * i}>
        <a href={projects_data.length > 0 ? projects_data[i].link: null} className="active" target="blank">        
 
          <Container className="projects_container">
            <Row>

           <Col lg={5} key={i.toString()}>
            <Container>
              <img className="project_image" src={projects_data.length > 0 ? projects_data[i].image[0].url: null} alt="Girl in a jacket"></img>
            </Container>  
            </Col>
            <Col lg={7} key={i.toString()}>
                <h1>{projects_data.length > 0 ? projects_data[i].name: null}</h1>
                <p>{projects_data.length > 0 ? projects_data[i].description: null}</p>
            </Col>
            </Row>
          </Container>

        </a>
    </Col>
    )
    }

  return (
    <div >
      <Jumbotron>  
        <Col lg={12} id="top_header">
            <h1>Take a Look at My Projects</h1>
            <p>I design and code beautifully simple things, and I love what I do. </p>
            
        </Col>
      </Jumbotron>
      <Row>
        {projects}
      </Row>
      
    </div>
  );
}

export default Project;