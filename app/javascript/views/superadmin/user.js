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

export default function User(){
  return (
    <Container className="pt-7" fluid>
        <div className="d-flex justify-content-between">
          <h1 className="mb-0">Listado de Usuarios</h1>
        </div>
        <hr className="mt-3"/>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row>
                <Col md={{size:"5" , offset: "7"}}>
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
                  <th scope="col" className="text-center">Estado</th>
                  <th scope="col" className="text-center">Usuario</th>
                  <th scope="col" className="text-center">Tipo de usuario</th>
                  <th scope="col" className="text-center">Email</th>
                  <th scope="col" className="text-center">Pais</th>
                  <th scope="col" className="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th  scope="row" className="text-center text-green">Activo</th>
                  <td className="mb-0 text-sm">
                    Lorenzo Verdugo
                  </td>
                  <td className="text-center">Administracion de Cuenta</td>
                  <td className="text-center">lorenzo@etiner.com</td>
                  <td className="text-center">Chile</td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2 text-red">Desactivar</a>
                    <a href="#" type="button" className="mx-2">Editar</a>
                    <a href="#" type="button" className="mx-2">Vista rápida</a>
                  </td>
                </tr>
                <tr>
                  <th  scope="row" className="text-center text-green">Activo</th>
                  <td className="mb-0 text-sm">
                    Benjamin Vega
                  </td>
                  <td className="text-center">Administracion de Cuenta</td>
                  <td className="text-center">bejamin@etiner.com</td>
                  <td className="text-center">Chile</td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2 text-red">Desactivar</a>
                    <a href="#" type="button" className="mx-2">Editar</a>
                    <a href="#" type="button" className="mx-2">Vista rápida</a>
                  </td>
                </tr>
                <tr>
                  <th  scope="row" className="text-center text-green">Activo</th>
                  <td className="mb-0 text-sm">
                    Camilo Silva
                  </td>
                  <td className="text-center">Administracion de Cuenta</td>
                  <td className="text-center">camilo@etiner.com</td>
                  <td className="text-center">Chile</td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2 text-red">Desactivar</a>
                    <a href="#" type="button" className="mx-2">Editar</a>
                    <a href="#" type="button" className="mx-2">Vista rápida</a>
                  </td>
                </tr>
                <tr>
                  <th  scope="row" className="text-center text-red">Inactivo</th>
                  <td className="mb-0 text-sm">
                    Enzo Zerega
                  </td>
                  <td className="text-center">Regular</td>
                  <td className="text-center">Enzo@etiner.com</td>
                  <td className="text-center">Colombia</td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2 text-red">Desactivar</a>
                    <a href="#" type="button" className="mx-2">Editar</a>
                    <a href="#" type="button" className="mx-2">Vista rápida</a>
                  </td>
                </tr>
                <tr>
                  <th  scope="row" className="text-center text-green">Activo</th>
                  <td className="mb-0 text-sm">
                    Elvis Crespo
                  </td>
                  <td className="text-center">Regular</td>
                  <td className="text-center">elvis@etiner.com</td>
                  <td className="text-center">Peru</td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2 text-red">Desactivar</a>
                    <a href="#" type="button" className="mx-2">Editar</a>
                    <a href="#" type="button" className="mx-2">Vista rápida</a>
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