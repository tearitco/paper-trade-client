import React from 'react'
import { Form, Button, Container, Col, Row } from 'react-bootstrap'

const TickerInput = ({ alert, user, company, handleSubmit, handleChange }) => {
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} controlid="ticker">
          <Col>
            <Form.Control
              type="text"
              placeholder="Ticker"
              name="ticker"
              onChange={handleChange}
              value={company}
              required
            />
          </Col>
          <Button varian="primary" type="submit">Submit</Button>
        </Form.Group>
      </Form>
    </Container>
  )
}
export default TickerInput
