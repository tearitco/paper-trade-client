import React from 'react'
import { Form } from 'react-bootstrap'

const AccountInfo = ({ user, alerts, portfolioid }) => (
  <Form.Group controlid="portfolio">
    <Form.Label>Portfolio</Form.Label>
    <Form.Control
      type="text"
      placeholder="What Account?"
      name="portfolio"
      value={portfolioid}
      required
    />
  </Form.Group>
)

export default AccountInfo
