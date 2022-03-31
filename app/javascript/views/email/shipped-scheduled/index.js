import React from "react"
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
  Button,
  Input
} from "reactstrap";

export default function ShippedScheduled(){
  return (
    <Container className="pt-7" fluid>
        <div className="d-flex justify-content-between">
          <h1 className="mb-0">Historial de envíos de EMAIL</h1>
          <NavLink to="/email/send" type="button" className="btn button--secondary">
            Enviar Email
          </NavLink>
        </div>
        <hr className="mt-3"/>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row>
                <Col md="7">
                  <h2>Mensajes</h2>
                </Col>
                <Col md='5'>
                  <Input
                      className="form-control-alternative"
                      id="input-phone"
                      placeholder="Buscar"
                      type="text"
                    />
                </Col>
              </Row>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive borderless>
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="text-center title-with-sort">
                    Nombre
                    <i class="fas fa-sort"></i>
                  </th>
                  <th scope="col" className="text-center title-with-sort">
                    Tipo
                    <i class="fas fa-sort"></i>
                  </th>
                  <th scope="col" className="text-center title-with-sort">
                    Fecha de creación (fecha programada)
                    <i class="fas fa-sort"></i>
                  </th>
                  <th scope="col" className="text-center title-with-sort">
                    Emails
                    <i class="fas fa-sort"></i>
                  </th>
                  <th scope="col" className="text-center title-with-sort">
                    Enviados
                    <i class="fas fa-sort"></i>
                  </th>
                  <th scope="col" className="text-center title-with-sort">
                    Acciones
                    <i class="fas fa-sort"></i>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <NavLink to={`/email/shipped-and-scheduled/${12312123}`} className="mb-0 text-sm d-block" style={{ whiteSpace: 'initial'}}>
                      Uso PLATAFORMA - EMAIL, Etiner Dev, mes de septiembre
                    </NavLink>
                  </th>
                  <td className="text-center">EMAIL individual plataforma</td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    1
                  </td>
                  <td className="text-center text-green">
                    100%
                  </td>
                  <td className="text-center">
                    <NavLink to={`/email/shipped-and-scheduled/${12312123}`}>
                      <i className="far fa-eye text-info"></i>
                    </NavLink>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <NavLink to={`/email/shipped-and-scheduled/${12312123}`} className="mb-0 text-sm d-block" style={{ whiteSpace: 'initial'}}>
                      Uso PLATAFORMA - EMAIL, Etiner Dev, mes de septiembre
                    </NavLink>
                  </th>
                  <td className="text-center">EMAIL individual plataforma</td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    150
                  </td>
                  <td className="text-center text-red">
                    80%
                  </td>
                  <td className="text-center">
                    <NavLink to={`/email/shipped-and-scheduled/${12312123}`}>
                      <i className="far fa-eye text-info"></i>
                    </NavLink>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <NavLink to={`/email/shipped-and-scheduled/${12312123}`} className="mb-0 text-sm d-block" style={{ whiteSpace: 'initial'}}>
                      Uso PLATAFORMA - EMAIL, Etiner Dev, mes de septiembre
                    </NavLink>
                  </th>
                  <td className="text-center">EMAIL individual plataforma</td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    15
                  </td>
                  <td className="text-center text-green">
                    100%
                  </td>
                  <td className="text-center">
                    <NavLink to={`/email/shipped-and-scheduled/${12312123}`}>
                      <i className="far fa-eye text-info"></i>
                    </NavLink>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <NavLink to={`/email/shipped-and-scheduled/${12312123}`} className="mb-0 text-sm d-block" style={{ whiteSpace: 'initial'}}>
                      Uso PLATAFORMA - EMAIL, Etiner Dev, mes de septiembre
                    </NavLink>
                  </th>
                  <td className="text-center">EMAIL individual plataforma</td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    40
                  </td>
                  <td className="text-center text-red">
                    75%
                  </td>
                  <td className="text-center">
                    <NavLink to={`/email/shipped-and-scheduled/${12312123}`}>
                      <i className="far fa-eye text-info"></i>
                    </NavLink>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <NavLink to={`/email/shipped-and-scheduled/${12312123}`} className="mb-0 text-sm d-block" style={{ whiteSpace: 'initial'}}>
                      Uso PLATAFORMA - EMAIL, Etiner Dev, mes de septiembre
                    </NavLink>
                  </th>
                  <td className="text-center">EMAIL individual plataforma</td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    12
                  </td>
                  <td className="text-center text-green">
                    100%
                  </td>
                  <td className="text-center">
                    <NavLink to={`/email/shipped-and-scheduled/${12312123}`}>
                      <i className="far fa-eye text-info"></i>
                    </NavLink>
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
    </Container>
  )
}