import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiUrl from './../../apiConfig'
import { Link } from 'react-router-dom'
import { ListGroup, Col, Row } from 'react-bootstrap'

const Portfolios = ({ user, alerts }) => {
  const [portfolios, setPortfolios] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/portfolios`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(responseData => setPortfolios(responseData.data.portfolios))
      .catch(console.error)
  }, [])

  const portfoliosJsx = portfolios.map(portfolio => (
    <ListGroup.Item as="li" key={portfolio.id}>
      <Row>
        <Col>
          {portfolio.name}
        </Col>
        <Col>
          {portfolio.balance}
        </Col>
        <Col>
          <Link to={`/portfolios/${portfolio.id}`}>
  Accout details
          </Link>
        </Col>
      </Row>
    </ListGroup.Item>
  ))

  return (
    <ListGroup as="ul">
      {portfoliosJsx}
    </ListGroup>
  )
}
export default Portfolios
