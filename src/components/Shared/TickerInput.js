import React from 'react'
import { Form, Button, Container } from 'react-bootstrap'

const TickerInput = ({ company, handleSubmit, handleChange }) => {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlid="ticker">
          <Form.Label>Type in ticker</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ticker"
            name="ticker"
            onChange={handleChange}
            value={company}
            required
          />
        </Form.Group>
        <Button varian="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  )
}
export default TickerInput
