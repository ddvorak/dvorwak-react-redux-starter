import React, { Component } from 'react'
import { Button, Col, Row } from 'antd'
import ExampleForm from './../../../Components/ExampleComponents/ExampleForm'

class ExampleFormPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      values: {}
    }
    this.handleCreate = this.handleCreate.bind(this)
  }

  showForm = () => {
    this.setState({ ...this.state, visible: true })
  }

  handleCancel = () => {
    this.setState({ ...this.state, visible: false, values: {} })
  }

  saveFormRef = formRef => {
    this.formRef = formRef
  }

  handleCreate() {
    const form = this.formRef.props.form
    form.validateFields((err, values) => {
      if (err) {
        return
      }
      console.log(values)
      form.resetFields()
      this.setState({ ...this.state, visible: false, values: values })
    })
  }

  render() {
    return (
      <React.Fragment>
        <Row type="flex" justify="space-around">
          <Col span={4}>
            <h2>Quick Form Example</h2>
            <Button type="primary" onClick={this.showForm}>
              Open Form
            </Button>
            <ExampleForm
              wrappedComponentRef={this.saveFormRef}
              visible={this.state.visible}
              onCancel={this.handleCancel}
              onCreate={this.handleCreate}
            />
          </Col>
          <Col span={4}>
            <div className="formValues">
              <h2>Current State for Values</h2>
              <pre>{JSON.stringify(this.state.values, null, 2)}</pre>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default ExampleFormPage
