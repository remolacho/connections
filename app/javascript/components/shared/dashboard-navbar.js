import React from 'react'
import { NavLink as NavLinkRRD, Outlet } from  "react-router-dom"
import { 
  Container, 
  Row, 
  Col,
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  NavItem,
  Collapse
} from 'reactstrap'

export default function DashboardNavbar(){

  return (
    <Container className='pt-7' fluid>
      <Row>
        <Col>
          <Navbar
            expand="md"
            light
          >
            <NavbarBrand 
              to="/dashboard"
              tag={NavLinkRRD}
            >
              Admin Dashboard
            </NavbarBrand>
            <Collapse navbar>
              <Nav
                className="me-auto"
                navbar
              >
                <NavItem>
                  <NavLink 
                    to="/dashboard/sales"
                    tag={NavLinkRRD}
                  >
                    Ventas
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink 
                    to="/dashboard/messages"
                    tag={NavLinkRRD}
                  >
                    Mensajes
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink 
                    to="/dashboard/clients-smpp"
                    tag={NavLinkRRD}
                  >
                    Clientes SMPP
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Col>
      </Row>

      {/* content dashboard */}
      <Outlet />
    </Container>
  )

}