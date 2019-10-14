import React, { useState, useEffect } from 'react'
import { withRouter, Redirect, Link } from 'react-router-dom'
import apiUrl from './../../apiConfig'
import axios from 'axios'

const Portfolio = ({ user, alerts, match }) => {
  const [portfolio, setPortfolio] = useState({ name: '', balance: 0 })
  const [deleted, setDeleted] = useState(false)

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

  if (deleted) {
    return <Redirect to={
      { pathname: '/account' }
    } />
  }

  return (
    <div>
      <p>{portfolio.name}</p>
      <p>{portfolio.balance}</p>
      <Link to={`/portfolios/${portfolio.id}/edit`}><button>Edit</button></Link>
      <button onClick={destroy}>Close account</button>
    </div>
  )
}
export default withRouter(Portfolio)
