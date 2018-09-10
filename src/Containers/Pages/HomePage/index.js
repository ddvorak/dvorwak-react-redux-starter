import React from 'react'
import { Row, Col } from 'antd'
import { data } from './data'
import Documentation from './../../../Components/Documentation'

const Home = () => (
  <React.Fragment>
    <Row type="flex" justify="space-around">
      <Col>
        <Documentation data={data} />
      </Col>
    </Row>
  </React.Fragment>
)

export default Home
