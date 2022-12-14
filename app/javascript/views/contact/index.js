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

export default function Index(){
  return (
    <Container className="pt-7" fluid>
        <div className="d-flex justify-content-between">
          <h1 className="mb-0">Contactos</h1>
          <Button className="btn-outline-danger">
            Agregar contacto
          </Button>
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
                  <th scope="col" className="text-center">Nombre</th>
                  <th scope="col" className="text-center">Tipo</th>
                  <th scope="col" className="text-center">Número de contacto</th>
                  <th scope="col" className="text-center">Subido</th>
                  <th scope="col" className="text-center">última actualización</th>
                  <th scope="col" className="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center d-block">
                      Pedrito Clavo
                    </span>
                  </th>
                  <td className="text-center">Teléfono</td>
                  <td className="text-center">
                    3
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Descargar</a>
                    <a href="#" type="button" className="mx-2">Editar</a>
                    <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center d-block">
                      Pedrito Clavo
                    </span>
                  </th>
                  <td className="text-center">Teléfono </td>
                  <td className="text-center">
                    3
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Descargar</a>
                    <a href="#" type="button" className="mx-2">Editar</a>
                    <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center d-block">
                      Pedrito Clavo
                    </span>
                  </th>
                  <td className="text-center">Teléfono </td>
                  <td className="text-center">
                    3
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Descargar</a>
                    <a href="#" type="button" className="mx-2">Editar</a>
                    <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center d-block">
                      Pedrito Clavo
                    </span>
                  </th>
                  <td className="text-center">Teléfono </td>
                  <td className="text-center">
                    3
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Descargar</a>
                    <a href="#" type="button" className="mx-2">Editar</a>
                    <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center d-block">
                      Pedrito Clavo
                    </span>
                  </th>
                  <td className="text-center">Teléfono </td>
                  <td className="text-center">
                    3
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Descargar</a>
                    <a href="#" type="button" className="mx-2">Editar</a>
                    <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
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