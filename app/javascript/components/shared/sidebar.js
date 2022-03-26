import React from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Sidebar() {
  const [collapseOpen, setCollapseOpen] = React.useState();
  const [collapseOption, setCollapseOption] = React.useState({
    sms: false,
    email: false,
    admin: false,
    superadmin: false
  })
  
  // toggles collapse between opened and closed (true/false)
  const toggleCollapse = () => {
    setCollapseOpen((data) => !data);
  };
  // closes the collapse
  const closeCollapse = () => {
    setCollapseOpen((data) => !data);
  };

  return (
    <>
      <input type="checkbox" id="toggle-checked" />
      <Navbar
        className="navbar-vertical fixed-left navbar-light bg-white"
        expand="md"
        id="sidenav-main"
      >
        <Container fluid>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleCollapse}
          >
            <svg className="fill-current" style={{width: "24px", height: "24px"}}>
              <use xlinkHref="#toggler" />
            </svg>
          </button>
          {/* Brand */}
          <div class="menu">
            <Link className="pt-0 py-0 navbar-brand" to="dashboard" >
              <img
                alt="ConnectUs"
                className="navbar-brand-img"
                src={require("assets/img/brand/connectus-487x144.png")}
              />
            </Link>
            <label for="toggle-checked" class="menu__toggler mb-0">
              <svg><use xlinkHref="#toggler" /></svg>
            </label>
          </div>
          {/* User */}
          <Nav className="align-items-center d-md-none">
            <UncontrolledDropdown nav>
              <DropdownToggle nav className="nav-link-icon">
                <i className="ni ni-bell-55" />
              </DropdownToggle>
              <DropdownMenu
                aria-labelledby="navbar-default_dropdown_1"
                className="dropdown-menu-arrow"
                right
              >
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Something else here</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav>
              <DropdownToggle nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                      alt="..."
                      src={
                        require("assets/img/theme/team-1-800x800.jpg")
                      }
                    />
                  </span>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                {/* <DropdownItem to="/example/admin/user-profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem to="/example/admin/user-profile" tag={Link}>
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem to="/example/admin/user-profile" tag={Link}>
                  <i className="ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </DropdownItem>
                <DropdownItem to="/example/admin/user-profile" tag={Link}>
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </DropdownItem> */}
                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-user-run" />
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* Collapse */}
          <Collapse navbar isOpen={collapseOpen}>
            {/* Collapse header */}
            <div className="navbar-collapse-header d-md-none">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/dashboard">
                    <img alt="ConnectUs" src={require("assets/img/brand/connectus-487x144.png")} />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleCollapse}
                  >
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            {/* Form */}
            <Form className="mt-4 mb-3 d-md-none">
              <InputGroup className="input-group-rounded input-group-merge">
                <Input
                  aria-label="Search"
                  className="form-control-rounded form-control-prepended"
                  placeholder="Search"
                  type="search"
                />
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <span className="fa fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Form>
            {/* Navigation */}
            <Nav navbar>
              <NavItem>
                <NavLink
                  to="/dashboard"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                >
                  <i className="ni ni-tv-2 text-primary" />
                  <span class="expandable-option">Panel de control</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/dashboard-seller"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                >
                  <i className="ni ni-tv-2 text-primary" />
                  <span class="expandable-option">Panel de control (Vendedor)</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/dashboard-admin-client"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                >
                  <i className="ni ni-tv-2 text-primary" />
                    <span class="expandable-option">Panel de control (Admin - Cliente)</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/dashboard-client"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                >
                  <i className="ni ni-tv-2 text-primary" />
                    <span class="expandable-option">Panel de control (Cliente)</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/contact"
                  tag={NavLinkRRD}
                  onClick={closeCollapse}
                >
                  <i className="ni ni-single-02 text-blue" />
                    <span class="expandable-option">Contactos</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  type="button"
                  to="/sms/send"
                  tag={NavLinkRRD}
                  onClick={() => setCollapseOption({...collapseOption, sms: !collapseOption.sms})}
                  className="navbar__group d-flex justify-content-between nav-link"
                >
                  <span className="d-block">
                    <i className="ni ni-chat-round pr-4 text-info"></i>
                    <span className="expandable-option">SMS</span>
                  </span>
                  <span className="expandable-option d-block">
                    { collapseOption.sms ?
                      <i className="ni ni-bold-down text-info"></i>
                      :
                      <i className="ni ni-bold-right"></i>
                    }
                  </span>
                </NavLink>
              </NavItem>
              <span className={`expandable-option ${collapseOption.sms ? '' : "d-none"}`}>
                <NavItem>
                  <NavLink
                    to="/sms/send"
                    tag={NavLinkRRD}
                    onClick={closeCollapse}
                  >
                    <span className="pl-4">
                      Enviar
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/sms/shipped-and-scheduled"
                    tag={NavLinkRRD}
                    onClick={closeCollapse}
                  >
                    <span className="pl-4">
                      Enviados y programados
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/sms/auto-preset"
                    tag={NavLinkRRD}
                    onClick={closeCollapse}
                  >
                    <span className="pl-4">
                      Predefinidos y automáticos
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/sms/received"
                    tag={NavLinkRRD}
                    onClick={closeCollapse}
                  >
                    <span className="pl-4">
                      Recibidos
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/sms/unsubscribed"
                    tag={NavLinkRRD}
                    onClick={closeCollapse}
                  >
                    <span className="pl-4">
                      Número desuscritos
                    </span>
                  </NavLink>
                </NavItem>
              </span>
              <NavItem>
                <NavLink 
                  type="button"
                  to="/email/send"
                  tag={NavLinkRRD}
                  onClick={() => setCollapseOption({...collapseOption, email: !collapseOption.email})} 
                  className="navbar__group d-flex justify-content-between nav-link"
                >
                  <span className="d-block">
                    <i className="ni ni-email-83 pr-4 text-primary"></i>
                    <span className="expandable-option">Email</span>
                  </span>
                  <span className="expandable-option d-block">
                    { collapseOption.email ?
                      <i className="ni ni-bold-down text-info"></i>
                      :
                      <i className="ni ni-bold-right"></i>
                    }
                  </span>
                </NavLink>
              </NavItem>
              <span className={`expandable-option ${collapseOption.email ? '' : "d-none"}`}>
                <NavItem>
                  <NavLink
                    to="/email/send"
                    tag={NavLinkRRD}
                    onClick={closeCollapse}
                  >
                    <span className="pl-4">
                      Enviar
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/email/shipped-and-scheduled"
                    tag={NavLinkRRD}
                    onClick={closeCollapse}
                  >
                    <span className="pl-4">
                      Enviados y programados
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/email/auto-preset"
                    tag={NavLinkRRD}
                    onClick={closeCollapse}
                  >
                    <span className="pl-4">
                      Predefinidos y automáticos
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/email/unsubscribed"
                    tag={NavLinkRRD}
                    onClick={closeCollapse}
                  >
                    <span className="pl-4">
                      Emails desuscritos
                    </span>
                  </NavLink>
                </NavItem>
              </span>
              <NavItem>
                <NavLink 
                  type="button"
                  to="/admin/enterprise"
                  tag={NavLinkRRD}
                  onClick={() => setCollapseOption({...collapseOption, admin: !collapseOption.admin})} 
                  className="navbar__group d-flex justify-content-between nav-link"
                >
                  <span className="d-block">
                    <i className="fas fa-cog pr-4"></i>
                    <span className="expandable-option">Administración</span>
                  </span>
                  <span className="expandable-option d-block">
                    { collapseOption.admin ?
                      <i className="ni ni-bold-down text-info"></i>
                      :
                      <i className="ni ni-bold-right"></i>
                    }
                  </span>
                </NavLink>
              </NavItem>
              <span className={`expandable-option ${collapseOption.admin ? '' : "d-none"}`}>
                <NavItem>
                  <NavLink
                    to="/admin/enterprise"
                    tag={NavLinkRRD}
                    onClick={closeCollapse}
                  >
                    <span className="pl-4">
                      Empresa
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/admin/account"
                    tag={NavLinkRRD}
                    onClick={closeCollapse}
                  >
                    <span className="pl-4">
                      Cuenta
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/admin/reports"
                    tag={NavLinkRRD}
                    onClick={closeCollapse}
                  >
                    <span className="pl-4">
                      Reportes
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/admin/purchase"
                    tag={NavLinkRRD}
                    onClick={closeCollapse}
                  >
                    <span className="pl-4">
                      Compras
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/admin/users"
                    tag={NavLinkRRD}
                    onClick={closeCollapse}
                  >
                    <span className="pl-4">
                      Usuarios
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/admin/clients"
                    tag={NavLinkRRD}
                    onClick={closeCollapse}
                  >
                    <span className="pl-4">
                      Clientes
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/admin/transform-balance"
                    tag={NavLinkRRD}
                    onClick={closeCollapse}
                  >
                    <span className="pl-4">
                      Transformar saldo
                    </span>
                  </NavLink>
                </NavItem>
              </span>
              <NavItem>
                <NavLink 
                  type="button"
                  to="/superadmin/users"
                  tag={NavLinkRRD}
                  onClick={() => setCollapseOption({...collapseOption, superadmin: !collapseOption.superadmin})} 
                  className="navbar__group d-flex justify-content-between nav-link"
                >
                  <span className="d-block">
                    <i className="fas fa-cog pr-4"></i>
                    <span className="expandable-option">Superadmin</span>
                  </span>
                  <span className="expandable-option d-block">
                    { collapseOption.superadmin ?
                      <i className="ni ni-bold-down text-info"></i>
                      :
                      <i className="ni ni-bold-right"></i>
                    }
                  </span>
                </NavLink>
              </NavItem>
              <span className={`expandable-option ${collapseOption.superadmin ? '' : "d-none"}`}>
                <NavItem>
                  <NavLink
                    to="/superadmin/users"
                    tag={NavLinkRRD}
                    onClick={closeCollapse}
                  >
                    <span className="pl-4">
                      Usuarios
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/superadmin/clients"
                    tag={NavLinkRRD}
                    onClick={closeCollapse}
                  >
                    <span className="pl-4">
                      Clientes
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/superadmin/buy"
                    tag={NavLinkRRD}
                    onClick={closeCollapse}
                  >
                    <span className="pl-4">
                      Comprar
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    to="/superadmin/postpago"
                    tag={NavLinkRRD}
                    onClick={closeCollapse}
                  >
                    <span className="pl-4">
                      Postpago
                    </span>
                  </NavLink>
                </NavItem>
              </span>
            </Nav>
            {/* Divider */}
            <hr className="my-3" />
            {/* Heading */}
            <h6 className="expandable-option navbar-heading text-muted">Documentación</h6>
            {/* Navigation */}
            <Nav className="mb-md-3" navbar>
              <NavItem>
                <NavLink href="#">
                  <i className="ni ni-spaceship" />
                  <span class="expandable-option">¿Como usar ConnectUs?</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <i className="ni ni-book-bookmark" />
                  <span class="expandable-option">Manual de uso de API</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <i className="ni ni-support-16" />
                  <span class="expandable-option">Manual de plataforma</span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
};

// Sidebar.defaultProps = {
//   routes: [{}],
// };