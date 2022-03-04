import React from "react"
import {
  Card,
  CardHeader,
  CardFooter,
  Media,
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

export default function Postpago(){
  return (
    <Container className="pt-7" fluid>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h1 className="mb-0">Clientes Post Pago</h1>
        </div>
      </div>
      <hr className="mt-3"/>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row>
                <Col md="7">
                  <h2>Cierres seleccionados 
                    <Button
                      className="ml-4"
                      color="default"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Cierre Multiple
                    </Button>
                  </h2>
                </Col>
                <Col md='5'>
                  <Input
                      className="form-control-alternative"
                      id="input-phone"
                      placeholder="Buscar..."
                      type="text"
                    />
                </Col>
              </Row>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive borderless>
              <thead className="thead-light">
                <tr>
                  <th scope="col"></th>
                  <th scope="col" className="text-center">Cliente</th>
                  <th scope="col" className="text-center">Consumo ultimo mes</th>
                  <th scope="col" className="text-center">Tipo de envio</th>
                  <th scope="col" className="text-center">Estado</th>
                  <th scope="col" className="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row"></th>
                  <td>
                    <Media className="align-items-center">
                      <a
                        className="avatar rounded-circle mr-3 bg-green"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                      >
                        {/* <img
                          alt="..."
                          src={
                            require("assets/img/theme/bootstrap.jpg")
                          }
                        /> */}
                      </a>
                      <Media>
                        <span className="mb-0 text-sm">
                          Claro Chile / 76.388.584-5
                        </span>
                      </Media>
                    </Media>
                  </td>
                  <td className="text-center text-info">
                    ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)}
                  </td>
                  <td className="text-center">
                    <a href="#">183.484</a>
                  </td>
                  <td className="text-center text-info">Abierto</td>
                  <td className="text-center">
                    <a href="#" type="button" className="d-inline-block mx-4">Generar Cierre</a>
                    <a href="#" type="button" className="d-inline-block mx-4">Editar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td>
                    <Media className="align-items-center">
                      <a
                        className="avatar rounded-circle mr-3 bg-green"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                      >
                        {/* <img
                          alt="..."
                          src={
                            require("assets/img/theme/bootstrap.jpg")
                          }
                        /> */}
                      </a>
                      <Media>
                        <span className="mb-0 text-sm">
                          Brauna / 76.388.584-5
                        </span>
                      </Media>
                    </Media>
                  </td>
                  <td className="text-center text-info">
                    ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)}
                  </td>
                  <td className="text-center">
                    <a href="#">183.484</a>
                  </td>
                  <td className="text-center text-info">Abierto</td>
                  <td className="text-center">
                    <a href="#" type="button" className="d-inline-block mx-4">Generar Cierre</a>
                    <a href="#" type="button" className="d-inline-block mx-4">Editar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td>
                    <Media className="align-items-center">
                      <a
                        className="avatar rounded-circle mr-3 bg-red"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                      >
                        {/* <img
                          alt="..."
                          src={
                            require("assets/img/theme/bootstrap.jpg")
                          }
                        /> */}
                      </a>
                      <Media>
                        <span className="mb-0 text-sm">
                          CTHC / 76.388.584-5
                        </span>
                      </Media>
                    </Media>
                  </td>
                  <td className="text-center text-info">
                    ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)}
                  </td>
                  <td className="text-center">
                    <a href="#">183.484</a>
                  </td>
                  <td className="text-center text-info">Abierto</td>
                  <td className="text-center">
                    <a href="#" type="button" className="d-inline-block mx-4">Generar Cierre</a>
                    <a href="#" type="button" className="d-inline-block mx-4">Editar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td>
                    <Media className="align-items-center">
                      <a
                        className="avatar rounded-circle mr-3 bg-gray"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                      >
                        {/* <img
                          alt="..."
                          src={
                            require("assets/img/theme/bootstrap.jpg")
                          }
                        /> */}
                      </a>
                      <Media>
                        <span className="mb-0 text-sm">
                          RH Producciones / 76.388.584-5
                        </span>
                      </Media>
                    </Media>
                  </td>
                  <td className="text-center text-info">
                    ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)}
                  </td>
                  <td className="text-center">
                    <a href="#">183.484</a>
                  </td>
                  <td className="text-center text-success">Cerrado</td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2 text-warning">
                      <i className="ni ni-cloud-upload-96 mr-2"></i>
                      Subir Factura
                    </a>
                    <a href="#" type="button" className="d-inline-block mx-4">Editar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row"></th>
                  <td>
                    <Media className="align-items-center">
                      <a
                        className="avatar rounded-circle mr-3 bg-yellow"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                      >
                        {/* <img
                          alt="..."
                          src={
                            require("assets/img/theme/bootstrap.jpg")
                          }
                        /> */}
                      </a>
                      <Media>
                        <span className="mb-0 text-sm">
                          CTHC / 76.388.584-5
                        </span>
                      </Media>
                    </Media>
                  </td>
                  <td className="text-center text-info">
                    ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)}
                  </td>
                  <td className="text-center">
                    <a href="#">183.484</a>
                  </td>
                  <td className="text-center text-success">Cerrado</td>
                  <td className="text-center">
                    <a href="#" type="button" className="d-inline-block mx-4">Generar Cierre</a>
                    <a href="#" type="button" className="d-inline-block mx-4">Editar</a>
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