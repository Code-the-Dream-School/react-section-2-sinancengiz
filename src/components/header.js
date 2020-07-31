import React from 'react';
import { Navbar, Nav, Form, DropdownButton,Dropdown} from 'react-bootstrap';
import Pdf from '../documents/Sinan_Cengiz_Resume.pdf';

function Header() {
  return (
    <div id="header">
        <Navbar  bg="white" >
            <Navbar.Brand href="/">Sinan Cengiz</Navbar.Brand>
            <Nav className="mr-auto">
            </Nav>
            <Form inline>
            <Nav className="mr-auto">
            <Nav.Link href="/">Profile</Nav.Link>
            <Nav.Link href="/project">Projects</Nav.Link>
            <DropdownButton id="dropdown-variants-Secondary" title="About" drop="left">
              <Dropdown.Item href="/about/online_courses">Personal Development</Dropdown.Item>
              <Dropdown.Item href="/about/experience">Experience</Dropdown.Item>
              <Dropdown.Item href="/about/education">Education</Dropdown.Item>
              <Dropdown.Item href = {Pdf} target="_blank">View Resume</Dropdown.Item>
            </DropdownButton>
            <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            </Form>
        </Navbar>


    </div>
  );
}

export default Header;