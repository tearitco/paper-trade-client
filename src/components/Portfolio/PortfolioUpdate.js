import React, { useState, useEffect } from 'react'
import PortfolioForm from '../Shared/PortfolioForm'
import { withRouter } from 'react-router-dom'
import apiUrl from './../../apiConfig'
import axios from 'axios'

const PortfolioUpdate = ({ user, alerts, match }) => {
  const [portfolio, setPortfolio] = useState({ name: '', balance: 0 })

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/portfolios/${match.params.id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => setPortfolio(res.data.portfolio))
      .catch(() => {
        alert({
          heading: 'Oops',
          message: 'Something went wrong',
          variant: 'danger'
        })
      })
  }, [])

  const handleChange = event => {
    event.persist()
    setPortfolio(portfolio => ({ ...portfolio, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/portfolios/${match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: { portfolio }
    })
      .then(() => {
        alert({
          heading: 'Good',
          message: 'Updated successfully',
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

export default withRouter(PortfolioUpdate)
