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
import { Home } from './home'

import AlertExamples from './alert/index.mdx'
import BadgeExamples from './badge/index.mdx'
import BreadcrumbExamples from './breadcrumb/index.mdx'
import ButtonExamples from './button/index.mdx'
import ButtonGroupExamples from './button-group/index.mdx'
import CardExamples from './card/index.mdx'
import CarouselExamples from './carousel/index.mdx'
import CollapseExamples from './collapse/index.mdx'
import DropdownExamples from './dropdown/index.mdx'
import JumbotronExamples from './jumbotron/index.mdx'
import LayoutExamples from './layout/index.mdx'
import ListExamples from './list/index.mdx'
import ModalExamples from './modal/index.mdx'
import NavExamples from './nav/index.mdx'
import NavbarExamples from './navbar/index.mdx'
import PaginationExamples from './pagination/index.mdx'
import ProgressExamples from './progress/index.mdx'
import TableExamples from './table/index.mdx'

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
                <Route path="/alerts" component={AlertExamples} />
                <Route path="/badge" component={BadgeExamples} />
                <Route path="/breadcrumb" component={BreadcrumbExamples} />
                <Route path="/buttons" component={ButtonExamples} />
                <Route path="/button-group" component={ButtonGroupExamples} />
                <Route path="/card" component={CardExamples} />
                <Route path="/carousel" component={CarouselExamples} />
                <Route path="/collapse" component={CollapseExamples} />
                <Route path="/dropdown" component={DropdownExamples} />
                <Route path="/jumbotron" component={JumbotronExamples} />
                <Route path="/layout" component={LayoutExamples} />
                <Route path="/list-group" component={ListExamples} />
                <Route path="/modal" component={ModalExamples} />
                <Route path="/nav" component={NavExamples} />
                <Route path="/navbar" component={NavbarExamples} />
                <Route path="/pagination" component={PaginationExamples} />
                <Route path="/progress" component={ProgressExamples} />
                <Route path="/table" component={TableExamples} />
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    )
  }
}

export default App
