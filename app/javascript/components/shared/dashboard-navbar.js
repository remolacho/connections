import React from 'react'
import { NavLink as NavLinkRRD, Outlet, useLocation, useParams, useSearchParams } from  "react-router-dom"
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

function NavbarSeller(){
  return (
    <Navbar
      expand="md"
      light
    >
      <NavbarBrand 
        to="/dashboard-seller"
        tag={NavLinkRRD}
      >
        Ventas Panel de control
      </NavbarBrand>
      
      <Collapse navbar>
        <Nav
          className="me-auto"
          navbar
        >
        <NavItem>
          <select className="form-control">
            <option value="chile" defaultValue>Chile</option>
            <option value="argentina" >Argentina</option>
            <option value="bolivia">Bolivia</option>
            <option value="brasil">Brasil</option>
            <option value="colombia">Colombia</option>
            <option value="costa-rica">Costa Rica</option>
            <option value="ecuador">Ecuador</option>
            <option value="eeuu">EEUU</option>
            <option value="espana">Espana</option>
            <option value="guatemala">Guatemala</option>
            <option value="mexico">Mexico</option>
            <option value="paraguay">Paraguay</option>
            <option value="peru">Peru</option>
            <option value="suecia">Suecia</option>
            <option value="uruguay">Uruguay</option>
          </select>
        </NavItem>
        <NavItem className='align-items-center d-inline-flex'>
          <NavLink 
            to="/dashboard-seller/sales"
            tag={NavLinkRRD}
          >
            Ventas
          </NavLink>
        </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

function NavbarSuperadmin(){
  return(
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
              to="/dashboard/providers-smpp"
              tag={NavLinkRRD}
            >
              Proveedores SMPP
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
  )
}

export default function DashboardNavbar(){
  let location = useLocation();
  const isSeller = location.pathname.split('/').filter(Boolean)[0] === 'dashboard-seller'
  const isSuperadmin = location.pathname.split('/').filter(Boolean)[0] === 'dashboard'

  return (
    <Container className='pt-7' fluid>
      <Row>
        <Col>
          {isSuperadmin && <NavbarSuperadmin />}
          {isSeller && <NavbarSeller />}
        </Col>
      </Row>

      {/* content dashboard - START */}
      <Outlet />
      {/* content dashboard - END */}
    </Container>
  )

}