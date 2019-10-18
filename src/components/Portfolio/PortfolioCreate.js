import React, { useState } from 'react'
import PortfolioForm from '../Shared/PortfolioForm'
import apiUrl from './../../apiConfig'
import axios from 'axios'

const PortfolioCreate = ({ user, alert }) => {
  const [portfolio, setPortfolio] = useState({ name: '', balance: 0 })

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
      .then(() => {
        alert({
          heading: 'Yeeeess!',
          message: 'Created successfully',
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
