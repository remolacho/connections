import React from "react"
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


export default function ProvidersSMPP(){

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
                      SMPP Chile
                    </CardTitle>
                    <div className="d-flex align-items-center">
                      <span
                        className="d-inline-block rounded-circle mr-2 bg-gray"
                        style={{ height: "40px", width: "40px" }}
                      >
                      </span>
                      <span className="h2 font-weight-bold mb-0">
                        14 / 14
                      </span>
                    </div>
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
                      SMPP Perú
                    </CardTitle>
                    <div className="d-flex align-items-center">
                      <span
                        className="d-inline-block rounded-circle mr-2 bg-gray"
                        style={{ height: "40px", width: "40px" }}
                      >
                      </span>
                      <span className="h2 font-weight-bold mb-0">
                        <span className="text-red">12</span> / 14
                      </span>
                    </div>
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
                      SMPP Chile
                    </CardTitle>
                    <div className="d-flex align-items-center">
                      <span
                        className="d-inline-block rounded-circle mr-2 bg-gray"
                        style={{ height: "40px", width: "40px" }}
                      >
                      </span>
                      <span className="h2 font-weight-bold mb-0">
                        14 / 14
                      </span>
                    </div>
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
                      SMPP Perú
                    </CardTitle>
                    <div className="d-flex align-items-center">
                      <span
                        className="d-inline-block rounded-circle mr-2 bg-gray"
                        style={{ height: "40px", width: "40px" }}
                      >
                      </span>
                      <span className="h2 font-weight-bold mb-0">
                        <span className="text-red">12</span> / 14
                      </span>
                    </div>
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
      </Row>

      {/* content */}
      <Row className="mt-5">
        <Col className="mb-5 mb-xl-0" xl="6">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row className="align-items-center">
                <div className="col d-flex align-items-center">
                  <span
                    className="d-inline-block rounded-circle mr-2 bg-gray"
                    style={{ height: "32px", width: "32px" }}
                  >
                  </span>
                  <h3 className="mb-0">Conexiones SMPP Chile</h3>
                </div>
              </Row>
            </CardHeader>
            <Table borderless size="md" className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="text-center">Conexion</th>
                  <th scope="col" className="text-center">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        Movistar Chile
                      </p>
                    </div>
                  </th>
                  <td className="text-center">
                    <i class="fas fa-check-circle text-green"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        Movistar Chile
                      </p>
                    </div>
                  </th>
                  <td className="text-center">
                    <i class="fas fa-check-circle text-green"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        Movistar Chile
                      </p>
                    </div>
                  </th>
                  <td className="text-center">
                    <i class="fas fa-check-circle text-green"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        Movistar Chile
                      </p>
                    </div>
                  </th>
                  <td className="text-center">
                    <i class="fas fa-check-circle text-green"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        Movistar Chile
                      </p>
                    </div>
                  </th>
                  <td className="text-center">
                    <i class="fas fa-check-circle text-green"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        Movistar Chile
                      </p>
                    </div>
                  </th>
                  <td className="text-center">
                    <i class="fas fa-check-circle text-green"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        Movistar Chile
                      </p>
                    </div>
                  </th>
                  <td className="text-center">
                    <i class="fas fa-check-circle text-green"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        Movistar Chile
                      </p>
                    </div>
                  </th>
                  <td className="text-center">
                    <i class="fas fa-check-circle text-green"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        Movistar Chile
                      </p>
                    </div>
                  </th>
                  <td className="text-center">
                    <i class="fas fa-check-circle text-green"></i>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
        <Col className="mb-5 mb-xl-0" xl="6">
          <Card className="shadow mb-5">
            <CardHeader className="border-0">
              <Row className="align-items-center">
                <div className="col d-flex align-items-center">
                  <span
                    className="d-inline-block rounded-circle mr-2 bg-gray"
                    style={{ height: "32px", width: "32px" }}
                  >
                  </span>
                  <h3 className="mb-0">Conexiones SMPP Perú</h3>
                </div>
              </Row>
            </CardHeader>
            <Table borderless size="md" className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="text-center">Conexion</th>
                  <th scope="col" className="text-center">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        Movistar Chile
                      </p>
                    </div>
                  </th>
                  <td className="text-center">
                    <i class="fas fa-check-circle text-green"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        Movistar Chile
                      </p>
                    </div>
                  </th>
                  <td className="text-center">
                    <i class="fas fa-check-circle text-green"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        Movistar Chile
                      </p>
                    </div>
                  </th>
                  <td className="text-center">
                    <i class="fas fa-check-circle text-green"></i>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row className="align-items-center">
                <div className="col d-flex align-items-center">
                  <span
                    className="d-inline-block rounded-circle mr-2 bg-gray"
                    style={{ height: "32px", width: "32px" }}
                  >
                  </span>
                  <h3 className="mb-0">Conexiones SMPP Perú</h3>
                </div>
              </Row>
            </CardHeader>
            <Table borderless size="md" className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="text-center">Conexion</th>
                  <th scope="col" className="text-center">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        Movistar Chile
                      </p>
                    </div>
                  </th>
                  <td className="text-center">
                    <i class="fas fa-check-circle text-green"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        Movistar Chile
                      </p>
                    </div>
                  </th>
                  <td className="text-center">
                    <i class="fas fa-check-circle text-green"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        Movistar Chile
                      </p>
                    </div>
                  </th>
                  <td className="text-center">
                    <i class="fas fa-check-circle text-green"></i>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
      
      <Row className="mt-5">
        <Col className="mb-5 mb-xl-0" xl="6">
          <Card className="shadow mb-5">
            <CardHeader className="border-0">
              <Row className="align-items-center">
                <div className="col d-flex align-items-center">
                  <span
                    className="d-inline-block rounded-circle mr-2 bg-gray"
                    style={{ height: "32px", width: "32px" }}
                  >
                  </span>
                  <h3 className="mb-0">Conexiones SMPP Perú</h3>
                </div>
              </Row>
            </CardHeader>
            <Table borderless size="md" className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="text-center">Conexion</th>
                  <th scope="col" className="text-center">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        Movistar Chile
                      </p>
                    </div>
                  </th>
                  <td className="text-center">
                    <i class="fas fa-check-circle text-green"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        Movistar Chile
                      </p>
                    </div>
                  </th>
                  <td className="text-center">
                    <i class="fas fa-check-circle text-green"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        Movistar Chile
                      </p>
                    </div>
                  </th>
                  <td className="text-center">
                    <i class="fas fa-check-circle text-green"></i>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
        <Col className="mb-5 mb-xl-0" xl="6">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row className="align-items-center">
                <div className="col d-flex align-items-center">
                  <span
                    className="d-inline-block rounded-circle mr-2 bg-gray"
                    style={{ height: "32px", width: "32px" }}
                  >
                  </span>
                  <h3 className="mb-0">Conexiones SMPP Perú</h3>
                </div>
              </Row>
            </CardHeader>
            <Table borderless size="md" className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="text-center">Conexion</th>
                  <th scope="col" className="text-center">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        Movistar Chile
                      </p>
                    </div>
                  </th>
                  <td className="text-center">
                    <i class="fas fa-check-circle text-green"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        Movistar Chile
                      </p>
                    </div>
                  </th>
                  <td className="text-center">
                    <i class="fas fa-check-circle text-green"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        Movistar Chile
                      </p>
                    </div>
                  </th>
                  <td className="text-center">
                    <i class="fas fa-check-circle text-green"></i>
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