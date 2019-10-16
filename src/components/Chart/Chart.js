import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Chart = ({ user, alerts }) => {
  const [x, setX] = useState([])
  const [y, setY] = useState([])

  useEffect(() => {
    const apiKey = 'RLK58ECSXKJPO3S2'
    const ticker = 'AMZN'
    const xArray = []
    const yArray = []
    axios({
      method: 'GET',
      url: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=compact&apikey=${apiKey}`
    })
      .then(res => {
        for (const key in res.data['Time Series (Daily)']) {
          xArray.push(key)
          yArray.push(res.data['Time Series (Daily)'][key]['1. open'])
        }
        setX(xArray)
        setY(yArray)
      })
      .catch(console.error)
  }, [])
  // const xJsx = x.map(item => (
  //   <li key={item['1. open']}>{item['1. open']}</li>
  // ))

  return (
    <div>
      <h1>Stock market</h1>
      <p>x-values: {x}</p>
      <p>y-values: {y}</p>
    </div>
  )
}

export default Chart
