import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apiUrl from './../../apiConfig'
import Layout from '../Shared/Layout'
import { Link } from 'react-router-dom'

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
    <div className="row" key={portfolio.id}>
      <Link to={`/portfolios/${portfolio.id}`}>
        {portfolio.name}
      </Link>
      {portfolio.balance}
    </div>
  ))

  return (
    <Layout>
      <div className="row">
        <ul>{portfoliosJsx}</ul>
      </div>
    </Layout>
  )
}
export default Portfolios
