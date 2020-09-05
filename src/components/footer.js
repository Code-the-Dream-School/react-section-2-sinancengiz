import React from 'react';
import { Row,Col} from 'react-bootstrap';

function Footer() {
  return (
    <div id="footer">
      <Row>
        <Col>
        <div className="socials">
          <a href="https://github.com/sinancengiz" className="fa fa-github" target="blank"></a>
          <a href="https://www.linkedin.com/in/sinan-cengiz/" class="fa fa-linkedin" target="blank"></a>
          <a href="https://www.facebook.com/sinan.cengiz.796" className="fa fa-facebook" target="blank"></a>
          <a href="https://twitter.com/sinancengiz1" className="fa fa-twitter" target="blank"></a>
        </div>
        </Col>
      </Row>

    </div>
  );
}

export default Footer;