import React from 'react'
import { Container, Col, Row } from './relaunch'

export function LayoutExample() {
  return (
    <Container>
      <Row>
        <Col>First, but unordered</Col>
        <Col order={12}>Second, but last</Col>
        <Col order={1}>Third, but first</Col>
      </Row>
      <Row>
        <Col>First, but unordered</Col>
        <Col order="last">Second, but last</Col>
        <Col order="first">Third, but first</Col>
      </Row>
    </Container>
  )
}
