import React from "react"
import Chart from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Media,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";

import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

export default function Messages(){
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  return (
    <>
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
                      <span className="pl-2 text-red text-xs">- 6%</span>
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
              <Progress
                max="100"
                value="70"
                barClassName="bg-gradient-success"
                className="my-2"
                style={{ height: '4px' }}
              />
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
                      ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(1380085)}
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
                      Total Promedio
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">
                      ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(48095)}
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
                      Carritos Abandonados
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">
                      21
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
              <Progress
                max="100"
                value="70"
                barClassName="bg-gradient-success"
                className="my-2"
                style={{ height: '4px' }}
              />
              <p className="mb-0 font-weight-600 text-xs">
                Ver más detalles
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* content */}
      <Row className="mt-5">
        <Col className="mb-5 mb-xl-0" md="6">
          <Card className="bg-white shadow">
            <CardHeader className="bg-transparent">
              <Row className="align-items-center">
                <div className="col">
                  <h6 className="text-uppercase text-light ls-1 mb-1">
                    Overview
                  </h6>
                  <h2 className="mb-0">Envio de Mensajes</h2>
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
        <Col xl="6">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row className="align-items-center">
                <div className="col">
                  <h3 className="mb-0">Top Clientes</h3>
                </div>
                <div className="col text-right">
                  <Button
                    color="secondary"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Ver todos
                  </Button>
                </div>
              </Row>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive>
              <tbody>
                <tr>
                  <th scope="row">
                    <Media className="align-items-center">
                      <span
                        className="d-block avatar rounded-circle mr-2 bg-green"
                      >
                      </span>
                      <Media>
                        <div className="col">
                          <p className="mb-0 text-sm">
                            Asesoría y Servicios Dew Spa
                          </p>
                          <h6> 
                            <span className="d-inline-block rounded-circle mr-1 bg-green" style={{ height: "7px", width: "7px" }}></span>
                            1.239 / 5.789 
                          </h6>
                        </div>
                      </Media>
                    </Media>
                  </th>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Ver</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <Media className="align-items-center">
                      <span
                        className="d-block avatar rounded-circle mr-2 bg-red"
                      >
                      </span>
                      <Media>
                        <div className="col">
                          <p className="mb-0 text-sm">
                            Claro
                          </p>
                          <h6> 
                            <span className="d-inline-block rounded-circle mr-1 bg-red" style={{ height: "7px", width: "7px" }}></span>
                            1.239 / 5.568
                          </h6>
                        </div>
                      </Media>
                    </Media>
                  </th>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Ver</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <Media className="align-items-center">
                      <span
                        className="d-block avatar rounded-circle mr-2 bg-black"
                      >
                      </span>
                      <Media>
                        <div className="col">
                          <p className="mb-0 text-sm">
                            Brisaguas
                          </p>
                          <h6> 
                            <span className="d-inline-block rounded-circle mr-1 bg-red" style={{ height: "7px", width: "7px" }}></span>
                            34 / 5.789 
                          </h6>
                        </div>
                      </Media>
                    </Media>
                  </th>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Ver</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <Media className="align-items-center">
                      <span
                        className="d-block avatar rounded-circle mr-2 bg-yellow"
                      >
                      </span>
                      <Media>
                        <div className="col">
                          <p className="mb-0 text-sm">
                            John Michael
                          </p>
                          <h6> 
                            <span className="d-inline-block rounded-circle mr-1 bg-green" style={{ height: "7px", width: "7px" }}></span>
                            566 / 4.886
                          </h6>
                        </div>
                      </Media>
                    </Media>
                  </th>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Ver</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <Media className="align-items-center">
                      <span
                        className="d-block avatar rounded-circle mr-2 bg-green"
                      >
                      </span>
                      <Media>
                        <div className="col">
                          <p className="mb-0 text-sm">
                            Asesoría y Servicios Dew Spa
                          </p>
                          <h6> 
                            <span className="d-inline-block rounded-circle mr-1 bg-green" style={{ height: "7px", width: "7px" }}></span>
                            1.239 / 5.789 
                          </h6>
                        </div>
                      </Media>
                    </Media>
                  </th>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Ver</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <Media className="align-items-center">
                      <span
                        className="d-block avatar rounded-circle mr-2 bg-green"
                      >
                      </span>
                      <Media>
                        <div className="col">
                          <p className="mb-0 text-sm">
                            Asesoría y Servicios Dew Spa
                          </p>
                          <h6> 
                            <span className="d-inline-block rounded-circle mr-1 bg-green" style={{ height: "7px", width: "7px" }}></span>
                            1.239 / 5.789 
                          </h6>
                        </div>
                      </Media>
                    </Media>
                  </th>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2">Ver</a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </>
  )
}