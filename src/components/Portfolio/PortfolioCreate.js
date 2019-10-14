import React, { useState } from 'react'
import PortfolioForm from '../Shared/PortfolioForm'
// import Redirect from 'react-router-dom'
import apiUrl from './../../apiConfig'
import axios from 'axios'

const PortfolioCreate = ({ user, alerts }) => {
  const [portfolio, setPortfolio] = useState({ name: '', balance: 0 })
  const [createdPortfolioId, setCreatedPortfolioId] = useState(null)

  const handleChange = event => {
    event.persist()
    setPortfolio(portfolio => ({ ...portfolio, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(portfolio)
    axios({
      url: `${apiUrl}/portfolios`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: { portfolio }
    })
      .then(res => setCreatedPortfolioId(res.data.portfolio.id))
      .catch(console.error)
  }
  if (createdPortfolioId) {
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

export default PortfolioCreate
