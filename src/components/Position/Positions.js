import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiUrl from './../../apiConfig'
import { ListGroup, Col, Row } from 'react-bootstrap'

const Positions = ({ user, alerts }) => {
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

  const positionsJsx = positions.map(position => (
    <ListGroup.Item as="li" key={position.id}>
      <Row>
        <Col sm={12} md={3}>
          <Row>
            <p>Company:</p>
            {position.name}
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
      </Row>
    </ListGroup.Item>
  ))

  return (
    <ListGroup as="ul">
      <ul>{positionsJsx}</ul>
    </ListGroup>
  )
}
export default Positions
