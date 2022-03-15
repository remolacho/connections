import React from "react"
import { useParams, NavLink } from "react-router-dom"
import { Doughnut  } from "react-chartjs-2";
import {
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  CardText,
  Table,
  Container,
  Row,
  Col,
  Button,
  Input,
  Nav,
  NavItem,
  TabContent,
  TabPane
} from "reactstrap";

import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";

export default function Shipped(){
  const params = useParams()
  console.log("EMAIL")
  console.log(params) // {shipped_id: #}
  const [isNational, setIsNational] = React.useState(true)

  const [chartExample1Data, setChartExample1Data] = React.useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  return (
    <Container className="pt-7" fluid>
      <div className="d-flex justify-content-between">
        <h1 className="mb-0">Detalle de envío Uso PLATAFORMA - EMAIL, Etiner DEV DEV, mes de Diciembre</h1>
        <Button className="btn-outline-danger">
          Generar Reporte
        </Button>
      </div>
      <hr className="mt-3"/>
      <Row>
				<Col md="3">
					<Card className="shadow mb-4">
						<CardHeader className="border-0">
							<p className="h3 pt-2 pr-3">Estado de envío</p>
						</CardHeader>
						<Table className="align-items-center table-flush" responsive borderless>
							<thead className="thead-light">
								<tr>
									<th scope="col" className="text-left">Estado / Proveedor</th>
									<th scope="col" className="text-center">Cantidad</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">
										<span className="d-inline-block rounded-circle mr-2 bg-blue" style={{ height: "7px", width: "7px" }}></span>
										Programado
									</th>
									<td className="text-center">0</td>
								</tr>
								<tr>
									<th scope="row">
										<span className="d-inline-block rounded-circle mr-2 bg-blue" style={{ height: "7px", width: "7px" }}></span>
										En Cola
									</th>
									<td className="text-center">0</td>
								</tr>
								<tr>
									<th scope="row">
										<span className="d-inline-block rounded-circle mr-2 bg-yellow" style={{ height: "7px", width: "7px" }}></span>
										Enviado
									</th>
									<td className="text-center">1</td>
								</tr>
								<tr>
									<th scope="row">
										<span className="d-inline-block rounded-circle mr-2 bg-red" style={{ height: "7px", width: "7px" }}></span>
										No entregable
									</th>
									<td className="text-center">1</td>
								</tr>
								<tr>
									<th scope="row">
										<span className="d-inline-block rounded-circle mr-2 bg-green" style={{ height: "7px", width: "7px" }}></span>
										Entregado
									</th>
									<td className="text-center">0</td>
								</tr>
								<tr>
									<th scope="row font-weight-600">Total</th>
									<td className="text-center font-weight-600">1</td>
								</tr>
							</tbody>
						</Table>
					</Card>
				</Col>
				<Col md="5">
					<Card className="shadow mb-4">
						<CardHeader>
							<h3 className="pt-2 pr-3">Detalle</h3>
						</CardHeader>
						<CardBody>
							<Row>
								<Col>
									<p className="font-weight-600">Identificador único</p>
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
									<p className="font-weight-600">Fecha de Creación</p>
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
							<Row className="mb-3">
								<Col>
									<p className="font-weight-600">Lista Envío</p>
								</Col>
								<Col>
									<p className="text-muted">Mi lista v1</p>
								</Col>
							</Row>
							<Button
								className="btn-warning text-white mt-4"
							>
								Generar reporte
							</Button>
						</CardBody>
					</Card>
				</Col>
				<Col md="4">
					<Card className="shadow mb-4">
						<CardHeader>
							<Row className="align-items-center">
                <div className="col">
                  <h3 className="mb-0">Evento</h3>
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
						<CardBody>
							<Row>
								<Col>
									<p className="font-weight-600">Clickeado</p>
								</Col>
								<Col>
									<p className="text-muted">1</p>
								</Col>
							</Row>
							<Row>
								<Col>
									<p className="font-weight-600">Abierto</p>
								</Col>
								<Col>
									<p className="text-muted">1</p>
								</Col>
							</Row>
							<Row>
								<Col>
									<p className="font-weight-600">Rechazado</p>
								</Col>
								<Col>
									<p className="text-muted">1</p>
								</Col>
							</Row>
							<Row className="mb-4">
								<Col>
									<p className="h2">123 <span className="text-muted text-sm pl-2 ls-2">Total clicks</span></p>
								</Col>
							</Row>
							<Button
								className="btn-warning text-white mt-6"
							>
								Generar reporte
							</Button>
						</CardBody>
					</Card>
				</Col>
      </Row>
      <Row>
        <Col md="8">
          <Card className="shadow mb-4">
            <CardHeader className="border-0">
              <Row>
                <Col md="7">
                  <p className="h3 pt-2 pr-3">Emails</p>
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
                  <th scope="col" className="text-center">Correo de origen</th>
                  <th scope="col" className="text-center">Correo de destino</th>
                  <th scope="col" className="text-center">Última <br/> actualización</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <NavLink to={`/email/${'efvdfdg9dfg9df23i4n234n23423n423'}`} className="mb-0 text-sm text-center d-block text-info border-left border-success cn-border-3">
                      12349u5hn234i5nio23un523593425n92
                    </NavLink>
                  </th>
                  <td className="text-center">marketing@etiner.com</td>
                  <td className="text-center">camilo@etiner.com</td>
                  <td className="text-center">
                    22/09/21 18:15
                    <i className="fas fa-ellipsis-v ml-3"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <NavLink to={`/email/${'efvdfdg9dfg9df23i4n234n23423n423'}`} className="mb-0 text-sm text-center d-block text-info border-left border-warning cn-border-3 pl-2">
                      89ug98dfug897dgyuh784508390jb89j06
                    </NavLink>
                  </th>
                  <td className="text-center">marketing@etiner.com</td>
                  <td className="text-center">camilo@etiner.com</td>
                  <td className="text-center">
                    22/09/21 18:15
                    <i className="fas fa-ellipsis-v ml-3"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <NavLink to={`/email/${'efvdfdg9dfg9df23i4n234n23423n423'}`} className="mb-0 text-sm text-center d-block text-info border-left border-danger cn-border-3 pl-2">
                      23452345dhdg9fh89dfg80hd8tfh0ert053
                    </NavLink>
                  </th>
                  <td className="text-center">marketing@etiner.com</td>
                  <td className="text-center">camilo@etiner.com</td>
                  <td className="text-center">
                    22/09/21 18:15
                    <i className="fas fa-ellipsis-v ml-3"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <NavLink to={`/email/${'efvdfdg9dfg9df23i4n234n23423n423'}`} className="mb-0 text-sm text-center d-block text-info border-left border-success cn-border-3 pl-2">
                      02359i603458ju6890jyetngh0e9nh97n08
                    </NavLink>
                  </th>
                  <td className="text-center">marketing@etiner.com</td>
                  <td className="text-center">camilo@etiner.com</td>
                  <td className="text-center">
                    22/09/21 18:15
                    <i className="fas fa-ellipsis-v ml-3"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <NavLink to={`/email/${'efvdfdg9dfg9df23i4n234n23423n423'}`} className="mb-0 text-sm text-center d-block text-info border-left border-warning cn-border-3 pl-2">
                      85j9584jt9h3458978ng8the8g7t637bg76
                    </NavLink>
                  </th>
                  <td className="text-center">marketing@etiner.com</td>
                  <td className="text-center">camilo@etiner.com</td>
                  <td className="text-center">
                    22/09/21 18:15
                    <i className="fas fa-ellipsis-v ml-3"></i>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
        <Col md="4">
					<Card className="shadow mb-4">
						<CardHeader>
							<h3 className="pt-2 pr-3">Emails Entregados</h3>
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
        </Col>
      </Row>
    </Container>
  )
}