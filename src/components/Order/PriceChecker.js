// import React, { useState } from 'react'
// import { Row, Container, Col } from 'react-bootstrap'
// import TickerInput from '../Shared/TickerInput'
// import axios from 'axios'
// import Plot from 'react-plotly.js'
//
// const PriceChecker = ({ user, alerts, match }) => {
//   const [company, setCompany] = useState('')
//   const [price, setPrice] = useState(0)
//   const [x, setX] = useState([])
//   const [y, setY] = useState([])
//
//   const handleChange = event => {
//     event.persist()
//     console.log(event.target.value)
//     setCompany(event.target.value)
//   }
// 
//   const handleSubmit = event => {
//     event.preventDefault()
//     const apiKey = 'RLK58ECSXKJPO3S2'
//     const ticker = company
//     const xArray = []
//     const yArray = []
//     console.log(company)
//     axios({
//       url: `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${company}&apikey=RLK58ECSXKJPO3S2`,
//       method: 'GET'
//     })
//       .then(res => setPrice(res.data['Global Quote']['05. price']))
//       .then(
//         axios({
//           method: 'GET',
//           // url: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&outputsize=full&apikey=${apiKey}`
//           url: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=compact&apikey=${apiKey}`
//         })
//           .then(res => {
//             for (const key in res.data['Time Series (Daily)']) {
//               xArray.push(key)
//               yArray.push(res.data['Time Series (Daily)'][key]['1. open'])
//             }
//             setX(xArray)
//             console.log(x, y)
//             setY(yArray)
//           })
//       )
//       .catch(console.error)
//   }
//   return (
//     <Container>
//       <Plot
//         data={[
//           {
//             x: x,
//             y: y,
//             type: 'scatter',
//             mode: 'lines+markers',
//             marker: { color: 'blue' }
//           }
//         ]}
//         layout={{ width: 640, height: 480, title: `${company}` }}
//       />
//       <Row>
//         <Col>
//           <p>Ticker: {company}</p>
//         </Col>
//         <Col>
//           <p>Last Price: {price}</p>
//         </Col>
//       </Row>
//       <TickerInput
//         company={company}
//         price={price}
//         handleChange={handleChange}
//         handleSubmit={handleSubmit}
//       />
//     </Container>
//   )
// }
//
// export default PriceChecker
