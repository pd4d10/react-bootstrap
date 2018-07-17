import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarNav,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav,
} from './relaunch'
import { navItems } from './utils'
import { ExampleContainer } from './example-container'
import { AlertExamples } from './alert/index'
import { BadgeExamples } from './badge'
import { BreadcrumbExamples } from './breadcrumb/index'
import { LayoutExample } from './layout'
import { ButtonExamples } from './button/index'
import { Home } from './home'
import { JumbotronExamples } from './jumbotron'
import { CardExamples } from './card'

const Sidebar = withRouter(p => (
  <Nav
    vertical
    items={navItems.map(name => ({
      content: props => (
        <Link
          to={`/${name.toLowerCase()}`}
          {...props}
          style={
            p.location.pathname === `/${name.toLowerCase()}`
              ? {
                  color: '#555',
                  fontWeight: 'bold',
                }
              : {
                  color: 'rgba(0,0,0,.65)',
                }
          }
        >
          {name}
        </Link>
      ),
    }))}
  />
))

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar theme="light">
            <NavbarBrand href="/">Relaunch</NavbarBrand>
            <NavbarNav>
              <NavItem>
                <NavLink href="/">Link</NavLink>
              </NavItem>
            </NavbarNav>
          </Navbar>
          <Container fluid>
            <Row>
              <Col size={{ md: 3, lg: 2 }}>
                <Sidebar />
              </Col>
              <Col>
                <Route path="/" exact component={Home} />
                <ExampleContainer path="/alerts" examples={AlertExamples} />
                <ExampleContainer path="/badge" examples={BadgeExamples} />
                <ExampleContainer
                  path="/breadcrumb"
                  examples={BreadcrumbExamples}
                />
                <ExampleContainer path="/buttons" examples={ButtonExamples} />
                <ExampleContainer path="/card" examples={CardExamples} />
                <ExampleContainer
                  path="/jumbotron"
                  examples={JumbotronExamples}
                />
                {/*
                <Route path="/layout" component={LayoutExample} /> */}
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    )
  }
}

export default App
