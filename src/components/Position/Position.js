import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './../../apiConfig'
import { ListGroup, Col, Row, Button } from 'react-bootstrap'

const Position = ({ user, alerts, match }) => {
  const [positions, setPositions] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/positions`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => setPositions(res.data.positions))
      .catch(() => {
        alert({
          heading: 'Oops',
          message: 'Something went wrong',
          variant: 'danger'
        })
      })
  })

  const positionsJsx = positions.map(position => (
    <ListGroup.Item as="li" key={position.id}>
      <Row>
        <Col sm={12} md={3}>
          <Row>
            <p>Company:</p>
            <Link to={`positions/${position.id}`}>
              {position.ticker}
            </Link>
          </Row>
        </Col>
        <Col sm={12} md={3}>
          <Row>
            <p>Ticker:</p>
            {position.ticker}
          </Row>
        </Col>
        <Col sm={12} md={3}>
          <Row>
            <p>Position size:</p>
            {position.volume}
          </Row>
        </Col>
        <Col sm={12} md={3}>
          <Row>
            <p>Share price:</p>
            {position.price}
          </Row>
        </Col>
        <Button variant="danger"
          onClick={() => {
            axios({
              method: 'DELETE',
              url: `${apiUrl}/positions/${position.id}`,
              headers: {
                'Authorization': `Token token=${user.token}`
              }
            })
              .then(() => {
                alert({
                  heading: 'Nice',
                  message: 'The position is closed',
                  variant: 'success'
                })
              })
              .catch(() => {
                alert({
                  heading: 'Oops',
                  message: 'Something went wrong',
                  variant: 'danger'
                })
              })
          }}>
        Close Position
        </Button>
      </Row>
    </ListGroup.Item>
  ))

  return (
    <div>
      <Link to={'/main'}>
        <Button>Back</Button>
      </Link>
      <header>
        <p>My Positions</p>
      </header>
      <ListGroup as="ul">
        {positionsJsx}
      </ListGroup>
    </div>
  )
}
export default Position
