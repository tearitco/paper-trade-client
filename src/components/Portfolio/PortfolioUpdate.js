import React, { useState, useEffect } from 'react'
import PortfolioForm from '../Shared/PortfolioForm'
import { withRouter } from 'react-router-dom'
// import Redirect from 'react-router-dom'
import apiUrl from './../../apiConfig'
import axios from 'axios'

const PortfolioUpdate = ({ user, alerts, match }) => {
  const [portfolio, setPortfolio] = useState({ name: '', balance: 0 })
  const [updated, setUpdated] = useState(null)

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/portfolios/${match.params.id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => setPortfolio(res.data.portfolio))
      .catch(console.log)
  }, [])

  const handleChange = event => {
    event.persist()
    setPortfolio(portfolio => ({ ...portfolio, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(portfolio)
    axios({
      url: `${apiUrl}/portfolios/${match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: { portfolio }
    })
      .then(res => setUpdated(res.data.portfolio.id))
      .catch(console.error)
  }
  if (updated) {
    console.log(portfolio)
  }

  return (
    <PortfolioForm
      portfolio={portfolio}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default withRouter(PortfolioUpdate)
