import React, { Fragment, Component } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import Portfolio from '../Portfolio/Portfolio'
import PortfolioCreate from '../Portfolio/PortfolioCreate'
import PortfolioUpdate from '../Portfolio/PortfolioUpdate'
import Position from '../Position/Position'
import Layout from '../Shared/Layout'
import AuthForm from '../AuthForms/AuthForm'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />

        {alerts.map((alert, index) => (
          <AutoDismissAlert
            key={index}
            heading={alert.heading}
            variant={alert.variant}
            message={alert.message}
          />
        ))}
        <main className="container">
          <Route exact path='/' render={() => (
            <AuthForm alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/main' render={() => (
            <Layout alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/create' render={() => (
            <PortfolioCreate alert={this.alert} user={user} history={history} />
          )} />
          <AuthenticatedRoute user={user} path='/portfolios/:id/edit' render={() => (
            <PortfolioUpdate alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/portfolios/:id' render={() => (
            <Portfolio alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/positions' render={() => (
            <Position alert={this.alert} user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}
export default App
