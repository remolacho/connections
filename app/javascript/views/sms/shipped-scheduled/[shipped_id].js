import React from "react"
import { useParams } from "react-router-dom"
import { Doughnut  } from "react-chartjs-2";
import {
  Card,
  CardHeader,
  CardBody,
  Table,
  Container,
  Row,
  Col,
  Button,
  Input
} from "reactstrap";

import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

export default function Shipped(){
  const params = useParams()
  console.log(params) // {shipped_id: #}

  const [chartExample1Data, setChartExample1Data] = React.useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  return (
    <Container className="pt-7" fluid>
      <div className="d-flex justify-content-between">
        <h1 className="mb-0">Detalle Envio "Uso API SMS"</h1>
        <Button className="btn-outline-danger">
          Generar Reporte
        </Button>
      </div>
      <hr className="mt-3"/>
      <Row>
        <Col md="8">
          <Card className="shadow mb-4">
            <CardHeader className="border-0">
              <Row>
                <Col md="7">
                  <p className="h3 pt-2 pr-3">Mensajes</p>
                </Col>
                <Col md='5'>
                  <Input
                      className="form-control-alternative mt-1"
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
                  <th scope="col" className="text-left">Identificador unico</th>
                  <th scope="col" className="text-center">Número destino</th>
                  <th scope="col" className="text-center">País destino</th>
                  <th scope="col" className="text-center">Proveedor</th>
                  <th scope="col" className="text-center">Última <br/> actualización</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center d-block text-info">
                      12349u5hn234i5nio23un523593425n92
                    </span>
                  </th>
                  <td className="text-center">+56981213314</td>
                  <td className="text-center">Chile</td>
                  <td className="text-center"> Entel</td>
                  <td className="text-center">
                    22/09/21 18:15
                    <i class="fas fa-ellipsis-v ml-3"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center d-block text-info">
                      89ug98dfug897dgyuh784508390jb89j06
                    </span>
                  </th>
                  <td className="text-center">+5698122342</td>
                  <td className="text-center">Chile</td>
                  <td className="text-center">Movistar</td>
                  <td className="text-center">
                    22/09/21 18:15
                    <i class="fas fa-ellipsis-v ml-3"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center d-block text-info">
                      23452345dhdg9fh89dfg80hd8tfh0ert053
                    </span>
                  </th>
                  <td className="text-center">+56981213314</td>
                  <td className="text-center">Chile</td>
                  <td className="text-center">Claro</td>
                  <td className="text-center">
                    22/09/21 18:15
                    <i class="fas fa-ellipsis-v ml-3"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center d-block text-info">
                      02359i603458ju6890jyetngh0e9nh97n08
                    </span>
                  </th>
                  <td className="text-center">+56981213377</td>
                  <td className="text-center">Chile</td>
                  <td className="text-center">Entel</td>
                  <td className="text-center">
                    22/09/21 18:15
                    <i class="fas fa-ellipsis-v ml-3"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="mb-0 text-sm text-center d-block text-info">
                      85j9584jt9h3458978ng8the8g7t637bg76
                    </span>
                  </th>
                  <td className="text-center">+569812232323</td>
                  <td className="text-center">Chile</td>
                  <td className="text-center">Entel</td>
                  <td className="text-center">
                    22/09/21 18:15
                    <i class="fas fa-ellipsis-v ml-3"></i>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
          <Card className="shadow mb-4">
            <CardHeader className="border-0">
              <p className="h3 pt-2 pr-3">Mensajes</p>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive borderless>
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="text-left">Estado / Proveedor</th>
                  <th scope="col" className="text-center align-items-center">
                    <img
                      className="avatar rounded-circle bg-green"
                      alt="..."
                      src={
                        require("assets/img/theme/bootstrap.jpg")
                      }
                    />
                  </th>
                  <th scope="col" className="text-center">
                    <img
                      className="avatar rounded-circle bg-green"
                      alt="..."
                      src={
                        require("assets/img/theme/bootstrap.jpg")
                      }
                    />
                  </th>
                  <th scope="col" className="text-center">
                    <img
                      className="avatar rounded-circle bg-green"
                      alt="..."
                      src={
                        require("assets/img/theme/bootstrap.jpg")
                      }
                    />
                  </th>
                  <th scope="col" className="text-center">
                    <img
                      className="avatar rounded-circle bg-green"
                      alt="..."
                      src={
                        require("assets/img/theme/bootstrap.jpg")
                      }
                    />
                  </th>
                  <th scope="col" className="text-center">
                    <img
                      className="avatar rounded-circle bg-green"
                      alt="..."
                      src={
                        require("assets/img/theme/bootstrap.jpg")
                      }
                    />
                  </th>
                  <th scope="col" className="text-center">
                    <img
                      className="avatar rounded-circle bg-green"
                      alt="..."
                      src={
                        require("assets/img/theme/bootstrap.jpg")
                      }
                    />
                  </th>
                  <th scope="col" className="text-center">
                    <img
                      className="avatar rounded-circle bg-green"
                      alt="..."
                      src={
                        require("assets/img/theme/bootstrap.jpg")
                      }
                    />
                  </th>
                  <th scope="col" className="text-center">total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <span className="d-inline-block rounded-circle mr-2 bg-blue" style={{ height: "7px", width: "7px" }}></span>
                    Programado
                  </th>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center font-weight-600">0</td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="d-inline-block rounded-circle mr-2 bg-blue" style={{ height: "7px", width: "7px" }}></span>
                    En cola
                  </th>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center font-weight-600">0</td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="d-inline-block rounded-circle mr-2 bg-orange" style={{ height: "7px", width: "7px" }}></span>
                    Número Inválido
                  </th>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center font-weight-600">0</td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="d-inline-block rounded-circle mr-2 bg-yellow" style={{ height: "7px", width: "7px" }}></span>
                    Enviado al proveedor
                  </th>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center font-weight-600">0</td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="d-inline-block rounded-circle mr-2 bg-yellow" style={{ height: "7px", width: "7px" }}></span>
                    Esperando respuesta
                  </th>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center font-weight-600">0</td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="d-inline-block rounded-circle mr-2 bg-orange" style={{ height: "7px", width: "7px" }}></span>
                    No entregable
                  </th>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center font-weight-600">0</td>
                </tr>
                <tr>
                  <th scope="row">
                    <span className="d-inline-block rounded-circle mr-2 bg-green" style={{ height: "7px", width: "7px" }}></span>
                    Entregado
                  </th>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center font-weight-600">0</td>
                </tr>
                <tr>
                  <th scope="row font-weight-600">Total</th>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                  <td className="text-center font-weight-600">0</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
        <Col md="4">
          <Card className="shadow mb-4">
            <CardHeader>
              <h3 className="pt-2 pr-3">Detalle</h3>
            </CardHeader>
            <CardBody>
              <Row>
                <Col>
                  <p className="font-weight-600">Identificador Unico</p>
                </Col>
                <Col>
                  <p className="text-muted">b0d0f9v0dfvdfvdfv</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="font-weight-600">Tipo de Envio</p>
                </Col>
                <Col>
                  <p className="text-muted">API</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="font-weight-600">Fecha de Creacion</p>
                </Col>
                <Col>
                  <p className="text-muted">07 Oct 2021 19:30</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="font-weight-600">Usuario</p>
                </Col>
                <Col>
                  <p className="text-muted">Samuel Parra</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="font-weight-600">Lista Envio</p>
                </Col>
                <Col>
                  <p className="text-muted">Mi lista de envio</p>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Card className="shadow mb-4">
            <CardHeader>
              <h3 className="pt-2 pr-3">Estado de Envío</h3>
            </CardHeader>
            <CardBody>
              <div className="chart">
                <Doughnut
                  data={chartExample1[chartExample1Data]}
                  options={chartExample1.options}
                />
              </div>
            </CardBody>
          </Card>
          <Card className="shadow mb-4">
            <CardHeader>
              <h3 className="pt-2 pr-3">Links</h3>
            </CardHeader>
            <CardBody>
              <Row>
                <Col>
                  <p className="font-weight-600">Link</p>
                </Col>
                <Col>
                  <p className="text-muted">cnc.us/5dev3A</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="h2">123 <span className="text-muted text-sm pl-2">Total clicks</span></p>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Card className="shadow mb-4">
            <CardHeader>
              <Row className="align-items-center">
                <Col>
                  <h3 className="mb-0">Transacciones Abiertas</h3>
                </Col>
                <Col className="text-right">
                  <Button
                    color="secondary"
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Ver más
                  </Button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <Row>
                <Col>
                  <div className="border-info border-left cn-border-3">
                    <p className="font-weight-600 pl-4">+56 9 8384 9290</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="border-info border-left cn-border-3">
                    <p className="font-weight-600 pl-4">+56 9 8384 9290</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="border-info border-left cn-border-3">
                    <p className="font-weight-600 pl-4">+56 9 8384 9290</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="border-info border-left cn-border-3">
                    <p className="font-weight-600 pl-4">+56 9 8384 9290</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="border-info border-left cn-border-3">
                    <p className="font-weight-600 pl-4">+56 9 8384 9290</p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="border-info border-left cn-border-3">
                    <p className="font-weight-600 pl-4">+56 9 8384 9290</p>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}