import React from "react"
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

export default function AutoPreset(){
  return (
    <Container className="pt-7" fluid>
        <div className="d-flex justify-content-between">
          <h1 className="mb-0">SMS automáticos y predefinidos</h1>
          <button className="btn button--secondary">
            Enviar SMS
          </button>
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
            {/* <Row>
              <Col md='12'> */}
                <Table className="align-items-center table-flush" responsive borderless>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col" className="text-center table-header">
                        Nombre
                        <i class="fas fa-sort"></i>
                      </th>
                      <th scope="col" className="text-center table-header">
                        Contenido
                        <i class="fas fa-sort"></i></th>
                      <th scope="col" className="text-center table-header">
                        SMS automático
                        <i class="fas fa-sort"></i></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <span className="mb-0 text-sm text-center d-block">
                          Mensaje TT.OO Ecoaventura
                        </span>
                      </th>
                      <td className="px-9" style={{ whiteSpace: 'initial'}}>
                        <span>
                          Hola! Ecoaventura quisiera saber si tienen disponibilidad para 2 personas
                          para las siguientes actividades: Orden 9265
                        </span>
                      </td>
                      <td className="text-center">
                        <a href="#" type="button" className="mx-2">Editar</a>
                        <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <span className="mb-0 text-sm text-center d-block">
                          Mensaje TT.OO Ecoaventura
                        </span>
                      </th>
                      <td className="px-9" style={{ whiteSpace: 'initial'}}>
                        <span>
                          Hola! Ecoaventura quisiera saber si tienen disponibilidad para 2 personas
                          para las siguientes actividades: Orden 9265
                        </span>
                      </td>
                      <td className="text-center">
                        <a href="#" type="button" className="mx-2">Editar</a>
                        <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <span className="mb-0 text-sm text-center d-block">
                          Mensaje TT.OO Ecoaventura
                        </span>
                      </th>
                      <td className="px-9" style={{ whiteSpace: 'initial'}}>
                        <span>
                          Hola! Ecoaventura quisiera saber si tienen disponibilidad para 2 personas
                          para las siguientes actividades: Orden 9265
                        </span>
                      </td>
                      <td className="text-center">
                        <a href="#" type="button" className="mx-2">Editar</a>
                        <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <span className="mb-0 text-sm text-center d-block">
                          Mensaje TT.OO Ecoaventura
                        </span>
                      </th>
                      <td className="px-9" style={{ whiteSpace: 'initial'}}>
                        <span>
                          Hola! Ecoaventura quisiera saber si tienen disponibilidad para 2 personas
                          para las siguientes actividades: Orden 9265
                        </span>
                      </td>
                      <td className="text-center">
                        <a href="#" type="button" className="mx-2">Editar</a>
                        <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <span className="mb-0 text-sm text-center d-block">
                          Mensaje TT.OO Ecoaventura
                        </span>
                      </th>
                      <td className="px-9" style={{ whiteSpace: 'initial'}}>
                        <span>
                          Hola! Ecoaventura quisiera saber si tienen disponibilidad para 2 personas
                          para las siguientes actividades: Orden 9265
                        </span>
                      </td>
                      <td className="text-center">
                        <a href="#" type="button" className="mx-2">Editar</a>
                        <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              {/* </Col>
            </Row> */}
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