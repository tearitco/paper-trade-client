import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiUrl from './../../apiConfig'
import { Link } from 'react-router-dom'
import Positions from '../Position/Positions'

const Portfolios = ({ user, alerts }) => {
  const [portfolios, setPortfolios] = useState([])
  const [hasPositions, setHasPositions] = useState(null)

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

  const show = () => {
    console.log(hasPositions)
    hasPositions ? setHasPositions(false) : setHasPositions(true)
    console.log(hasPositions)
  }

  const portfoliosJsx = portfolios.map(portfolio => (
    <div className="row" key={portfolio.id}>
      <div className="col-4">{portfolio.name}</div>
      <div className="col-4">{portfolio.balance}</div>
      <div className="col-4">
        <Link to={`/portfolios/${portfolio.id}`}>
      Accout details
        </Link>
      </div>
    </div>
  ))

  return (
    <div>
      <ul>{portfoliosJsx}</ul>
      <button onClick={show}>{hasPositions ? 'Hide' : 'Show'}</button>
      <div>{hasPositions ? <Positions
        user={user}
      /> : ''}</div>
    </div>
  )
}
export default Portfolios
