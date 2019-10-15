import React from 'react'
import SideBar from './SideBar'
import { Row, Col } from 'react-bootstrap'
import Chart from './Chart'

const Layout = ({ user, alert }) => (
  <Row>
    <Col>
      <SideBar
        user={user}
        alert={alert}
      />
    </Col>
    <Col>
      <Chart />
    </Col>
  </Row>
)

export default Layout
