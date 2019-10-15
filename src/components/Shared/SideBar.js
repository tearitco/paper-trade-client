import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'
import Portfolios from '../Portfolio/Portfolios'

const SideBar = ({ user }) => (
  <div className="row col-4">
    <header>
      <Accordion defaultActiveKey="1">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
             My Accounts
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Portfolios
                user={user}/>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </header>
  </div>
)

export default SideBar
