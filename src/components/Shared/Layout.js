import React from 'react'
import SideBar from './SideBar'
import { Row, Col } from 'react-bootstrap'
import MainField from './MainField'

const Layout = ({ portfolio, user, alert }) => (
  <Row>
    <Col>
      <SideBar
        user={user}
        alert={alert}
      />
    </Col>
    <Col>
      <MainField
        user={user}
        alert={alert}
        portfolio={portfolio}
      />
    </Col>
  </Row>
)

export default Layout
