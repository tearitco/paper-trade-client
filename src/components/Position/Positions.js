import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiUrl from './../../apiConfig'

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
    <div key={position.id}>
      <li>{position.name}</li>
    </div>
  ))

  return (
    <div className="row">
      <ul>{positionsJsx}</ul>
    </div>
  )
}
export default Positions
