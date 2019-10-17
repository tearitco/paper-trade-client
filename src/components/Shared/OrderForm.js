import React from 'react'
import { Form, Button } from 'react-bootstrap'

const OrderForm = ({ order, handleSubmit, handleChange }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlid="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Order name"
          name="name"
          onChange={handleChange}
          value={order.name}
          required
        />
      </Form.Group>
      <Form.Group controlid="ticker">
        <Form.Label>Balance</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ticker"
          name="ticker"
          onChange={handleChange}
          value={order.ticker}
          required
        />
      </Form.Group>
      <Form.Group controlid="volume">
        <Form.Label>Volume</Form.Label>
        <Form.Control
          type="text"
          placeholder="Volume"
          name="volume"
          onChange={handleChange}
          value={order.volume}
          required
        />
      </Form.Group>
      <Form.Group controlid="price">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Price"
          name="price"
          onChange={handleChange}
          value={order.price}
          required
        />
      </Form.Group>
      <Button varian="primary" type="submit">Submit</Button>
    </Form>
  )
}

export default OrderForm
