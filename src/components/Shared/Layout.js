import React from 'react'
import SideBar from './SideBar'

const Layout = ({ user, alert }) => (
  <div>
    <SideBar
      user={user}
      alert={alert}
    />
  </div>
)

export default Layout
