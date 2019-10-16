import React, { useEffect } from 'react'
import axios from 'axios'

const Chart = () => {
  // const [stockChartXValues, setStockChartXValues] = useState([])
  // const [stockChartYValues, setStockChartYValues] = useState([])

  useEffect(() => {
    const apiKey = 'RLK58ECSXKJPO3S2'
    const ticker = 'AMZN'
    const stockChartXValuesFunction = []
    const stockChartYValuesFunction = []
    axios({
      method: 'GET',
      url: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=compact&apikey=${apiKey}`
    })
      .then(res => {
        console.log(res.data['Time Series (Daily)'])
        for (const key in res.data['Time Series (Daily)']) {
          stockChartXValuesFunction.push(key)
          stockChartYValuesFunction.push(res.data['Time Series (Daily)'][key]['1. open'])
        }

        console.log(stockChartXValuesFunction)
      })
      .catch(console.error)
  }, [])

  return (
    <h1>Stonks</h1>
  )
}

export default Chart
