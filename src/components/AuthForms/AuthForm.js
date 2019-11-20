import React from 'react'

import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'

import { Accordion, Card, Button } from 'react-bootstrap'

const AuthForm = ({ setUser, alert }) => {
  return (
    <Accordion defaultActiveKey="1">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            New here? Sign Up
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <SignUp
              alert={alert}
              setUser={setUser}
            />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Already a user? Sign in
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <SignIn
              alert={alert}
              setUser={setUser}
            />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default AuthForm
