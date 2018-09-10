import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Button, Row, Col } from 'antd'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from './../../../State/counter'

const Counter = props => (
  <Row type="flex" justify="space-around">
    <Col span={4}>
      <h1>Home</h1>
      <p>Count: {props.count}</p>

      <p>
        <Button
          type="primary"
          className="increment-button"
          onClick={props.increment}>
          Increment
        </Button>
        <Button onClick={props.incrementAsync} disabled={props.isIncrementing}>
          Increment Async
        </Button>
      </p>

      <p>
        <Button onClick={props.decrement}>Decrement</Button>
        <Button onClick={props.decrementAsync} disabled={props.isDecrementing}>
          Decrement Async
        </Button>
      </p>
    </Col>
  </Row>
)

const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
