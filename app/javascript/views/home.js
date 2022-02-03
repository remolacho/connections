import React from "react"
import classnames from "classnames";
import Chart from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Media,
  NavItem,
  NavLink,
  Nav,
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

export default function Home(){
  // const [activeNav, setActiveNav] = React.useState(1);
  const [chartExample1Data, setChartExample1Data] = React.useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  // const toggleNavs = (e, index) => {
  //   e.preventDefault();
  //   setActiveNav(index);
  //   setChartExample1Data("data" + index);
  // };

  return (
    <Container className="pt-7" fluid>
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
      <Row className="mt-5">
        <Col className="mb-5 mb-xl-0" md="6">
          <Card className="bg-white shadow">
            <CardHeader className="bg-transparent">
              <Row className="align-items-center">
                <div className="col">
                  <h6 className="text-uppercase text-light ls-1 mb-1">
                    Overview
                  </h6>
                  <h2 className="mb-0">Ventas</h2>
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
        <Col md="6">
          <Card className="shadow">
            <CardHeader className="bg-transparent">
              <Row className="align-items-center">
                <div className="col">
                  <h6 className="text-uppercase text-muted ls-1 mb-1">
                    Performance
                  </h6>
                  <h2 className="mb-0">Total de Compras</h2>
                </div>
              </Row>
            </CardHeader>
            <CardBody>
              {/* Chart */}
              <div className="chart">
                <Bar
                  data={chartExample2.data}
                  options={chartExample2.options}
                />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="mb-5 mb-xl-0" xl="6">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row className="align-items-center">
                <div className="col">
                  <h6 className="text-uppercase text-light ls-1 mb-1">
                    13 Transacciones
                  </h6>
                  <h3 className="mb-0">Transacciones Abiertas</h3>
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
                      <i class="fas fa-ellipsis-v ml-3"></i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-0">
                    <div className="col border-warning border-left cn-border-3">
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
                      <i className="ni ni-cloud-upload-96 text-yellow ml-4"></i>
                      <i class="fas fa-ellipsis-v ml-3"></i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-0">
                    <div className="col border-warning border-left cn-border-3">
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
                      <i className="ni ni-cloud-upload-96 text-yellow ml-4"></i>
                      <i class="fas fa-ellipsis-v ml-3"></i>
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
                      <i class="far fa-check-circle ml-4"></i>
                      <i class="fas fa-ellipsis-v ml-3"></i>
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
                      <i class="far fa-check-circle ml-4"></i>
                      <i class="fas fa-ellipsis-v ml-3"></i>
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
                      <i class="far fa-check-circle ml-4"></i>
                      <i class="fas fa-ellipsis-v ml-3"></i>
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
                      <i class="far fa-check-circle ml-4"></i>
                      <i class="fas fa-ellipsis-v ml-3"></i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-0">
                    <div className="col border-info border-left cn-border-3">
                      <p className="mb-0 text-sm font-weight-600">
                        Horcon / 96.864.190-5
                      </p>
                      <p className="text-sm"> 
                        1.340 SMS - Transferencia
                      </p>
                    </div>
                  </th>
                  <td>
                    <p className="d-flex align-items-center justify-content-end font-weight-600">
                      ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)}
                      <i class="far fa-check-circle ml-4"></i>
                      <i class="fas fa-ellipsis-v ml-3"></i>
                    </p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
        <Col xl="6">
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
                      <i class="fas fa-ellipsis-v ml-3"></i>
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
                      <i class="fas fa-file-pdf ml-4"></i>
                      <i class="fas fa-ellipsis-v ml-3"></i>
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
                      <i class="fas fa-file-pdf ml-4"></i>
                      <i class="fas fa-ellipsis-v ml-3"></i>
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
                      <i class="far fa-check-circle ml-4"></i>
                      <i class="fas fa-ellipsis-v ml-3"></i>
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
                      <i class="far fa-check-circle ml-4"></i>
                      <i class="fas fa-ellipsis-v ml-3"></i>
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
                      <i class="far fa-check-circle ml-4"></i>
                      <i class="fas fa-ellipsis-v ml-3"></i>
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
                      <i class="far fa-check-circle ml-4"></i>
                      <i class="fas fa-ellipsis-v ml-3"></i>
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="py-0">
                    <div className="col border-info border-left cn-border-3">
                      <p className="mb-0 text-sm font-weight-600">
                        Horcon / 96.864.190-5
                      </p>
                      <p className="text-sm"> 
                        1.340 SMS - Transferencia
                      </p>
                    </div>
                  </th>
                  <td>
                    <p className="d-flex align-items-center justify-content-end font-weight-600">
                      ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)}
                      <i class="far fa-check-circle ml-4"></i>
                      <i class="fas fa-ellipsis-v ml-3"></i>
                    </p>
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
                    See all
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
    </Container>
  )
}