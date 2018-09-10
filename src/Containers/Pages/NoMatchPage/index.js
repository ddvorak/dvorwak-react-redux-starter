import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Button } from 'antd'

const NoMatchPage = () => (
  <Row type="flex" justify="space-around">
    <Col style={{ textAlign: 'center' }}>
      <h1>404 Not Found</h1>
      <p>This Page Was not Found</p>
      <Button type="primary">
        <Link to="/">Return Home</Link>
      </Button>
    </Col>
  </Row>
)

export default NoMatchPage
