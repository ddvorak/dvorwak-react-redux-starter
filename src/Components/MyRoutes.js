import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Containers/Pages/HomePage'

import Counter from '../Containers/Pages/CounterPage'
import ExampleFormPage from '../Containers/Pages/ExampleFormPage'
import NoMatch from '../Containers/Pages/NoMatchPage'
import { Row } from 'antd'

const MyRoutes = () => (
  <Row>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/counter" component={Counter} />
      <Route exact path="/example-form-page" component={ExampleFormPage} />
      <Route component={NoMatch} />
    </Switch>
  </Row>
)

export default MyRoutes
