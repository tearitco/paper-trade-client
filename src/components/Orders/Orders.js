import React, {useEffect, useState } from 'react'
import axios from 'axios'

const Orders = () => {
  const [orders, setOrders] = useState([])
  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/positions`,

    })
  })
}

export default Orders
