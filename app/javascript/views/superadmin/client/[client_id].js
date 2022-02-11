import React from "react"
import Chart from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { useParams } from "react-router-dom"
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Media,
  Table,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input
} from "reactstrap";

import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

export default function Client(){
  const params = useParams()
  console.log(params) // {client_id: #}

  const [chartExample1Data, setChartExample1Data] = React.useState("data1");
  const [dueDateBills, setDueDateBills] = React.useState('contado')

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  return (
    <Container className='pt-7' fluid>
      {/* Card stats */}
      <Row>
        <Col lg="6" xl="3">
          <Card className="card-stats mb-4 mb-xl-0 shadow">
            <CardBody>
              <Row>
                <Col className="d-flex justify-content-between">
                  <div>
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      Ventas
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">
                      ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574059)}
                    </span>
                  </div>
                  <div>
                    <Button
                      color="secondary"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      ...
                    </Button>
                  </div>
                </Col>
              </Row>
              <span className="d-block my-2" style={{ height: '4px'}}></span>
              <p className="mb-0 font-weight-600 text-xs">
                Ver más detalles
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6" xl="3">
          <Card className="card-stats mb-4 mb-xl-0 shadow">
            <CardBody>
              <Row>
                <Col className="d-flex justify-content-between">
                  <div>
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      Por Cobrar
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">
                      ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(380085)}
                    </span>
                  </div>
                  <div>
                    <Button
                      color="secondary"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      ...
                    </Button>
                  </div>
                </Col>
              </Row>
              <span className="d-block my-2" style={{ height: '4px'}}></span>
              <p className="mb-0 font-weight-600 text-xs">
                Ver más detalles
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6" xl="3">
          <Card className="card-stats mb-4 mb-xl-0 shadow">
            <CardBody>
              <Row>
                <Col className="d-flex justify-content-between">
                  <div>
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      Días de Pago
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">
                      12 Días
                    </span>
                  </div>
                  <div>
                    <Button
                      color="secondary"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      ...
                    </Button>
                  </div>
                </Col>
              </Row>
              <span className="d-block my-2" style={{ height: '4px'}}></span>
              <p className="mb-0 font-weight-600 text-xs">
                Ver más detalles
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col lg="6" xl="3">
          <Card className="card-stats mb-4 mb-xl-0 shadow">
            <CardBody>
              <Row>
                <Col className="d-flex justify-content-between">
                  <div>
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      Tasa de envio
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">
                      5.548 / 5.548
                      <span className="text-green text-xs d-block">98%</span>
                    </span>
                  </div>
                  <div>
                    <Button
                      color="secondary"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      ...
                    </Button>
                  </div>
                </Col>
              </Row>
              <span className="d-block my-1"></span>
              <p className="mb-0 font-weight-600 text-xs">
                Ver más detalles
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* content */}
      <Row className="mt-5">
        <Col className="mb-5 mb-xl-0" xl="6">
          <Form>
            <Card className="shadow">
              <CardHeader>
                <Row className="align-items-center">
                  <Col>
                    <Media className="align-items-center">
                      <span className="avatar rounded-circle mr-3 bg-red"></span>
                      <Media>
                        <h2 className="mb-0">
                          Claro Chile
                        </h2>
                      </Media>
                    </Media>
                  </Col>
                  <Col className="text-right">
                    <Button
                      color="warning"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Cargar creditos
                    </Button>
                    <Button
                      color="info"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Usar cuenta
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Row className="my-3">
                    <Col md="3">
                      <label
                        className="form-control-label pt-2"
                        htmlFor="input-phone"
                      >
                        Nombre Fantasía
                      </label>
                    </Col>
                    <Col md="9">
                      <Input
                        className="form-control-alternative"
                        id="input-phone"
                        placeholder="Nombre Fantasía"
                        type="text"
                      />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row className="my-3">
                    <Col md="3">
                      <label
                        className="form-control-label pt-2"
                        htmlFor="input-rut"
                      >
                        Rut
                      </label>
                    </Col>
                    <Col md="9">
                      <Input
                        className="form-control-alternative"
                        id="input-rut"
                        placeholder="76.476.564-8"
                        type="text"
                      />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row className="my-3">
                    <Col md="3">
                      <label
                        className="form-control-label pt-2"
                        htmlFor="input-razon-social"
                      >
                        Razón Social
                      </label>
                    </Col>
                    <Col md="9">
                      <Input
                        className="form-control-alternative"
                        id="input-razon-social"
                        placeholder="Claro SPA"
                        type="text"
                      />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row className="my-3">
                    <Col md="3">
                      <label
                        className="form-control-label pt-2"
                        htmlFor="input-url"
                      >
                        URL
                      </label>
                    </Col>
                    <Col md="9">
                      <Input
                        className="form-control-alternative"
                        id="input-url"
                        placeholder="htts://www.claro.cl"
                        type="text"
                      />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row className="my-3">
                    <Col md="3">
                      <label
                        className="form-control-label pt-2"
                        htmlFor="input-contacto"
                      >
                        Contacto
                      </label>
                    </Col>
                    <Col md="9">
                      <Input
                        className="form-control-alternative"
                        id="input-contacto"
                        placeholder="+568479974"
                        type="text"
                      />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row className="my-3">
                    <Col md="3">
                      <label
                        className="form-control-label pt-2"
                        htmlFor="input-contacto"
                      >
                        Contacto
                      </label>
                    </Col>
                    <Col md="9">
                      <Input
                        className="form-control-alternative"
                        id="input-contacto"
                        placeholder="+568479974"
                        type="text"
                      />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row className="my-3">
                    <Col md="3">
                      <label
                        className="form-control-label pt-2"
                        htmlFor="input-direccion"
                      >
                        Dirección
                      </label>
                    </Col>
                    <Col md="9">
                      <Input
                        className="form-control-alternative"
                        id="input-direccion"
                        placeholder="Arturo Prat 135, Providencia"
                        type="text"
                      />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row className="my-3">
                    <Col md="3">
                      <label
                        className="form-control-label pt-2"
                        htmlFor="input-vencimiento-facturas"
                      >
                        Venc. Facturas (días)
                      </label>
                    </Col>
                    <Col md="9">
                      <div className="btn-group btn-group-toggle" data-toggle="buttons">
                        <label className={`btn btn-secondary px-3 ${dueDateBills === 'contado' ? 'active cn-toogle-active' : ''}`}>
                          <input onClick={event => setDueDateBills(event.target.id)} type="radio" name="options" id="contado" defaultChecked /> Contado
                        </label>
                        <label className={`btn btn-secondary px-3 ${dueDateBills === '7' ? 'active cn-toogle-active' : ''}`}>
                          <input onClick={event => setDueDateBills(event.target.id)} type="radio" name="options" id="7" /> 7
                        </label>
                        <label className={`btn btn-secondary px-3 ${dueDateBills === '15' ? 'active cn-toogle-active' : ''}`}>
                          <input onClick={event => setDueDateBills(event.target.id)} type="radio" name="options" id="15" /> 15
                        </label>
                        <label className={`btn btn-secondary px-3 ${dueDateBills === '30' ? 'active cn-toogle-active' : ''}`}>
                          <input onClick={event => setDueDateBills(event.target.id)} type="radio" name="options" id="30" /> 30
                        </label>
                        <label className={`btn btn-secondary px-3 ${dueDateBills === '45' ? 'active cn-toogle-active' : ''}`}>
                          <input onClick={event => setDueDateBills(event.target.id)} type="radio" name="options" id="45" /> 45
                        </label>
                        <label className={`btn btn-secondary px-3 ${dueDateBills === '60' ? 'active cn-toogle-active' : ''}`}>
                          <input onClick={event => setDueDateBills(event.target.id)} type="radio" name="options" id="60" /> 60
                        </label>
                        <label className={`btn btn-secondary px-3 ${dueDateBills === '90' ? 'active cn-toogle-active' : ''}`}>
                          <input onClick={event => setDueDateBills(event.target.id)} type="radio" name="options" id="90" /> 90
                        </label>
                      </div>
                    </Col>
                  </Row>
                </FormGroup>
              </CardBody>
            </Card>
          </Form>
        </Col>
        <Col className="mb-5 mb-xl-0" xl="6">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row className="align-items-center">
                <div className="col">
                  <h6 className="text-uppercase text-light ls-1 mb-1">
                    134 Mensajes
                  </h6>
                  <h3 className="mb-0">Últimos Mensajes</h3>
                </div>
                <div className="col text-right">
                  <Button
                    color="secondary"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Ver más
                  </Button>
                </div>
              </Row>
            </CardHeader>
            <Table borderless size="sm" className="align-items-center table-flush" responsive>
              <tbody>
                <tr>
                  <th scope="row" className="py-0">
                    <div className="col border-info border-left cn-border-3">
                      <p className="mb-0 text-sm font-weight-600">
                        Aviso de Cierre Furnat
                      </p>
                      <p className="text-sm"> 
                        10:32 AM - 435 SMS enviados
                      </p>
                    </div>
                  </th>
                  <td className="text-right">
                    <a href="#" type="button" className="mx-2 text-info font-weigth-600">Ver envio</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-0">
                    <div className="col border-info border-left cn-border-3">
                      <p className="mb-0 text-sm font-weight-600">
                        Aviso de Cierre Furnat
                      </p>
                      <p className="text-sm"> 
                        10:32 AM - 435 SMS enviados
                      </p>
                    </div>
                  </th>
                  <td className="text-right">
                    <a href="#" type="button" className="mx-2 text-info font-weigth-600">Ver envio</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-0">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm font-weight-600">
                        Prueba 1
                      </p>
                      <p className="text-sm"> 
                        10:32 AM - 435 SMS enviados
                      </p>
                    </div>
                  </th>
                  <td className="text-right">
                    <a href="#" type="button" className="mx-2 text-info font-weigth-600">Ver envio</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-0">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm font-weight-600">
                        Aviso Claro
                      </p>
                      <p className="text-sm"> 
                        10:32 AM - 435 SMS enviados
                      </p>
                    </div>
                  </th>
                  <td className="text-right">
                    <a href="#" type="button" className="mx-2 text-info font-weigth-600">Ver envio</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-0">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm font-weight-600">
                        Aviso de Cierre Furnat
                      </p>
                      <p className="text-sm"> 
                        10:32 AM - 435 SMS enviados
                      </p>
                    </div>
                  </th>
                  <td className="text-right">
                    <a href="#" type="button" className="mx-2 text-info font-weigth-600">Ver envio</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-0">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm font-weight-600">
                        Aviso Claro
                      </p>
                      <p className="text-sm"> 
                        10:32 AM - 435 SMS enviados
                      </p>
                    </div>
                  </th>
                  <td className="text-right">
                    <a href="#" type="button" className="mx-2 text-info font-weigth-600">Ver envio</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-0">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm font-weight-600">
                        Aviso de Cierre Furnat
                      </p>
                      <p className="text-sm"> 
                        10:32 AM - 435 SMS enviados
                      </p>
                    </div>
                  </th>
                  <td className="text-right">
                    <a href="#" type="button" className="mx-2 text-info font-weigth-600">Ver envio</a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col className="mb-5 mb-xl-0" xl="6">
          <Card className="bg-white shadow">
            <CardHeader className="bg-transparent">
              <Row className="align-items-center">
                <div className="col">
                  <h6 className="text-uppercase text-light ls-1 mb-1">
                    Overview
                  </h6>
                  <h2 className="mb-0">Envio de mensajes</h2>
                </div>
              </Row>
            </CardHeader>
            <CardBody>
              {/* Chart */}
              <div className="chart">
                <Line
                  data={chartExample1[chartExample1Data]}
                  options={chartExample1.options}
                  getDatasetAtEvent={(e) => console.log(e)}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col className="mb-5 mb-xl-0" xl="6">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row className="align-items-center">
                <div className="col">
                  <h6 className="text-uppercase text-light ls-1 mb-1">
                    13 Transacciones
                  </h6>
                  <h3 className="mb-0">Últimas compras</h3>
                </div>
                <div className="col text-right">
                  <Button
                    color="secondary"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    See all
                  </Button>
                </div>
              </Row>
            </CardHeader>
            <Table borderless size="sm" className="align-items-center table-flush" responsive>
              <tbody>
                <tr>
                  <th scope="row" className="py-0">
                    <div className="col border-warning border-left cn-border-3">
                      <p className="mb-0 text-sm font-weight-600">
                        Brisaguas / 96.864.190-5
                      </p>
                      <p className="text-sm"> 
                        1.000 SMS - Transferencia
                      </p>
                    </div>
                  </th>
                  <td>
                    <p className="d-flex align-items-center justify-content-end font-weight-600">
                      ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)}
                      <i className="ni ni-cloud-upload-96 text-yellow ml-4"></i>
                      <i className="fas fa-ellipsis-v ml-3"></i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-0">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm font-weight-600">
                        Claro / 87.864.190-5
                      </p>
                      <p className="text-sm"> 
                        5.200 SMS - Paypal
                      </p>
                    </div>
                  </th>
                  <td>
                    <p className="d-flex align-items-center justify-content-end font-weight-600">
                      ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)}
                      <i className="fas fa-file-pdf ml-4"></i>
                      <i className="fas fa-ellipsis-v ml-3"></i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-0">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm font-weight-600">
                        Surlat / 96.864.190-5
                      </p>
                      <p className="text-sm"> 
                        1.000 SMS - Khipu
                      </p>
                    </div>
                  </th>
                  <td>
                    <p className="d-flex align-items-center justify-content-end font-weight-600">
                      ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)}
                      <i className="fas fa-file-pdf ml-4"></i>
                      <i className="fas fa-ellipsis-v ml-3"></i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-0">
                    <div className="col border-info border-left cn-border-3">
                      <p className="mb-0 text-sm font-weight-600">
                        Brisaguas / 96.864.190-5
                      </p>
                      <p className="text-sm"> 
                        1.000 SMS - Transferencia
                      </p>
                    </div>
                  </th>
                  <td>
                    <p className="d-flex align-items-center justify-content-end font-weight-600">
                      ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)}
                      <i className="far fa-check-circle ml-4"></i>
                      <i className="fas fa-ellipsis-v ml-3"></i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-0">
                    <div className="col border-info border-left cn-border-3">
                      <p className="mb-0 text-sm font-weight-600">
                        SHN Tecnology / 96.864.190-5
                      </p>
                      <p className="text-sm"> 
                        15.500 SMS - Transferencia
                      </p>
                    </div>
                  </th>
                  <td>
                    <p className="d-flex align-items-center justify-content-end font-weight-600">
                      ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)}
                      <i className="far fa-check-circle ml-4"></i>
                      <i className="fas fa-ellipsis-v ml-3"></i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-0">
                    <div className="col border-info border-left cn-border-3">
                      <p className="mb-0 text-sm font-weight-600">
                        RP Contadores / 96.864.190-5
                      </p>
                      <p className="text-sm"> 
                        1.000 SMS - Transferencia
                      </p>
                    </div>
                  </th>
                  <td>
                    <p className="d-flex align-items-center justify-content-end font-weight-600">
                      ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)}
                      <i className="far fa-check-circle ml-4"></i>
                      <i className="fas fa-ellipsis-v ml-3"></i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-0">
                    <div className="col border-info border-left cn-border-3">
                      <p className="mb-0 text-sm font-weight-600">
                        Brisaguas / 96.864.190-5
                      </p>
                      <p className="text-sm"> 
                        3.000 SMS - Transferencia
                      </p>
                    </div>
                  </th>
                  <td>
                    <p className="d-flex align-items-center justify-content-end font-weight-600">
                      ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)}
                      <i className="far fa-check-circle ml-4"></i>
                      <i className="fas fa-ellipsis-v ml-3"></i>
                    </p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>

    </Container>
  )
}