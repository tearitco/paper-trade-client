import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from './../../apiConfig'
import { Row } from 'react-bootstrap'

const Position = ({ user, alerts, match }) => {
  const [position] = useState({ name: '', ticker: '', volume: 0, price: 0, portfolio: '' })

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/positions/${match.params.id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => console.log(res))
      .catch(console.error)
  })

  return (
    <Row>
      <p>{position.name}</p>
      <p>{position.ticker}</p>
      <p>{position.volume}</p>
      <p>{position.price}</p>
    </Row>
  )
}
export default withRouter(Position)
