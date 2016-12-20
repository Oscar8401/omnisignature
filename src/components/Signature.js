import React from 'react'
import { Row, Col } from 'react-bootstrap'

import SignatureForm from './SignatureForm'
import SignaturePreview from './SignaturePreview'

const Signature = (state) => (
  <Row>
    <Col md={6} sm={12}>
      <SignatureForm {...state} />
    </Col>
    <Col md={6} sm={12}>
      <SignaturePreview {...state} />
    </Col>
  </Row>
)

export default Signature
