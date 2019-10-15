import React, { useState, useEffect } from 'react'
import { withRouter, Redirect, Link } from 'react-router-dom'
import apiUrl from './../../apiConfig'
import axios from 'axios'
import { Form, Button, Col, Row } from 'react-bootstrap'
import Positions from '../Position/Positions'

const Portfolio = ({ user, alerts, match }) => {
  const [portfolio, setPortfolio] = useState({ name: '', balance: 0 })
  const [deleted, setDeleted] = useState(false)
  const [addedValue, setAddedValue] = useState(0)
  const [withdraw, setWithdraw] = useState(0)

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/portfolios/${match.params.id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => setPortfolio(res.data.portfolio))
      .catch(console.error)
  }, [])

  const destroy = () => {
    axios({
      url: `${apiUrl}/portfolios/${match.params.id}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  const handleChange = event => {
    event.persist()
    setPortfolio(portfolio => ({ ...portfolio, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/portfolios/${match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: { portfolio }
    })
      .then(res => setPortfolio(res.data.portfolio))
      .catch(console.error)
  }

  const handleAddValueChange = event => {
    event.persist()
    setAddedValue(event.target.value)
  }
  const handleWithdrawChange = event => {
    event.persist()
    setWithdraw(event.target.value)
  }
  const handleAddValueSubmit = event => {
    event.preventDefault()
    portfolio.balance = portfolio.balance + parseInt(addedValue)
    axios({
      url: `${apiUrl}/portfolios/${match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: { portfolio }
    })
      .then(res => setPortfolio(res.data.portfolio))
      .catch(console.error)
  }

  const handleWithdrawSubmit = event => {
    event.preventDefault()
    portfolio.balance = portfolio.balance - parseInt(withdraw)
    axios({
      url: `${apiUrl}/portfolios/${match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: { portfolio }
    })
      .then(res => setPortfolio(res.data.portfolio))
      .catch(console.error)
  }

  if (deleted) {
    return <Redirect to={
      { pathname: '/main' }
    } />
  }

  return (
    <div>
      <Link to={'/main'}>
        <Button>Back</Button>
      </Link>
      <header>
        <p>Account Details</p>
      </header>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} controlid="name">
            <Form.Label column sm={2}>
              Account Name:
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="text"
                placeholder="Your portfolio"
                name="name"
                onChange={handleChange}
                value={portfolio.name}
                required
              />
            </Col>
            <Button variant="primary" type="submit" column sm={2}>Update</Button>
          </Form.Group>
        </Form>

        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm={2}>
        Total balance:
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                placeholder={portfolio.balance}
                required
              />
            </Col>
          </Form.Group>
        </Form>

        <Form onSubmit={handleAddValueSubmit}>
          <Form.Group as={Row} controlid="balance">
            <Form.Label column sm={2}>
         Add Value:
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="number"
                placeholder="Add Value"
                name="balance"
                value={addedValue}
                onChange={handleAddValueChange}
                required />
            </Col>
            <Button variant="primary" type="submit">Add Value</Button>
          </Form.Group>
        </Form>

        <Form onSubmit={handleWithdrawSubmit}>
          <Form.Group as={Row} controlid="balance">
            <Form.Label column sm={2}>
         Witdraw money:
            </Form.Label>
            <Col sm={8}>
              <Form.Control
                type="number"
                placeholder="Add Value"
                name="balance"
                value={withdraw}
                onChange={handleWithdrawChange}
                required />
            </Col>
            <Button variant="primary" type="submit">Withdraw</Button>
          </Form.Group>
        </Form>
        <Positions
          user={user}
          alerts={alerts}
        />
        <Button variant="danger" onClick={destroy}>Close account</Button>
      </div>
    </div>
  )
}
export default withRouter(Portfolio)
