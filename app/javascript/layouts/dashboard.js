import React from 'react'
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import { Container } from "reactstrap";

import DashboardNavbar from "components/shared/dashboard-navbar"
import Footer from "components/shared/footer"
import Sidebar from "components/shared/sidebar"

import routes from "packs/routes"

export default function Dashboard(props) {
  const mainContent = React.useRef(null)
  const location = useLocation()

  React.useEffect(() => {
    document.documentElement.scrollTop = 0
    document.scrollingElement.scrollTop = 0
    mainContent.current.scrollTop = 0
  }, [location] )

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
  
  function getBrandText(path) {
    for(let i = 0; i < routes.length; i++) {
      if(props.location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name
      }
    }
    return "Brand"
  }

  return (
    <>
      <Sidebar
        {...props}
        routes={routes.filter( route => route.layout == "/dashboard" || route.layout == "/auth")}
        logo={{
          innerLink: "/dashboard/home",
          imgSrc: require("assets/img/brand/connectus-487x144.png"),
          imgAlt: "ConnectUs"
        }}
      />
      <div className='main-content' ref={mainContent}>
        <DashboardNavbar {...props} brandText={getBrandText(props.location.pathname)} />
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