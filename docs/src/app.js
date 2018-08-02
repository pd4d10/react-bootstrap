import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'
import { kebabCase } from 'lodash'
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
} from 'relaunch'
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
import { ListExamples } from './list'
import { ButtonGroupExamples } from './button-group'
import { CarouselExamples } from './carousel'
import { CollapseExamples } from './collapse'
import { ModalExamples } from './modal'
import { NavExamples } from './nav'
import { ProgressExamples } from './progress'
import { PaginationExamples } from './pagination'
import { DropdownExamples } from './dropdown'

const Sidebar = withRouter(p => (
  <Nav
    vertical
    items={navItems}
    renderItem={item => (
      <Link
        to={`/${kebabCase(item)}`}
        style={
          p.location.pathname === `/${kebabCase(item)}`
            ? {
                color: '#555',
                fontWeight: 'bold',
              }
            : {
                color: 'rgba(0,0,0,.65)',
              }
        }
      >
        {item}
      </Link>
    )}
  />
))

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Navbar theme="light">
            <NavbarBrand href="/">Relaunch</NavbarBrand>
            <NavbarNav>
              <NavItem>
                <NavLink href="/">Link</NavLink>
              </NavItem>
            </NavbarNav>
          </Navbar> */}
          <Container fluid>
            <Row>
              <Col size={{ md: 3, lg: 2 }}>
                <Sidebar />
              </Col>
              <Col size={{ md: 9, lg: 10 }}>
                <Route path="/" exact component={Home} />
                <ExampleContainer path="/alerts" examples={AlertExamples} />
                <ExampleContainer path="/badge" examples={BadgeExamples} />
                <ExampleContainer
                  path="/breadcrumb"
                  examples={BreadcrumbExamples}
                />
                <ExampleContainer path="/buttons" examples={ButtonExamples} />
                <ExampleContainer
                  path="/button-group"
                  examples={ButtonGroupExamples}
                />
                <ExampleContainer path="/card" examples={CardExamples} />
                <ExampleContainer
                  path="/carousel"
                  examples={CarouselExamples}
                />
                <ExampleContainer
                  path="/collapse"
                  examples={CollapseExamples}
                />
                <ExampleContainer
                  path="/dropdown"
                  examples={DropdownExamples}
                />
                <ExampleContainer path="/list-group" examples={ListExamples} />
                <ExampleContainer
                  path="/jumbotron"
                  examples={JumbotronExamples}
                />
                <ExampleContainer path="/modal" examples={ModalExamples} />
                <ExampleContainer path="/nav" examples={NavExamples} />
                <ExampleContainer
                  path="/progress"
                  examples={ProgressExamples}
                />
                <ExampleContainer
                  path="/pagination"
                  examples={PaginationExamples}
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
