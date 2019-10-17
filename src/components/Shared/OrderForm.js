import React, { useState } from 'react'
import FormO from './FormO'
import axios from 'axios'
import apiUrl from './../../apiConfig'

const OrderForm = ({ user, price, company, portfolio }) => {
  const [total, setTotal] = useState(0)
  const [position, setPosition] = useState({ ticker: company, volume: 0, price: price, portfolio_id: '' })

  const handleChange = event => {
    event.persist()
    setPosition(portfolio => ({ ...portfolio, [event.target.name]: event.target.value }))
    if (event.target.name === 'volume') {
      setTotal(price * position.volume)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
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
          'portfolio_id': portfolio.id
        }
      }
    })
      .then(() => {
        axios({
          url: `${apiUrl}/portfolios/${portfolio.id}`,
          method: 'PATCH',
          headers: {
            'Authorization': `Token token=${user.token}`
          },
          data: {
            'portfolio': {
              'name': portfolio.name,
              'balance': (portfolio.balance - total)
            }
          }
        })
          .then(res => console.log(res))
          .catch(console.error)
      }
      )
      .catch(console.error)
  }
  return (
    <FormO
      user={user}
      ticker={company}
      volume={position.volume}
      price={price}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default OrderForm
