import React from 'react'
import { Row, Col } from 'react-bootstrap'

const AccountInfo = ({ user, alerts, match }) => (
  <Row>
    <Col>
      <p>Account</p>
    </Col>
    <Col>
      {name}
    </Col>
    <Col>
      <p>{balance}</p>
    </Col>
  </Row>
)

export default AccountInfo
