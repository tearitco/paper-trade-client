import React from 'react'
import { Accordion, Card, Button, Container, Col } from 'react-bootstrap'
import Portfolios from '../Portfolio/Portfolios'
import Positions from '../Position/Positions'

const SideBar = ({ user, alert, portfolio }) => (
  <Container>
    <Col>
      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
               My Accounts
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Portfolios
                alert={alert}
                user={user}/>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Accordion className="accordion" defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Open positions
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <Positions
                alert={alert}
                portfolio={portfolio}
                user={user}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Col>
  </Container>
)

export default SideBar
