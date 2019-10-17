import React from 'react'
import { Container } from 'react-bootstrap'
import OrderForm from '../Shared/OrderForm'

const Orders = ({ portfolioid, user, company, price, name, balance }) => (
  <Container>
    <OrderForm
      user={user}
      company={company}
      price={price}
      portfolioid={portfolioid}
    />
  </Container>
)

export default Orders
