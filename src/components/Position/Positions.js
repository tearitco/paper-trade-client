import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import apiUrl from './../../apiConfig'
import { ListGroup, Col, Row, Button } from 'react-bootstrap'

const Positions = ({ user, alerts, match }) => {
  const [positions, setPositions] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/positions`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(responseData => setPositions(responseData.data.positions))
      .catch(console.error)
  }, [])

  const rerender = () => {
    axios({
      method: 'GET',
      url: `${apiUrl}/positions`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(responseData => setPositions(responseData.data.positions))
      .catch(console.error)
  }

  const positionsJsx = positions.map(position => (
    <ListGroup.Item as="li" key={position.id}>
      <Row>
        <Col sm={12} md={3}>
          <Row>
            <p>Company:</p>
            <Link to={`positions/${position.id}`}>
              {position.name}
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
              .then(res => {
                if (res) {
                  rerender()
                }
              })
              .catch(console.error)
          }}>
        Close Position
        </Button>
      </Row>
    </ListGroup.Item>
  ))

  return (
    <ListGroup as="ul">
      {positionsJsx}
    </ListGroup>
  )
}
export default withRouter(Positions)
