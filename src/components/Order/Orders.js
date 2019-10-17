import React from 'react'
import { Container } from 'react-bootstrap'
import OrderForm from '../Shared/OrderForm'

const Orders = ({ user, company, price, name, balance }) => (
  <Container>
    <OrderForm
      user={user}
      company={company}
      price={price}
    />
  </Container>
)

export default Orders
