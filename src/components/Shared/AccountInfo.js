import React from 'react'
import { Form } from 'react-bootstrap'

const AccountInfo = ({ user, alerts, portfolio }) => (
  <Form.Group controlid="portfolio">
    <Form.Label>Portfolio</Form.Label>
    <Form.Control
      type="text"
      placeholder="What Account?"
      name="portfolio"
      value={'portfolio.id'}
      required
    />
  </Form.Group>
)

export default AccountInfo
