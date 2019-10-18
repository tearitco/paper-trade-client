import React from 'react'
import { Container } from 'react-bootstrap'
import OrderForm from '../Shared/OrderForm'

const Orders = ({ alert, company, portfolio, price, user }) => (
  <Container>
    <OrderForm
      alert={alert}
      company={company}
      portfolio={portfolio}
      price={price}
      user={user}
    />
  </Container>
)

export default Orders
