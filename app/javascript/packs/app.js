import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/examples/Admin.js";
import AuthLayout from "layouts/examples/Auth.js";


export default function App(){
  return (
    <BrowserRouter>
      <Switch>
        {/* Routes to Template */}
        <Route path="/example/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/example/auth" render={(props) => <AuthLayout {...props} />} />
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
