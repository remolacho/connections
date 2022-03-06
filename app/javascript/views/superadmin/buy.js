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
  const [buyState, setBuyState] = React.useState('open')
  console.log(buyState)

  return (
    <Container className="pt-7" fluid>
      <div className="d-flex justify-content-between">
        <h1 className="mb-0">Historial de compras</h1>
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
                        Estado
                      </label>
                    </Col>
                    <Col md="9">
                      <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className={`btn btn-secondary ${buyState === 'open' ? 'active' : ''}`}>
                          <input onClick={event => setBuyState(event.target.id)} type="radio" name="options" id="open" defaultChecked /> Abiertas
                        </label>
                        <label className={`btn btn-secondary ${buyState === 'closed' ? 'active' : ''}`}>
                          <input onClick={event => setBuyState(event.target.id)} type="radio" name="options" id="closed" defaultChecked /> Cerradas
                        </label>
                        <label className={`btn btn-secondary ${buyState === 'all' ? 'active' : ''}`}>
                          <input onClick={event => setBuyState(event.target.id)} type="radio" name="options" id="all" /> All
                        </label>
                      </div>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row className="d-flex align-items-end">
                    <Col md="8">
                      <input className="form-control" type="datetime-local" defaultValue="2018-11-23T10:30:00"/>
                    </Col>
                    <Col md="4">
                      <Button
                        className="mt-1"
                        color="warning"
                        onClick={(e) => e.preventDefault()}
                      >
                        Buscar
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
                  <th scope="col" className="text-center">Detalle</th>
                  <th scope="col" className="text-center">Monto</th>
                  <th scope="col" className="text-center">Fecha</th>
                  <th scope="col" className="text-center">Pago</th>
                  <th scope="col" className="text-center">Estado</th>
                  <th scope="col" className="text-center">Acciones</th>
                  <th scope="col" className="text-center"></th>
                </tr>
              </thead>
              <tbody>
                {/* Abiertas */}
                { (buyState === "open" || buyState === "all") &&
                  <>
                    <tr>
                      <th scope="row" className="pt-3 pb-0">
                        <div className="col border-info border-left cn-border-3">
                          <p className="mb-0 text-sm font-weight-600">
                            Brisaguas / 96.864.190-5
                          </p>
                          <p className="mb-0 text-sm text-xs"> 
                            1.000 Creditos
                          </p>
                          <p className="text-sm font-weight-600 text-blue">
                            22ff9e3023024c8e84117f49138896c5
                          </p>
                        </div>
                      </th>
                      <td className="text-center py-0">
                        ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574059)}
                      </td>
                      <td className="text-center py-0">
                        22/09/21 18:15
                      </td>
                      <td className="text-center py-0">Khipu</td>
                      <td className="text-center py-0 text-info">Carrito</td>
                      <td className="text-center py-0">
                        <a href="#" type="button" className="mx-2">Validar</a>
                      </td>
                      <td className="text-center py-0">
                        <i className="fas fa-ellipsis-v ml-3"></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="py-0">
                        <div className="col border-info border-left cn-border-3">
                          <p className="mb-0 text-sm font-weight-600">
                            Brisaguas / 96.864.190-5
                          </p>
                          <p className="mb-0 text-sm text-xs"> 
                            1.000 Creditos
                          </p>
                          <p className="text-sm font-weight-600 text-blue">
                            22ff9e3023024c8e84117f49138896c5
                          </p>
                        </div>
                      </th>
                      <td className="text-center py-0">
                        ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574059)}
                      </td>
                      <td className="text-center py-0">
                        22/09/21 18:15
                      </td>
                      <td className="text-center py-0">Khipu</td>
                      <td className="text-center py-0 text-info">Carrito</td>
                      <td className="text-center py-0">
                        <a href="#" type="button" className="mx-2">Validar</a>
                      </td>
                      <td className="text-center py-0">
                        <i className="fas fa-ellipsis-v ml-3"></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="py-0">
                        <div className="col border-info border-left cn-border-3">
                          <p className="mb-0 text-sm font-weight-600">
                            Brisaguas / 96.864.190-5
                          </p>
                          <p className="mb-0 text-sm text-xs"> 
                            1.000 Creditos
                          </p>
                          <p className="text-sm font-weight-600 text-blue">
                            22ff9e3023024c8e84117f49138896c5
                          </p>
                        </div>
                      </th>
                      <td className="text-center py-0">
                        ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574059)}
                      </td>
                      <td className="text-center py-0">
                        22/09/21 18:15
                      </td>
                      <td className="text-center py-0">Khipu</td>
                      <td className="text-center py-0 text-info">Carrito</td>
                      <td className="text-center py-0">
                        <a href="#" type="button" className="mx-2">Validar</a>
                      </td>
                      <td className="text-center py-0">
                        <i className="fas fa-ellipsis-v ml-3"></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="py-0">
                        <div className="col border-info border-left cn-border-3">
                          <p className="mb-0 text-sm font-weight-600">
                            Brisaguas / 96.864.190-5
                          </p>
                          <p className="mb-0 text-sm text-xs"> 
                            1.000 Creditos
                          </p>
                          <p className="text-sm font-weight-600 text-blue">
                            22ff9e3023024c8e84117f49138896c5
                          </p>
                        </div>
                      </th>
                      <td className="text-center py-0">
                        ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574059)}
                      </td>
                      <td className="text-center py-0">
                        22/09/21 18:15
                      </td>
                      <td className="text-center py-0">Khipu</td>
                      <td className="text-center py-0 text-info">Carrito</td>
                      <td className="text-center py-0">
                        <a href="#" type="button" className="mx-2">Validar</a>
                      </td>
                      <td className="text-center py-0">
                        <i className="fas fa-ellipsis-v ml-3"></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="py-0">
                        <div className="col border-info border-left cn-border-3">
                          <p className="mb-0 text-sm font-weight-600">
                            Brisaguas / 96.864.190-5
                          </p>
                          <p className="mb-0 text-sm text-xs"> 
                            1.000 Creditos
                          </p>
                          <p className="text-sm font-weight-600 text-blue">
                            22ff9e3023024c8e84117f49138896c5
                          </p>
                        </div>
                      </th>
                      <td className="text-center py-0">
                        ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574059)}
                      </td>
                      <td className="text-center py-0">
                        22/09/21 18:15
                      </td>
                      <td className="text-center py-0">Khipu</td>
                      <td className="text-center py-0 text-info">Carrito</td>
                      <td className="text-center py-0">
                        <a href="#" type="button" className="mx-2">Validar</a>
                      </td>
                      <td className="text-center py-0">
                        <i className="fas fa-ellipsis-v ml-3"></i>
                      </td>
                    </tr>
                  </>
                }

                {/* Cerradas */}
                { (buyState === "closed" || buyState === "all") &&
                  <>
                    <tr>
                      <th scope="row" className="pt-3 pb-0">
                        <div className="col border-success border-left cn-border-3">
                          <p className="mb-0 text-sm font-weight-600">
                            Brisaguas / 96.864.190-5
                          </p>
                          <p className="mb-0 text-sm text-xs"> 
                            1.000 Creditos
                          </p>
                          <p className="text-sm font-weight-600 text-blue">
                            22ff9e3023024c8e84117f49138896c5
                          </p>
                        </div>
                      </th>
                      <td className="text-center py-0">
                        ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574059)}
                      </td>
                      <td className="text-center py-0">
                        22/09/21 18:15
                      </td>
                      <td className="text-center py-0">Khipu</td>
                      <td className="text-center py-0 text-green">Cerrado</td>
                      <td className="text-center py-0">
                        <a href="#" type="button" className="mx-2 text-warning">
                          <i className="ni ni-cloud-upload-96 mr-2"></i>
                          Subir Factura
                        </a>
                      </td>
                      <td className="text-center py-0">
                        <i className="fas fa-ellipsis-v ml-3"></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="py-0">
                        <div className="col border-success border-left cn-border-3">
                          <p className="mb-0 text-sm font-weight-600">
                            Brisaguas / 96.864.190-5
                          </p>
                          <p className="mb-0 text-sm text-xs"> 
                            1.000 Creditos
                          </p>
                          <p className="text-sm font-weight-600 text-blue">
                            22ff9e3023024c8e84117f49138896c5
                          </p>
                        </div>
                      </th>
                      <td className="text-center py-0">
                        ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574059)}
                      </td>
                      <td className="text-center py-0">
                        22/09/21 18:15
                      </td>
                      <td className="text-center py-0">Khipu</td>
                      <td className="text-center py-0 text-green">Cerrado</td>
                      <td className="text-center py-0">
                        <a href="#" type="button" className="mx-2 text-warning">
                          <i className="ni ni-cloud-upload-96 mr-2"></i>
                          Subir Factura
                        </a>
                      </td>
                      <td className="text-center py-0">
                        <i className="fas fa-ellipsis-v ml-3"></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="py-0">
                        <div className="col border-success border-left cn-border-3">
                          <p className="mb-0 text-sm font-weight-600">
                            Brisaguas / 96.864.190-5
                          </p>
                          <p className="mb-0 text-sm text-xs"> 
                            1.000 Creditos
                          </p>
                          <p className="text-sm font-weight-600 text-blue">
                            22ff9e3023024c8e84117f49138896c5
                          </p>
                        </div>
                      </th>
                      <td className="text-center py-0">
                        ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574059)}
                      </td>
                      <td className="text-center py-0">
                        22/09/21 18:15
                      </td>
                      <td className="text-center py-0">Khipu</td>
                      <td className="text-center py-0 text-green">Cerrado</td>
                      <td className="text-center py-0">
                        <a href="#" type="button" className="mx-2">
                          <i className="fas fa-file-pdf mr-2"></i>
                          Descargar
                        </a>
                      </td>
                      <td className="text-center py-0">
                        <i className="fas fa-ellipsis-v ml-3"></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="py-0">
                        <div className="col border-success border-left cn-border-3">
                          <p className="mb-0 text-sm font-weight-600">
                            Brisaguas / 96.864.190-5
                          </p>
                          <p className="mb-0 text-sm text-xs"> 
                            1.000 Creditos
                          </p>
                          <p className="text-sm font-weight-600 text-blue">
                            22ff9e3023024c8e84117f49138896c5
                          </p>
                        </div>
                      </th>
                      <td className="text-center py-0">
                        ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574059)}
                      </td>
                      <td className="text-center py-0">
                        22/09/21 18:15
                      </td>
                      <td className="text-center py-0">Khipu</td>
                      <td className="text-center py-0 text-green">Cerrado</td>
                      <td className="text-center py-0">
                        <a href="#" type="button" className="mx-2">
                          <i className="fas fa-file-pdf mr-2"></i>
                          Descargar
                        </a>
                      </td>
                      <td className="text-center py-0">
                        <i className="fas fa-ellipsis-v ml-3"></i>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="py-0">
                        <div className="col border-success border-left cn-border-3">
                          <p className="mb-0 text-sm font-weight-600">
                            Brisaguas / 96.864.190-5
                          </p>
                          <p className="mb-0 text-sm text-xs"> 
                            1.000 Creditos
                          </p>
                          <p className="text-sm font-weight-600 text-blue">
                            22ff9e3023024c8e84117f49138896c5
                          </p>
                        </div>
                      </th>
                      <td className="text-center py-0">
                        ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574059)}
                      </td>
                      <td className="text-center py-0">
                        22/09/21 18:15
                      </td>
                      <td className="text-center py-0">Khipu</td>
                      <td className="text-center py-0 text-green">Cerrado</td>
                      <td className="text-center py-0">
                        <a href="#" type="button" className="mx-2">
                          <i className="fas fa-file-pdf mr-2"></i>
                          Descargar
                        </a>
                      </td>
                      <td className="text-center py-0">
                        <i className="fas fa-ellipsis-v ml-3"></i>
                      </td>
                    </tr>
                  </>
                }
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