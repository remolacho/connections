import React from "react";
import { 
  Card, 
  CardBody, 
  CardHeader, 
  Form, 
  FormGroup, 
  Input, 
  Container, 
  Row, 
  Col, 
  Button,
  Modal
} from "reactstrap";

export default function Index() {
  const [showModalToken, setShowModalToken] = React.useState(false)

  return (
    <div className="pt-7">
      <Container fluid>
        <Row>
          <Col md="7">
            <h1 className="pb-3">Cuenta Brisaguas</h1>
            <Form>
              <Card className="shadow my-3">
                <CardHeader className="bg-white">
                  <h6 className="align-items-center d-flex heading mb-0">
                    Preferencias de cuenta SMS
                  </h6>
                </CardHeader>
                <CardBody className="bg-secondary">
                  <div className="pl-lg-4">
                    <FormGroup>
                      <Row className="my-3">
                        <label
                          className="form-control-label pt-2"
                          htmlFor="input-sms-update"
                        >
                          URL de envío de actualizaciones de estado de SMS
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="lucky.jesse"
                          id="input-sms-update"
                          placeholder="Sin url de envío de actualizaciones"
                          type="text"
                        />
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row className="my-3">
                        <label
                          className="form-control-label pt-2"
                          htmlFor="input-url-forwarding-sms"
                        >
                          URL de reenvío de SMS recibidos
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="lucky.jesse"
                          id="input-url-forwarding-sms"
                          placeholder="Sin url de reenvío"
                          type="text"
                        />
                      </Row>
                    </FormGroup>
                  </div>
                  <button
                    className="btn button--default"
                    onClick={(e) => e.preventDefault()}
                  >
                    Modificar
                  </button>
                </CardBody>
              </Card>
            </Form>
            <Form>
              <Card className="shadow my-3">
                <CardHeader className="bg-white">
                  <h6 className="align-items-center d-flex heading mb-0">
                    Preferencias de cuenta Email
                  </h6>
                </CardHeader>
                <CardBody className="bg-secondary">
                  <div className="pl-lg-4">
                    <FormGroup>
                      <Row className="my-3">
                        <label
                          className="form-control-label pt-2"
                          htmlFor="input-sms-update"
                        >
                          URL de reenvío de eventos de E-Mail
                        </label>
                        <Input
                          className="form-control-alternative"
                          // defaultValue="lucky.jesse"
                          id="input-sms-update"
                          placeholder="Sin url de envío de actualizaciones"
                          type="text"
                        />
                      </Row>
                    </FormGroup>
                  </div>
                  <button
                    className="btn button--default"
                    onClick={(e) => e.preventDefault()}
                  >
                    Modificar
                  </button>
                </CardBody>
              </Card>
            </Form>
          </Col>
          <Col md="5">
            <h1 className="pb-3">&nbsp;</h1>
            <Form>
              <Card className="shadow my-3">
                <CardHeader className="bg-white">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">API</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                      <Button
                        size="sm"
                        className="button--default"
                        onClick={() => setShowModalToken(!showModalToken)}
                      >
                        Generar Token
                      </Button>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody className="bg-secondary">
                  <FormGroup>
                    <Row className="my-3">
                      <Col md="3">
                        <label
                          className="form-control-label pt-2"
                        >
                          ID Cuenta
                        </label>
                      </Col>
                      <Col md="6">
                        <p className="text-gray">098128sfdgs0fg98sfg8jg</p>
                      </Col>
                      <Col md="3">
                        <Button
                          block
                          size="sm"
                          className="button--default"
                          onClick={(e) => e.preventDefault()}
                        >
                          Copiar
                        </Button>
                      </Col>
                    </Row>
                  </FormGroup>
                </CardBody>
              </Card>
            </Form>
            <Form>
              <Card className="shadow my-3">
                <CardHeader className="bg-white">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Envío</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody className="bg-secondary">
                  <FormGroup>
                    <Row className="my-3">
                      <Col md="4">
                        <label
                          className="form-control-label pt-2"
                        >
                          Email Origen
                        </label>
                      </Col>
                      <Col md="4">
                        <Button
                          size="sm"
                          className="button--default"
                          onClick={(e) => e.preventDefault()}
                        >
                          Agregar correo
                        </Button>
                      </Col>
                      <Col md="4">
                      </Col>
                    </Row>
                    <Row className="my-3">
                      <Col md="4">
                        <label
                          className="form-control-label pt-2"
                        >
                          Num. Origen
                        </label>
                      </Col>
                      <Col md="4">
                        <p className="text-gray">+56442341777</p>
                      </Col>
                      <Col md="4">
                        <p className="text-sm">Numero por defecto</p>
                      </Col>
                    </Row>
                    <Row className="my-3">
                      <Col md="4">
                      </Col>
                      <Col md="4">
                        <p className="text-gray">+56442334577</p>
                      </Col>
                      <Col md="4">
                      </Col>
                    </Row>
                    <Row className="my-3">
                      <Col md="4">
                      </Col>
                      <Col md="4">
                        <p className="text-gray">+56442341743</p>
                      </Col>
                      <Col md="4">
                      </Col>
                    </Row>
                    <Row className="my-3">
                      <Col md="4">
                      </Col>
                      <Col md="4">
                        <p className="text-gray">+56442678890</p>
                      </Col>
                      <Col md="4">
                      </Col>
                    </Row>
                    <Row className="my-3">
                      <Col md="4">
                      </Col>
                      <Col md="4">
                        <p className="text-gray">+56442456098</p>
                      </Col>
                      <Col md="4">
                      </Col>
                    </Row>
                    <Row className="my-3">
                      <Col md="4">
                      </Col>
                      <Col md="4">
                        <p className="text-gray">+56442678677</p>
                      </Col>
                      <Col md="4">
                      </Col>
                    </Row>
                  </FormGroup>
                </CardBody>
              </Card>
            </Form>
          </Col>
        </Row>

        {/* Modal Add Enterprise - START */}
          <Modal
            className="modal-dialog-centered"
            size="lg"
            isOpen={showModalToken}
            toggle={() => setShowModalToken(!showModalToken)}
          >
            <div className="modal-header">
              <h6 className="modal-title text-lg" id="modal-title-default">
                Generar Llave
              </h6>
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
                onClick={() => setShowModalToken(!showModalToken)}
              >
                <span aria-hidden={true}>×</span>
              </button>
            </div>
            <div className="modal-body">
              <Row className="my-3">
                <Col>
                  <p>Copie y guarde la llave, esta será la única vez que se mostrará completa. En caso de perderla deberá generar una nueva.</p>
                  <label
                    className="form-control-label pt-2"
                    htmlFor="input-token"
                  >
                    Su nueva llave de API es:
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="input-token"
                    placeholder="Token"
                    type="text"
                  />
                </Col>
              </Row>
            </div>
            <div className="modal-footer">
              <button 
                onClick={() => setShowModalToken(!showModalToken)}
                className="btn button--primary"
                type="button"
              >
                Copiar
              </button>
              <Button
                className="ml-auto"
                color="link"
                data-dismiss="modal"
                type="button"
                onClick={() => setShowModalToken(!showModalToken)}
              >
                Cerrar
              </Button>
            </div>
          </Modal>
        {/* Modal Add Enterprise - END */}
      </Container>
    </div>
  );
}
