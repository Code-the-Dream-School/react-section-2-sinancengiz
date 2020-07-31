import React from 'react';
import {
  Route
} from "react-router-dom";

import Education from './about/education';
import Experience from './about/experience';
import Online_Courses from './about/online_courses';

function About() {
  return (
    <div >
          <Route path="/about/experience" component={Experience} />
          <Route path="/about/education" component={Education} />
          <Route path="/about/online_courses" component={Online_Courses} />
          <Route path="#"/>
    </div>
  );
}

export default About;