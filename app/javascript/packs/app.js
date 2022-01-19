import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AdminExampleLayout from "layouts/examples/Admin.js";
import AuthExampleLayout from "layouts/examples/Auth.js";
import Dashboard from "layouts/dashboard"


export default function App(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard" render={(props) => <Dashboard {...props} />}/>
        {/* <Redirect from="/" to="/dashboard/home" /> */}
        {/* Routes to Template */}
        <Route path="/example/admin" render={(props) => <AdminExampleLayout {...props} />} />
        <Route path="/example/auth" render={(props) => <AuthExampleLayout {...props} />} />
        {/* <Redirect from="/" to="/example/admin/index" /> */}
      </Switch>
  </BrowserRouter>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
