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
    admin: false
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
          <span className="navbar-toggler-icon" />
        </button>
        {/* Brand */}
        <Link className="pt-0 navbar-brand" to="dashboard" >
          <img
            alt="ConnectUs"
            className="navbar-brand-img"
            src={require("assets/img/brand/connectus-487x144.png")}
          />
        </Link>
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
                  Panel de control
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/dashboard-seller"
                tag={NavLinkRRD}
                onClick={closeCollapse}
              >
                <i className="ni ni-tv-2 text-primary" />
                  Panel de control (Vendedor)
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/dashboard-client"
                tag={NavLinkRRD}
                onClick={closeCollapse}
              >
                <i className="ni ni-tv-2 text-primary" />
                  Panel de control (Cliente)
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/contact"
                tag={NavLinkRRD}
                onClick={closeCollapse}
              >
                <i className="ni ni-single-02 text-blue" />
                  Contactos
              </NavLink>
            </NavItem>
            <li>
              <a type="button" onClick={() => setCollapseOption({...collapseOption, sms: !collapseOption.sms})} className="d-flex justify-content-between nav-link">
                <span className="d-block">
                  <i className="ni ni-chat-round pr-4 text-info"></i>
                  SMS
                </span>
                <span className="d-block">
                  { collapseOption.sms ?
                    <i className="ni ni-bold-down text-info"></i>
                    :
                    <i className="ni ni-bold-right"></i>
                  }
                </span>
              </a>
            </li>
            <span className={`${collapseOption.sms ? '' : "d-none"}`}>
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
            </span>
            <li>
              <a type="button" onClick={() => setCollapseOption({...collapseOption, email: !collapseOption.email})} className="d-flex justify-content-between nav-link">
                <span className="d-block">
                  <i className="ni ni-email-83 pr-4 text-primary"></i>
                  Email
                </span>
                <span className="d-block">
                  { collapseOption.email ?
                    <i className="ni ni-bold-down text-info"></i>
                    :
                    <i className="ni ni-bold-right"></i>
                  }
                </span>
              </a>
            </li>
            <span className={`${collapseOption.email ? '' : "d-none"}`}>
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
            <li>
              <a type="button" onClick={() => setCollapseOption({...collapseOption, admin: !collapseOption.admin})} className="d-flex justify-content-between nav-link">
                <span className="d-block">
                  <i className="fas fa-cog pr-4"></i>
                  Administración
                </span>
                <span className="d-block">
                  { collapseOption.admin ?
                    <i className="ni ni-bold-down text-info"></i>
                    :
                    <i className="ni ni-bold-right"></i>
                  }
                </span>
              </a>
            </li>
            <span className={`${collapseOption.admin ? '' : "d-none"}`}>
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
                  to="/admin/shopping-history"
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
            </span>
            <li>
              <a type="button" onClick={() => setCollapseOption({...collapseOption, superadmin: !collapseOption.superadmin})} className="d-flex justify-content-between nav-link">
                <span className="d-block">
                  <i className="fas fa-cog pr-4"></i>
                  Superadmin
                </span>
                <span className="d-block">
                  { collapseOption.superadmin ?
                    <i className="ni ni-bold-down text-info"></i>
                    :
                    <i className="ni ni-bold-right"></i>
                  }
                </span>
              </a>
            </li>
            <span className={`${collapseOption.superadmin ? '' : "d-none"}`}>
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
            </span>
          </Nav>
          {/* Divider */}
          <hr className="my-3" />
          {/* Heading */}
          <h6 className="navbar-heading text-muted">Documentación</h6>
          {/* Navigation */}
          <Nav className="mb-md-3" navbar>
            <NavItem>
              <NavLink href="#">
                <i className="ni ni-spaceship" />
                ¿Como usar ConnectUs?
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <i className="ni ni-book-bookmark" />
                Manual de uso de API
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <i className="ni ni-support-16" />
                Manual de plataforma
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

// Sidebar.defaultProps = {
//   routes: [{}],
// };