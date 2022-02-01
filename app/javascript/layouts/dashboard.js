import React from 'react'
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import { Container } from "reactstrap";

import DashboardNavbar from "components/shared/dashboard-navbar"
import Footer from "components/shared/footer"
import Sidebar from "components/shared/sidebar"

import routes from "packs/routes"

export default function Dashboard(props) {
  const mainContent = React.useRef(null)

  function getRoutes(routes) {
    return routes.map((prop, key) => {
      if (prop.layout == "/dashboard" || prop.layout == "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        )
      } else {
        return null
      }
    })
  }
  
  return (
    <>
      <Sidebar />
      <div className='main-content' ref={mainContent}>
        <DashboardNavbar />
        <Switch>
          {getRoutes(routes)}
          {/* <Redirect from="*" to="/home" /> */}
        </Switch>
        <Container fluid>
          <Footer/>
        </Container>
      </div>
    </>
  )
}