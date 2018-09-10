import React, { Component } from 'react'
import { Modal, Form, Input } from 'antd'

const FormItem = Form.Item

const ExampleForm = Form.create()(
  class extends Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props
      const { getFieldDecorator } = form
      return (
        <Modal
          visible={visible}
          title="Create a new Ticket"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}>
          <Form layout="vertical">
            <FormItem label="Title">
              {getFieldDecorator('title', {
                rules: [
                  {
                    required: true,
                    message: 'Please Enter a Title'
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem label="Description">
              {getFieldDecorator('description')(<Input type="textarea" />)}
            </FormItem>
          </Form>
        </Modal>
      )
    }
  }
)

export default ExampleForm
