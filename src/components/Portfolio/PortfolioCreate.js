import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import PortfolioForm from '../Shared/PortfolioForm'
import apiUrl from './../../apiConfig'
import axios from 'axios'

const PortfolioCreate = ({ user, alert, history }) => {
  const [portfolio, setPortfolio] = useState({ name: '', balance: '' })

  const handleChange = event => {
    event.persist()
    setPortfolio(portfolio => ({ ...portfolio, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/portfolios`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: { portfolio }
    })
      .then(() => history.push('/main'))
      .then(() => {
        alert({
          heading: 'Yeeeess!',
          message: 'Created successfully',
          variant: 'success'
        })
      })
      .catch(() => {
        setPortfolio({ name: '', balance: '' })
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

export default withRouter(PortfolioCreate)
