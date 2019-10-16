import React from 'react'
import { Container, Row } from 'react-bootstrap'
import PriceChecker from '../Orders/PriceChecker'

const OrderBar = ({ user }) => (
  <Container>
    <Row>
      <PriceChecker
      />
    </Row>
    <Row>
      <p>Input field</p>
      <p>Buy</p>
      <p>Sell</p>
    </Row>
  </Container>
)

export default OrderBar
