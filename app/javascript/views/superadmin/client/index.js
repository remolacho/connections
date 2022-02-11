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
  Input
} from "reactstrap";

export default function Index(){
  return (
    <Container className="pt-7" fluid>
        <div className="d-flex justify-content-between">
          <h1 className="mb-0">Listado de Clientes</h1>
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
                  <th scope="col" className="text-center">ID</th>
                  <th scope="col" className="text-center">Nombre del cliente</th>
                  <th scope="col" className="text-center">Email</th>
                  <th scope="col" className="text-center">Telefono</th>
                  <th scope="col" className="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th  scope="row" className="text-center text-green">Activo</th>
                  <td className="mb-0 text-sm text-info">CL 3024</td>
                  <td className="text-center text-info">Comercial HER-NAN</td>
                  <td className="text-center">conhernan@outlock.com</td>
                  <td className="text-center">56999444003</td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2 text-red">Bloquear</a>
                    <a href="#" type="button" className="mx-2 text-green">Validar</a>
                    <a href="#" type="button" className="mx-2">Vista rápida</a>
                  </td>
                </tr>
                <tr>
                  <th  scope="row" className="text-center text-green">Activo</th>
                  <td className="mb-0 text-sm text-info">CL 3023</td>
                  <td className="text-center text-info">STM imprenta y servicios</td>
                  <td className="text-center">stmimprenta@gmail.com</td>
                  <td className="text-center">56999333003</td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2 text-red">Bloquear</a>
                    <a href="#" type="button" className="mx-2 text-green">Validar</a>
                    <a href="#" type="button" className="mx-2">Vista rápida</a>
                  </td>
                </tr>
                <tr>
                  <th  scope="row" className="text-center text-green">Activo</th>
                  <td className="mb-0 text-sm text-info">CL 3022</td>
                  <td className="text-center text-info">Infoservis</td>
                  <td className="text-center">infoservis@gmail.com</td>
                  <td className="text-center">56942316003</td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2 text-red">Bloquear</a>
                    <a href="#" type="button" className="mx-2 text-green">Validar</a>
                    <a href="#" type="button" className="mx-2">Vista rápida</a>
                  </td>
                </tr>
                <tr>
                  <th  scope="row" className="text-center text-red">Bloqueado</th>
                  <td className="mb-0 text-sm text-info">CL 3021</td>
                  <td className="text-center text-info" style={{ whiteSpace: 'initial'}}>Sociedad profesional medica neurologica limitada</td>
                  <td className="text-center">sfaris@gmail.com</td>
                  <td className="text-center">55656787879</td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2 text-red">Bloquear</a>
                    <a href="#" type="button" className="mx-2 text-green">Validar</a>
                    <a href="#" type="button" className="mx-2">Vista rápida</a>
                  </td>
                </tr>
                <tr>
                <th  scope="row" className="text-center text-red">Bloqueado</th>
                  <td className="mb-0 text-sm text-info">CL 3020</td>
                  <td className="text-center text-info">Comercial bachilenos SPA</td>
                  <td className="text-center">cbspa@gmail.com</td>
                  <td className="text-center">56070809040</td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2 text-red">Bloquear</a>
                    <a href="#" type="button" className="mx-2 text-green">Validar</a>
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