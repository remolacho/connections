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
          <div className="d-flex">
            <h1 className="mb-0">Clientes</h1>
            <select className="form-control ml-4">
              <option value="chile" defaultValue>Chile</option>
              <option value="argentina" >Argentina</option>
              <option value="bolivia">Bolivia</option>
              <option value="brasil">Brasil</option>
              <option value="colombia">Colombia</option>
              <option value="costa-rica">Costa Rica</option>
              <option value="ecuador">Ecuador</option>
              <option value="eeuu">EEUU</option>
              <option value="espana">Espana</option>
              <option value="guatemala">Guatemala</option>
              <option value="mexico">Mexico</option>
              <option value="paraguay">Paraguay</option>
              <option value="peru">Peru</option>
              <option value="suecia">Suecia</option>
              <option value="uruguay">Uruguay</option>
            </select>
          </div>
          <Button className="btn-outline-danger">
            Invitar Clientes
          </Button>
        </div>
        <hr className="mt-3"/>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row>
                <Col md="7">
                  <h2>SALDO NO ASIGANDO: <span className="text-green">999</span> Creditos en Chile</h2>
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
                  <th scope="col" className="text-center">Usuario</th>
                  <th scope="col" className="text-center">Saldo en Chile</th>
                  <th scope="col" className="text-center">Tipo Cliente</th>
                  <th scope="col" className="text-center">Paises</th>
                  <th scope="col" className="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
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
                          Lorenzo Verdugo
                        </span>
                      </Media>
                    </Media>
                  </th>
                  <td className="text-center text-info">59</td>
                  <td className="text-center">Admin</td>
                  <td className="text-center">Todos</td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Enviar recuperar clave</a>
                    <a href="#" type="button" className="mx-2">Editar</a>
                    <a href="#" type="button" className="mx-2 text-red">Desactivar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
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
                          Benjamin Vega
                        </span>
                      </Media>
                    </Media>
                  </th>
                  <td className="text-center text-info">49</td>
                  <td className="text-center">Admin</td>
                  <td className="text-center">Todos</td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Enviar recuperar clave</a>
                    <a href="#" type="button" className="mx-2">Editar</a>
                    <a href="#" type="button" className="mx-2 text-red">Desactivar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <Media className="align-items-center">
                      <a
                        className="avatar rounded-circle mr-3 bg-purple"
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
                          Camilo Silva
                        </span>
                      </Media>
                    </Media>
                  </th>
                  <td className="text-center text-info">23</td>
                  <td className="text-center">Cliente</td>
                  <td className="text-center">Chile</td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Enviar recuperar clave</a>
                    <a href="#" type="button" className="mx-2">Editar</a>
                    <a href="#" type="button" className="mx-2 text-red">Desactivar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <Media className="align-items-center">
                      <a
                        className="avatar rounded-circle mr-3 bg-brown"
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
                          Enzo Zerega
                        </span>
                      </Media>
                    </Media>
                  </th>
                  <td className="text-center text-info">84</td>
                  <td className="text-center">Cliente</td>
                  <td className="text-center">Peru</td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Enviar recuperar clave</a>
                    <a href="#" type="button" className="mx-2">Editar</a>
                    <a href="#" type="button" className="mx-2 text-red">Desactivar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <Media className="align-items-center">
                      <a
                        className="avatar rounded-circle mr-3 bg-orange"
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
                          Elviz Crespo
                        </span>
                      </Media>
                    </Media>
                  </th>
                  <td className="text-center text-info">28</td>
                  <td className="text-center">Cliente</td>
                  <td className="text-center">Chile, Peru, EEUU y Mexico</td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Enviar recuperar clave</a>
                    <a href="#" type="button" className="mx-2">Editar</a>
                    <a href="#" type="button" className="mx-2 text-red">Desactivar</a>
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