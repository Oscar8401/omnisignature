import React from 'react';
import {
  Row,
  Col
} from 'react-bootstrap';


const Header = (state) => (
  <Row>
    <Col>
    <h1 className={ 'text-center' }>DotLink</h1>
    </Col>
    <Col>
    <h2 className={ 'text-center' }>Email Signature Creator</h2>
    </Col>
    <Col>
    <h4 className={ 'text-center' }>Enter your details and we will create your signature</h4>
    </Col>
  </Row>
);


export default Header;
