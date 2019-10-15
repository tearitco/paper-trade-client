import React from 'react'
import SideBar from './SideBar'
import { Row } from 'react-bootstrap'

const Layout = ({ user, alert }) => (
  <Row>
    <SideBar
      user={user}
      alert={alert}
    />
  </Row>
)

export default Layout
