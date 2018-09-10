import React from 'react'
import { List } from 'antd'
const Documentation = props => (
  <List
    itemLayout="horizontal"
    className="documentation-list"
    dataSource={props.data}
    header={<h1 className="documentation-title">Documentation Links</h1>}
    bordered
    renderItem={item => (
      <List.Item className="documentation-list-item">
        <List.Item.Meta
          title={
            <a style={{ fontSize: '2em' }} href={item.url}>
              {item.title}
            </a>
          }
          description={item.description}
        />
      </List.Item>
    )}
  />
)

export default Documentation
