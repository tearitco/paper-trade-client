import React from 'react'
import SideBar from './SideBar'
import { Row, Col } from 'react-bootstrap'
import OrderBar from './OrderBar'

const Layout = ({ user, alert }) => (
  <Row>
    <Col>
      <SideBar
        user={user}
        alert={alert}
      />
    </Col>
    <Col>
      <OrderBar
        user={user}
        alert={alert}
      />
    </Col>
  </Row>
)

export default Layout
