import React, { useEffect } from 'react'
import axios from 'axios'

const Chart = () => {
  // const [stockChartXValues, setStockChartXValues] = useState([])
  // const [stockChartYValues, setStockChartYValues] = useState([])

  useEffect(() => {
    const apiKey = 'RLK58ECSXKJPO3S2'
    const ticker = 'AMZN'
    axios({
      method: 'GET',
      url: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=compact&apikey=${apiKey}`
    })
      .then(res => console.log(res))
  }, [])

  return (
    <h1>Stonks</h1>
  )
}

export default Chart
// class Chart extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       stockChartXValues: [],
//       stockChartYValues: []
//     }
//   }
//
//   componentdidMount () {
//     this.fetchStock()
//   }
//
//   fetchStock () {
//     const API_KEY = 'RLK58ECSXKJPO3S2'
//     const API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=compact&apikey=${API_KEY}`
//
//     fetch(API_CALL)
//       .then(
//         function (response) {
//           return response.json()
//         }
//       )
//       .then(
//         function (data) {
//           console.log(data)
//         }
//       )
//   }
//   render () {
//     return (
//       <div>
//         <h1> Stock Market </h1>
//       </div>
//     )
//   }
// }
