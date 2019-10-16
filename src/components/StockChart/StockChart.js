import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js'
import axios from 'axios'

const StockChart = ({ user, alerts }) => {
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
        console.log(x, y)
        setY(yArray)
      })
      .catch(console.error)
  }, [])

  return (
    <div>
      <h1>Stock market</h1>
      <Plot
        data={[
          {
            x: x,
            y: y,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'blue' }
          }
        ]}
        layout={{ width: 640, height: 480, title: 'ticker' }}
      />
    </div>
  )
}

export default StockChart
