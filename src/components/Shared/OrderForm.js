import React, { useState } from 'react'
import FormO from './FormO'
import axios from 'axios'
import apiUrl from './../../apiConfig'

const OrderForm = ({ alert, company, portfolio, price, user }) => {
  const [position, setPosition] = useState({ ticker: company, volume: null, price: price, portfolio_id: '', side: 'Long' })

  const handleChange = event => {
    event.persist()
    setPosition(position => ({ ...position, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    const total = (parseInt(price) * parseInt(position.volume))
    if (total < portfolio.balance) {
      const newBalance = (portfolio.balance - total)
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
            'portfolio_id': portfolio.id,
            'side': position.side
          }
        }
      })
        .then(() => {
          setPosition({ ticker: '', volume: '', price: '', portfolio_id: '', side: 'Long' })
        })
        .then(() => {
          alert({
            heading: 'Nice',
            message: 'You placed an order',
            variant: 'success'
          })
        })
        .then(() => {
          axios({
            url: `${apiUrl}/portfolios/${portfolio.id}`,
            method: 'PUT',
            headers: {
              'Authorization': `Token token=${user.token}`
            },
            data: {
              'portfolio': {
                'name': portfolio.name,
                'balance': newBalance
              }
            }
          })
            .catch(() => {
              setPosition({ ticker: '', volume: null, price: '', portfolio_id: '', side: 'Long' })
              alert({
                heading: 'Hmmm...',
                message: 'Something went wrong',
                variant: 'danger'
              })
            })
        }
        )
        .catch(() => {
          setPosition({ ticker: '', volume: null, price: '', portfolio_id: '', side: 'Long' })
          alert({
            heading: 'Hmmm...',
            message: 'Something went wrong',
            variant: 'danger'
          })
        })
    } else {
      alert({
        heading: 'Oops, not enough money',
        message: 'We need more gold',
        variant: 'danger'
      })
    }
  }
  return (
    <FormO
      alert={alert}
      balance={(portfolio.balance)}
      user={user}
      ticker={company}
      volume={position.volume}
      price={price}
      side={position.side}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  )
}

export default OrderForm
