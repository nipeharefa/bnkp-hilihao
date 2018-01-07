import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AdminDefaultLayout from 'packs/layouts/adminLayout'

const routers = () => (
  <Switch>
    <Route exact component={ AdminDefaultLayout } />
  </Switch>
)

export default routers