import React from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  Col,
  Input,
  Modal,
  Button,
} from "reactstrap";

export default function Index() {
  const [showModalQuickView, setShowModalQuickView] = React.useState(false);

  return (
    <Container className="pt-7" fluid>
      <div className="d-flex justify-content-between">
        <h1 className="mb-0">Listado de Clientes</h1>
      </div>
      <hr className="mt-3" />
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row>
                <Col md={{ size: "5", offset: "7" }}>
                  <Input
                    className="form-control-alternative"
                    id="input-phone"
                    placeholder="Buscar"
                    type="text"
                  />
                </Col>
              </Row>
            </CardHeader>
            <Table
              className="align-items-center table-flush"
              responsive
              borderless
            >
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="text-center">
                    Estado
                  </th>
                  <th scope="col" className="text-center">
                    ID
                  </th>
                  <th scope="col" className="text-center">
                    Nombre del cliente
                  </th>
                  <th scope="col" className="text-center">
                    Email
                  </th>
                  <th scope="col" className="text-center">
                    Telefono
                  </th>
                  <th scope="col" className="text-center">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="text-center text-green">
                    Activo
                  </th>
                  <td className="mb-0 text-sm">
                    <NavLink
                      to={`/superadmin/clients/${3024}`}
                      className="text-info"
                    >
                      CL 3024
                    </NavLink>
                  </td>
                  <td className="text-center">
                    <NavLink
                      to={`/superadmin/clients/${3024}`}
                      className="text-info"
                    >
                      Comercial HER-NAN
                    </NavLink>
                  </td>
                  <td className="text-center">conhernan@outlock.com</td>
                  <td className="text-center">56999444003</td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2 text-red">
                      Bloquear
                    </a>
                    <a href="#" type="button" className="mx-2 text-green">
                      Validar
                    </a>
                    <a
                      type="button"
                      onClick={() => setShowModalQuickView(!showModalQuickView)}
                      className="mx-2"
                    >
                      Vista rápida
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-center text-green">
                    Activo
                  </th>
                  <td className="mb-0 text-sm">
                    <NavLink
                      to={`/superadmin/clients/${3023}`}
                      className="text-info"
                    >
                      CL 3023
                    </NavLink>
                  </td>
                  <td className="text-center">
                    <NavLink
                      to={`/superadmin/clients/${3023}`}
                      className="text-info"
                    >
                      STM imprenta y servicios
                    </NavLink>
                  </td>
                  <td className="text-center">stmimprenta@gmail.com</td>
                  <td className="text-center">56999333003</td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2 text-red">
                      Bloquear
                    </a>
                    <a href="#" type="button" className="mx-2 text-green">
                      Validar
                    </a>
                    <a
                      type="button"
                      onClick={() => setShowModalQuickView(!showModalQuickView)}
                      className="mx-2"
                    >
                      Vista rápida
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-center text-green">
                    Activo
                  </th>
                  <td className="mb-0 text-sm">
                    <NavLink
                      to={`/superadmin/clients/${3022}`}
                      className="text-info"
                    >
                      CL 3022
                    </NavLink>
                  </td>
                  <td className="text-center">
                    <NavLink
                      to={`/superadmin/clients/${3022}`}
                      className="text-info"
                    >
                      Infoservis
                    </NavLink>
                  </td>
                  <td className="text-center">infoservis@gmail.com</td>
                  <td className="text-center">56942316003</td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2 text-red">
                      Bloquear
                    </a>
                    <a href="#" type="button" className="mx-2 text-green">
                      Validar
                    </a>
                    <a
                      type="button"
                      onClick={() => setShowModalQuickView(!showModalQuickView)}
                      className="mx-2"
                    >
                      Vista rápida
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-center text-red">
                    Bloqueado
                  </th>
                  <td className="mb-0 text-sm">
                    <NavLink
                      to={`/superadmin/clients/${3021}`}
                      className="text-info"
                    >
                      CL 3021
                    </NavLink>
                  </td>
                  <td
                    className="text-center text-info"
                    style={{ whiteSpace: "initial" }}
                  >
                    <NavLink
                      to={`/superadmin/clients/${3021}`}
                      className="text-info"
                    >
                      Sociedad profesional medica neurologica limitada
                    </NavLink>
                  </td>
                  <td className="text-center">sfaris@gmail.com</td>
                  <td className="text-center">55656787879</td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2 text-red">
                      Bloquear
                    </a>
                    <a href="#" type="button" className="mx-2 text-green">
                      Validar
                    </a>
                    <a
                      type="button"
                      onClick={() => setShowModalQuickView(!showModalQuickView)}
                      className="mx-2"
                    >
                      Vista rápida
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-center text-red">
                    Bloqueado
                  </th>
                  <td className="mb-0 text-sm">
                    <NavLink
                      to={`/superadmin/clients/${3020}`}
                      className="text-info"
                    >
                      CL 3020
                    </NavLink>
                  </td>
                  <td className="text-center">
                    <NavLink
                      to={`/superadmin/clients/${3020}`}
                      className="text-info"
                    >
                      Comercial bachilenos SPA
                    </NavLink>
                  </td>
                  <td className="text-center">cbspa@gmail.com</td>
                  <td className="text-center">56070809040</td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2 text-red">
                      Bloquear
                    </a>
                    <a href="#" type="button" className="mx-2 text-green">
                      Validar
                    </a>
                    <a
                      type="button"
                      onClick={() => setShowModalQuickView(!showModalQuickView)}
                      className="mx-2"
                    >
                      Vista rápida
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
            <CardFooter className="py-4">
              <nav aria-label="...">
                <Pagination
                  className="pagination justify-content-end mb-0"
                  listClassName="justify-content-end mb-0"
                >
                  <PaginationItem className="disabled">
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      tabIndex="-1"
                    >
                      <i className="fas fa-angle-left" />
                      <span className="sr-only">Previous</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="active">
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      2 <span className="sr-only">(current)</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fas fa-angle-right" />
                      <span className="sr-only">Next</span>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </nav>
            </CardFooter>
          </Card>
        </div>
      </Row>

      <Modal
        className="modal-dialog-centered"
        isOpen={showModalQuickView}
        toggle={() => setShowModalQuickView(!showModalQuickView)}
      >
        <div className="modal-header">
          <h6 className="modal-title text-lg" id="modal-title-default">
            Comercial HER-NAN
          </h6>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setShowModalQuickView(!showModalQuickView)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <Row className="mb-2">
            <Col md="5" className="h3 font-weight-600">
              Contacto
            </Col>
          </Row>
          <Row className="mb-2">
            <Col md="5" className="font-weight-600">
              Dirección
            </Col>
            <Col md="7">Avenida los Datiles 5601 c66</Col>
          </Row>
          <Row className="mb-2">
            <Col md="5" className="font-weight-600">
              Email
            </Col>
            <Col md="7">ventas.brachileno@gmail.com</Col>
          </Row>
          <Row className="mb-2">
            <Col md="5" className="font-weight-600">
              Teléfono
            </Col>
            <Col md="7">56977747219</Col>
          </Row>
          <Row className="mb-2">
            <Col md="5" className="font-weight-600">
              RUT
            </Col>
            <Col md="7">76238856-1</Col>
          </Row>
          <hr />

          <Row className="mb-2">
            <Col md="5" className="h3 font-weight-600">
              Cuenta
            </Col>
          </Row>
          <Row className="mb-2">
            <Col md="5" className="font-weight-600">
              Creada
            </Col>
            <Col md="7">28/10/21 11:45</Col>
          </Row>
          <Row className="mb-2">
            <Col md="5" className="font-weight-600">
              Saldo
            </Col>
            <Col md="7">2848</Col>
          </Row>
          <Row className="mb-2">
            <Col md="5" className="font-weight-600">
              Número de envíos
            </Col>
            <Col md="7">3</Col>
          </Row>
          <hr />

          <Row className="mb-2">
            <Col md="5" className="h3 font-weight-600">
              Últimos mensajes
            </Col>
          </Row>
          <Row className="mb-2">
            <Col md="3" className="font-weight-600">
              56442347728
            </Col>
            <Col md="3">56987718903</Col>
            <Col md="6">
              Starken te recuerda que tienes un paquete por retirar en Agencia
              QUILLOTA PLAZA, Orden de Flete 960828479. Mas info en
              www.starken.cl
            </Col>
          </Row>
          <Row className="mb-2">
            <Col md="3" className="font-weight-600">
              56442347728
            </Col>
            <Col md="3">56987718903</Col>
            <Col md="6">
              Starken te recuerda que tienes un paquete por retirar en Agencia
              QUILLOTA PLAZA, Orden de Flete 960828479. Mas info en
              www.starken.cl
            </Col>
          </Row>
          <Row className="mb-2">
            <Col md="3" className="font-weight-600">
              56442347728
            </Col>
            <Col md="3">56987718903</Col>
            <Col md="6">
              Starken te recuerda que tienes un paquete por retirar en Agencia
              QUILLOTA PLAZA, Orden de Flete 960828479. Mas info en
              www.starken.cl
            </Col>
          </Row>
          <hr />

          <Row className="mb-2">
            <Col md="5" className="h3 font-weight-600">
              Usuarios
            </Col>
          </Row>
          <Row className="mb-2">
            <Col md="5" className="font-weight-600">
              comercial (ADMIN)
            </Col>
            <Col md="7">ventas.brachileno@gmail.com</Col>
          </Row>
        </div>
        <div className="modal-footer">
          <Button
            className="ml-auto"
            color="link"
            data-dismiss="modal"
            type="button"
            onClick={() => setShowModalQuickView(!showModalQuickView)}
          >
            Cerrar
          </Button>
        </div>
      </Modal>
    </Container>
  );
}
