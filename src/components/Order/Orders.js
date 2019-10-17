import React from 'react'
import { Container } from 'react-bootstrap'
import OrderForm from '../Shared/OrderForm'

const Orders = ({ portfolio, user, company, price, name, balance }) => (
  <Container>
    <OrderForm
      user={user}
      company={company}
      price={price}
      portfolio={portfolio}
    />
  </Container>
)

export default Orders
