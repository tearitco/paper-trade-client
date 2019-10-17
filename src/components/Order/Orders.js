import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const Orders = ({ name, balance }) => (
  <Container>
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
    <Row>
      <Col>
        <p>Ticker</p>
      </Col>
      <Col>
        <p>Price</p>
      </Col>
      <Col>
        <p>Volume</p>
      </Col>
      <Button variant="success">Buy</Button>
      <Button variant="danger">Sell</Button>
    </Row>
  </Container>
)

export default Orders
