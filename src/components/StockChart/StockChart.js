// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Chart from './Chart'
//
// const StockChart = ({ company, user, alerts }) => {
//   const [x, setX] = useState([])
//   const [y, setY] = useState([])

// useEffect(() => {
//   const apiKey = 'RLK58ECSXKJPO3S2'
//   const ticker = 'FB'
//   const xArray = []
//   const yArray = []
//   axios({
//     method: 'GET',
//     // url: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&outputsize=full&apikey=${apiKey}`
//     url: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=compact&apikey=${apiKey}`
//   })
//     .then(res => {
//       for (const key in res.data['Time Series (Daily)']) {
//         xArray.push(key)
//         yArray.push(res.data['Time Series (Daily)'][key]['1. open'])
//       }
//       setX(xArray)
//       console.log(x, y)
//       setY(yArray)
//     })
//     .catch(console.error)
// }, [])
//
//   handleSubmit = event => {
//     event.preventDefault
//   }
//
//   return (
//     <div>
//       <h1>Stock market</h1>
//       <Chart
//         user={user}
//         company={company}
//         x={x}
//         y={y}
//       />
//     </div>
//   )
// }
//
// export default StockChart
