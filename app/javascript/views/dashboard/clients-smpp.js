import React from "react"
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Modal
} from "reactstrap";


export default function ClientsSMPP(){
  const [showModalPreviewSMPP, setShowModalPreviewSMPP] = React.useState(false)

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
                      Estado Clientes
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">
                      142 / 142
                      <span className="pl-2 text-green text-xs">100%</span>
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
                      Total Enviados
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">
                      {new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(2858)}
                      <span className="pl-2 text-green text-xs">+ 15%</span>
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
                      Saldo Total
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">
                      {new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(15858998)}
                      <span className="pl-2 text-green text-xs">85%</span>
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
      </Row>

      {/* content */}
      <Row className="mt-5">
        <Col className="mb-5 mb-xl-0" xl="12">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row className="align-items-center">
                <div className="col">
                  <h3 className="mb-0">Clientes SMPP</h3>
                </div>
              </Row>
            </CardHeader>
            <Table borderless size="md" className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="text-center">Conexion</th>
                  <th scope="col" className="text-center">Costo Unitario</th>
                  <th scope="col" className="text-center">Ultima Recarga</th>
                  <th scope="col" className="text-center">Enviados/Saldo</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        amdtelcomOPT1
                      </p>
                    </div>
                  </th>
                  <td className=" text-center">
                    {new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)} CLP
                  </td>
                  <td className=" text-center">
                    12 Agosto 2021 ({new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(5000000)})
                  </td>
                  <td className=" text-center">
                    18.871 / (4.981.129)
                  </td>
                  <td className="text-center">
                    <i onClick={() => setShowModalPreviewSMPP(!showModalPreviewSMPP)} class="far fa-eye text-info"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="col border-warning border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        amdtelcomOPT1
                      </p>
                    </div>
                  </th>
                  <td className=" text-center">
                    {new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)} CLP
                  </td>
                  <td className=" text-center">
                    12 Agosto 2021 ({new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(5000000)})
                  </td>
                  <td className=" text-center">
                    18.871 / (4.981.129)
                  </td>
                  <td className="text-center">
                    <i onClick={() => setShowModalPreviewSMPP(!showModalPreviewSMPP)} class="far fa-eye text-info"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="col border-warning border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        amdtelcomOPT1
                      </p>
                    </div>
                  </th>
                  <td className=" text-center">
                    {new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)} CLP
                  </td>
                  <td className=" text-center">
                    12 Agosto 2021 ({new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(5000000)})
                  </td>
                  <td className=" text-center">
                    18.871 / (4.981.129)
                  </td>
                  <td className="text-center">
                    <i onClick={() => setShowModalPreviewSMPP(!showModalPreviewSMPP)} class="far fa-eye text-info"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="col border-danger border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        amdtelcomOPT1
                      </p>
                    </div>
                  </th>
                  <td className=" text-center">
                    {new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)} CLP
                  </td>
                  <td className=" text-center">
                    12 Agosto 2021 ({new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(5000000)})
                  </td>
                  <td className=" text-center">
                    18.871 / (4.981.129)
                  </td>
                  <td className="text-center">
                    <i onClick={() => setShowModalPreviewSMPP(!showModalPreviewSMPP)} class="far fa-eye text-info"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        amdtelcomOPT1
                      </p>
                    </div>
                  </th>
                  <td className=" text-center">
                    {new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)} CLP
                  </td>
                  <td className=" text-center">
                    12 Agosto 2021 ({new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(5000000)})
                  </td>
                  <td className=" text-center">
                    18.871 / (4.981.129)
                  </td>
                  <td className="text-center">
                    <i onClick={() => setShowModalPreviewSMPP(!showModalPreviewSMPP)} class="far fa-eye text-info"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        amdtelcomOPT1
                      </p>
                    </div>
                  </th>
                  <td className=" text-center">
                    {new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)} CLP
                  </td>
                  <td className=" text-center">
                    12 Agosto 2021 ({new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(5000000)})
                  </td>
                  <td className=" text-center">
                    18.871 / (4.981.129)
                  </td>
                  <td className="text-center">
                    <i onClick={() => setShowModalPreviewSMPP(!showModalPreviewSMPP)} class="far fa-eye text-info"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        amdtelcomOPT1
                      </p>
                    </div>
                  </th>
                  <td className=" text-center">
                    {new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)} CLP
                  </td>
                  <td className=" text-center">
                    12 Agosto 2021 ({new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(5000000)})
                  </td>
                  <td className=" text-center">
                    18.871 / (4.981.129)
                  </td>
                  <td className="text-center">
                    <i onClick={() => setShowModalPreviewSMPP(!showModalPreviewSMPP)} class="far fa-eye text-info"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        amdtelcomOPT1
                      </p>
                    </div>
                  </th>
                  <td className=" text-center">
                    {new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)} CLP
                  </td>
                  <td className=" text-center">
                    12 Agosto 2021 ({new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(5000000)})
                  </td>
                  <td className=" text-center">
                    18.871 / (4.981.129)
                  </td>
                  <td className="text-center">
                    <i onClick={() => setShowModalPreviewSMPP(!showModalPreviewSMPP)} class="far fa-eye text-info"></i>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <div className="col border-success border-left cn-border-3">
                      <p className="mb-0 text-sm ">
                        amdtelcomOPT1
                      </p>
                    </div>
                  </th>
                  <td className=" text-center">
                    {new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)} CLP
                  </td>
                  <td className=" text-center">
                    12 Agosto 2021 ({new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(5000000)})
                  </td>
                  <td className=" text-center">
                    18.871 / (4.981.129)
                  </td>
                  <td className="text-center">
                    <i onClick={() => setShowModalPreviewSMPP(!showModalPreviewSMPP)} class="far fa-eye text-info"></i>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
      
      {/* Modal */}
      <Modal
          className="modal-dialog-centered"
          size="md"
          isOpen={showModalPreviewSMPP}
          toggle={() => setShowModalPreviewSMPP(!showModalPreviewSMPP)}
        >
          <div className="modal-header">
            <h6 className="modal-title text-lg" id="modal-title-default">
              amdtelcomOPT1
            </h6>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => setShowModalPreviewSMPP(!showModalPreviewSMPP)}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <Row className="mb-2">
              <Col md="5" className="font-weight-600">
                10 de Agosto
              </Col>
              <Col md="7">
                <span className="font-weight-600">18.871</span> / (4.981.129)
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md="5" className="font-weight-600">
                10 de Julio
              </Col>
              <Col md="7">
                <span className="font-weight-600">18.871</span> / (4.981.129)
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md="5" className="font-weight-600">
                9 de Junio
              </Col>
              <Col md="7">
                <span className="font-weight-600">18.871</span> / (4.981.129)
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md="5" className="font-weight-600">
                15 de Enero
              </Col>
              <Col md="7">
                <span className="font-weight-600">18.871</span> / (4.981.129)
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md="5" className="font-weight-600">
                19 de Septiembre
              </Col>
              <Col md="7">
                <span className="font-weight-600">18.871</span> / (4.981.129)
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md="5" className="font-weight-600">
                22 de Diciembre
              </Col>
              <Col md="7">
                <span className="font-weight-600">18.871</span> / (4.981.129)
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md="5" className="font-weight-600">
                24 de Enero
              </Col>
              <Col md="7">
                <span className="font-weight-600">18.871</span> / (4.981.129)
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md="5" className="font-weight-600">
                2 de Febrero
              </Col>
              <Col md="7">
                <span className="font-weight-600">18.871</span> / (4.981.129)
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md="5" className="font-weight-600">
                8 de Mayo
              </Col>
              <Col md="7">
                <span className="font-weight-600">18.871</span> / (4.981.129)
              </Col>
            </Row>
            <Row className="mb-2">
              <Col md="5" className="font-weight-600">
                11 de Abril
              </Col>
              <Col md="7">
                <span className="font-weight-600">18.871</span> / (4.981.129)
              </Col>
            </Row>
          </div>
          <div className="modal-footer">
            <Button
              className="ml-auto"
              color="link"
              data-dismiss="modal"
              type="button"
              onClick={() => setShowModalPreviewSMPP(!showModalPreviewSMPP)}
            >
              Cancelar
            </Button>
          </div>
        </Modal>
    </>
  )
}