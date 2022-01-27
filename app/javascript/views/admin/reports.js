import React from "react"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Button,
  Container,
  Row,
  Col,
  Input,
} from "reactstrap";

export default function Reports(){
  const [productType, setProductType] = React.useState('sms')

  return (
    <Container className="pt-7" fluid>
      <div className="d-flex justify-content-between">
        <h1 className="mb-0">Reportes</h1>
      </div>
      <hr className="mt-3"/>
      <Row>
        <Col md="6">
          <Card className="shadow my-3">
            <CardBody className="bg-white">
              <div className="pl-lg-4">
                <FormGroup>
                  <Row className="my-3">
                    <Col md="3">
                      <label
                        className="form-control-label pt-2"
                        htmlFor="input-send"
                      >
                        Producto
                      </label>
                    </Col>
                    <Col md="9">
                      <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className={`btn btn-secondary ${productType === 'sms' ? 'active' : ''}`}>
                          <input onClick={event => setProductType(event.target.id)} type="radio" name="options" id="sms" defaultChecked /> SMS
                        </label>
                        <label className={`btn btn-secondary ${productType === 'email' ? 'active' : ''}`}>
                          <input onClick={event => setProductType(event.target.id)} type="radio" name="options" id="email" /> Email
                        </label>
                      </div>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col md="8">
                      <input className="form-control" type="datetime-local" defaultValue="2018-11-23T10:30:00"/>
                    </Col>
                    <Col md="4">
                      <Button
                        className="mt-1"
                        color="warning"
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                      >
                        Generar reporte
                      </Button>
                    </Col>
                  </Row>
                </FormGroup>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col>
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
                  <th scope="col" className="text-center">Reporte</th>
                  <th scope="col" className="text-center">Envío</th>
                  <th scope="col" className="text-center">Fecha y hora de generación</th>
                  <th scope="col" className="text-center">Usuario</th>
                  <th scope="col" className="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center text-info d-block" style={{ whiteSpace: 'initial'}}>
                      Reporte de envio Uso PLATAFORMA - SMS, Etiner DEV, mes de Septiembre 20-09-21
                    </span>
                  </th>
                  <td className="text-center" style={{ whiteSpace: 'initial'}}>Uso PLATAFORMA - SMS, Etiner DEV DEV, mes de Septiembre</td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    Etiner DEV
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Descargar</a>
                    <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center text-info d-block" style={{ whiteSpace: 'initial'}}>
                      Reporte de envio Uso PLATAFORMA - SMS, Etiner DEV, mes de Septiembre 20-09-21
                    </span>
                  </th>
                  <td className="text-center" style={{ whiteSpace: 'initial'}}>Uso PLATAFORMA - SMS, Etiner DEV DEV, mes de Septiembre</td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    Etiner DEV
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Descargar</a>
                    <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center text-info d-block" style={{ whiteSpace: 'initial'}}>
                      Reporte de envio Uso PLATAFORMA - SMS, Etiner DEV, mes de Septiembre 20-09-21
                    </span>
                  </th>
                  <td className="text-center" style={{ whiteSpace: 'initial'}}>Uso PLATAFORMA - SMS, Etiner DEV DEV, mes de Septiembre</td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    Etiner DEV
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Descargar</a>
                    <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center text-info d-block" style={{ whiteSpace: 'initial'}}>
                      Reporte de envio Uso PLATAFORMA - SMS, Etiner DEV, mes de Septiembre 20-09-21
                    </span>
                  </th>
                  <td className="text-center" style={{ whiteSpace: 'initial'}}>Uso PLATAFORMA - SMS, Etiner DEV DEV, mes de Septiembre</td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    Etiner DEV
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Descargar</a>
                    <a href="#" type="button" className="mx-2 text-red">Eliminar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center text-info d-block" style={{ whiteSpace: 'initial'}}>
                      Reporte de envio Uso PLATAFORMA - SMS, Etiner DEV, mes de Septiembre 20-09-21
                    </span>
                  </th>
                  <td className="text-center" style={{ whiteSpace: 'initial'}}>Uso PLATAFORMA - SMS, Etiner DEV DEV, mes de Septiembre</td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                  <td className="text-center">
                    Etiner DEV
                  </td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Descargar</a>
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
        </Col>
      </Row>
    </Container>
  )
}