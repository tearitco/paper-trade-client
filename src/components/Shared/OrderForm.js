import React, { useState } from 'react'
import FormO from './FormO'
import axios from 'axios'
import apiUrl from './../../apiConfig'

const OrderForm = ({ user, price, company, portfolioid }) => {
  const [position, setPosition] = useState({ ticker: company, volume: 0, price: price, portfolio_id: '' })

  const handleChange = event => {
    event.persist()
    setPosition(portfolio => ({ ...portfolio, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(position)
    axios({
      url: `${apiUrl}/positions`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: {
        'position': {
          'ticker': company,
          'volume': position.volume,
          'price': price,
          'portfolio_id': portfolioid
        }
      }
    })
      .then(res => console.log(res))
      .catch(console.error)
  }
  return (
    <FormO
      user={user}
      ticker={company}
      volume={position.volume}
      price={price}
      portfolioid={portfolioid}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default OrderForm
