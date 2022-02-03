import React from 'react'
import { Outlet } from "react-router-dom";
import { Container } from "reactstrap";

import DashboardNavbar from "components/shared/admin-navbar"
import Footer from "components/shared/footer"
import Sidebar from "components/shared/sidebar"

export default function Dashboard() {
  
  return (
    <>
      <Sidebar />
      <div className='main-content'>
        <DashboardNavbar />
        
        {/* content */}
        <Outlet />

        <Container fluid>
          <Footer/>
        </Container>
      </div>
    </>
  )
}