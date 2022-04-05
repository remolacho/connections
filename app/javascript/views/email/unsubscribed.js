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

export default function Unsubscribed(){
  return (
    <Container className="pt-7" fluid>
        <div className="d-flex justify-content-between">
          <h1 className="mb-0">EMAIL desuscritos</h1>
          <button className="btn button--secondary">
            Generar reporte
          </button>
        </div>
        <hr className="mt-3"/>
      <Row className="mb-4">
        <Col>
          <div className="d-flex align-items-end">
            <p className="h3 d-inline-block pr-3">Tu correo de origen es:</p>
            <select className="form-control w-auto">
              <option value="correo1@gmail.com" defaultValue>correo1@gmail.com</option>
              <option value="correo2@gmail.com" >correo2@gmail.com</option>
            </select>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row>
                <Col md="7">
                  <h2>Emails</h2>
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
                    Email de origen
                    <i class="fas fa-sort"></i>
                  </th>
                  <th scope="col" className="text-center title-with-sort">
                    Email de destino
                    <i class="fas fa-sort"></i>
                  </th>
                  <th scope="col" className="text-center title-with-sort">
                    Fecha y hora de registro
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
                  <th scope="row" className="text-sm text-center">
                    marketing@etiner.com
                  </th>
                  <td className="text-center">
                    camilo@etiner.com
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Volver a suscribir</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-sm text-center">
                    marketing@etiner.com
                  </th>
                  <td className="text-center">
                    camilo@etiner.com
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Volver a suscribir</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-sm text-center">
                    marketing@etiner.com
                  </th>
                  <td className="text-center">
                    camilo@etiner.com
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Volver a suscribir</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-sm text-center">
                    marketing@etiner.com
                  </th>
                  <td className="text-center">
                    camilo@etiner.com
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Volver a suscribir</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="text-sm text-center">
                    marketing@etiner.com
                  </th>
                  <td className="text-center">
                    camilo@etiner.com
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Volver a suscribir</a>
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