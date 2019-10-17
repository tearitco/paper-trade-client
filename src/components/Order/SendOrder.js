// import React, { useState } from 'react'
// import OrderForm from '../Shared/OrderForm'
// import apiUrl from './../../apiConfig'
// import axios from 'axios'
//
// const PortfolioCreate = ({ user, alerts }) => {
//   const [position, setPosition] = useState({ ticker: '', volume: 0, price: 0, portfolio_id: '' })
//   const [createdPortfolioId, setCreatedPortfolioId] = useState(null)
//
//   const handleChange = event => {
//     event.persist()
//     setPosition(portfolio => ({ ...portfolio, [event.target.name]: event.target.value }))
//   }
//
//   const handleSubmit = event => {
//     event.preventDefault()
//     console.log(position)
//     axios({
//       url: `${apiUrl}/positions`,
//       method: 'POST',
//       headers: {
//         'Authorization': `Token token=${user.token}`
//       },
//       data: {
//         'position': {
//           'ticker': 'hi',
//           'volume': 20,
//           'price': 20,
//           'portfolio_id': 1
//         }
//       }
//     })
//       .then(res => setCreatedPortfolioId(res.data.portfolio.id))
//       .catch(console.error)
//   }
//   if (createdPortfolioId) {
//     console.log(position)
//   }
//
//   return (
//     <OrderForm
//       position={position}
//       handleChange={handleChange}
//       handleSubmit={handleSubmit}
//     />
//   )
// }
//
// export default PortfolioCreate
