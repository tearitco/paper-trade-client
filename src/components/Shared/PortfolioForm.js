import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'

const PortfolioForm = ({ alert, portfolio, handleChange, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlid="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Your portfolio"
          name="name"
          onChange={handleChange}
          value={portfolio.name}
          required
        />
      </Form.Group>
      <Form.Group controlid="balance">
        <Form.Label>Balance</Form.Label>
        <Form.Control
          max="999999999"
          type="number"
          placeholder="Your balance"
          name="balance"
          onChange={handleChange}
          value={portfolio.balance}
          required
        />
      </Form.Group>
      <Button varian="primary" type="submit">Submit</Button>
    </Form>
  )
}

export default withRouter(PortfolioForm)
