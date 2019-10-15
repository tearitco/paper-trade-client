import React from 'react'
import { Accordion, Card, Button, Container, Col } from 'react-bootstrap'
import Portfolios from '../Portfolio/Portfolios'
import Positions from '../Position/Positions'

const SideBar = ({ user }) => (
  <Container>
    <Col sm={4}>
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
        <Positions
          user={user}
        />
      </Accordion>
    </Col>
  </Container>
)

export default SideBar
