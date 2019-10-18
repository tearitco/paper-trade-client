import React, { useState, useEffect } from 'react'
import SideBar from './SideBar'
import { Row, Col, Container } from 'react-bootstrap'
import TickerInput from './TickerInput'
import Orders from '../Order/Orders'
import axios from 'axios'
import apiUrl from './../../apiConfig'
import Plot from 'react-plotly.js'

const Layout = ({ user, alert, match }) => {
  const [company, setCompany] = useState('')
  const [price, setPrice] = useState(0)
  const [portfolio, setPortfolio] = useState([])
  const [x, setX] = useState([])
  const [y, setY] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/portfolios`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(responseData => {
        setPortfolio(responseData.data.portfolios[0])
      })
      .catch(() => {
        alert({
          heading: 'Oops',
          message: 'Something went wrong',
          variant: 'danger'
        })
      })
  }, [])

  const handleChange = event => {
    event.persist()
    setCompany(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const apiKey = 'RLK58ECSXKJPO3S2'
    const xArray = []
    const yArray = []
    axios({
      url: `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${company}&apikey=RLK58ECSXKJPO3S2`,
      method: 'GET'
    })
      .then(res => setPrice(res.data['Global Quote']['05. price']))
      .then(
        axios({
          method: 'GET',
          url: `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${company}&outputsize=compact&apikey=${apiKey}`
        })
          .then(res => {
            for (const key in res.data['Time Series (Daily)']) {
              xArray.push(key)
              yArray.push(res.data['Time Series (Daily)'][key]['1. open'])
            }
            setX(xArray)
            setY(yArray)
          })
      )
      .catch(() => {
        alert({
          heading: 'Oops',
          message: 'Something went wrong',
          variant: 'danger'
        })
      })
  }

  return (
    <Row>
      <Col>
        <SideBar
          portfolio={portfolio}
          user={user}
          alert={alert}
        />
      </Col>
      <Col>
        <Container>
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
            layout={{ width: 640, height: 480, title: `${company} Last Price: ${price}` }}
          />
          <TickerInput
            alert={alert}
            company={company}
            price={price}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <Orders
            alert={alert}
            portfolio={portfolio}
            user={user}
            company={company}
            price={price}
          />
        </Container>
      </Col>
    </Row>
  )
}

export default Layout
