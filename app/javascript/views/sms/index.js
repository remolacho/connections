import React from "react";
import { Card, CardBody, Form, FormGroup, Input, Container, Row, Col, CardHeader, Button } from "reactstrap";

export default function Index() {
  const [shippingType, setShippingType] = React.useState('individual')
  const [shippingTime, setShippingTime] = React.useState('as_possible')

  return (
    <div className="pt-7">
      <Container fluid>
        <Row>
          <Col md="8">
            <h3 className="pb-3">Enviar SMS</h3>
            <Form>
              <Card className="shadow my-3">
                <CardHeader className="bg-white">
                  <h6 className="align-items-center d-flex heading mb-0">
                    <span 
                      className="align-items-center bg-info text-white d-flex justify-content-center mr-3 rounded-circle" 
                      style={{height: '25px', width: '25px'}}>
                      1
                    </span>
                    ¿A quién?
                  </h6>
                </CardHeader>
                <CardBody className="bg-secondary">
                  <div className="pl-lg-4">
                    <FormGroup>
                      <Row className="my-3">
                        <Col md="3">
                          <label
                            className="form-control-label pt-2"
                            htmlFor="input-send"
                          >
                            Tipo de envio 
                          </label>
                        </Col>
                        <Col md="9">
                          <div className="btn-group btn-group-toggle" data-toggle="buttons">
                            <label className={`btn btn-secondary ${shippingType === 'individual' ? 'active' : ''}`}>
                              <input onClick={event => setShippingType(event.target.id)} type="radio" name="options" id="individual" defaultChecked /> Individual
                            </label>
                            <label className={`btn btn-secondary ${shippingType === 'massive' ? 'active' : ''}`}>
                              <input onClick={event => setShippingType(event.target.id)} type="radio" name="options" id="massive" /> Masivo
                            </label>
                          </div>
                        </Col>
                      </Row>
                    </FormGroup>
                    { shippingType === 'individual' ?
                      <>
                        <FormGroup>
                          <Row className="my-3">
                            <Col md="3">
                              <label
                                className="form-control-label pt-2"
                                htmlFor="input-pais"
                              >
                                País 
                              </label>
                            </Col>
                            <Col md="9">
                              <select className="form-control">
                                <option defaultValue>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </Col>
                        </Row>
                        </FormGroup>
                        <FormGroup>
                          <Row className="my-3">
                            <Col md="3">
                              <label
                                className="form-control-label pt-2"
                                htmlFor="input-phone"
                              >
                                Número de teléfono 
                              </label>
                            </Col>
                            <Col md="9">
                              <Input
                                className="form-control-alternative"
                                id="input-phone"
                                placeholder="Número de teléfono"
                                type="text"
                              />
                            </Col>
                          </Row>
                        </FormGroup>
                      </>
                      :
                      <>
                        <FormGroup>
                          <Row className="my-3">
                            <Col md="3">
                              <label
                                className="form-control-label pt-2"
                                htmlFor="input-pais"
                              >
                                Lista de contactos 
                              </label>
                            </Col>
                            <Col md="6">
                              <select className="form-control">
                                <option defaultValue>Elija una lista de contactos</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </Col>
                            <Col md="3">
                              <Button block className="btn-outline-danger">
                                Agregar Lista
                              </Button>
                            </Col>
                        </Row>
                        </FormGroup>
                        <FormGroup>
                          <Row className="my-3">
                            <Col md="3">
                              <label
                                className="form-control-label pt-2"
                                htmlFor="input-phone"
                              >
                                Números baneados
                              </label>
                            </Col>
                            <Col md="6">
                              <select className="form-control">
                                <option defaultValue>Números baneados de la lista de contactos</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </select>
                            </Col>
                            <Col md="3">
                              <Button block className="btn-outline-danger">
                                Editar
                              </Button>
                            </Col>
                          </Row>
                        </FormGroup>
                      </>
                    }
                  </div>
                </CardBody>
              </Card>
              <Card className="shadow my-3">
                <CardHeader className="bg-white">
                  <h6 className="align-items-center d-flex heading mb-0">
                    <span 
                      className="align-items-center bg-info text-white d-flex justify-content-center mr-3 rounded-circle" 
                      style={{height: '25px', width: '25px'}}>
                      2
                    </span>
                    Mensaje
                  </h6>
                </CardHeader>
                <CardBody className="bg-secondary">
                  <div className="pl-lg-4">
                    <FormGroup>
                      <Row className="my-3">
                        <Col md="3">
                          <label
                            className="form-control-label pt-2"
                            htmlFor="input-phone"
                          >
                            Mensaje Predefinido 
                          </label>
                        </Col>
                        <Col md="9">
                          <select className="form-control">
                            <option defaultValue>Elija un mensaje</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </Col>
                      </Row>
                    </FormGroup>
                    <Row>
                      <button type="button" className="btn" style={{fontSize: "14px"}}>
                        <i className="fa fa-link" />
                        <span className="ml-1">Generar Link corto</span>
                      </button>
                      <button type="button" className="btn" style={{fontSize: "14px"}}>
                        <i className="fa fa-file" />
                        <span className="ml-1">Insertar Archivo</span>
                      </button>
                      <button type="button" className="btn" style={{fontSize: "14px"}}>
                        <i className="fa fa-save" />
                        <span className="ml-1">Guardar como predefinido</span>
                      </button>
                    </Row>
                    <FormGroup>
                      <label className="form-control-label pt-2">Contenido</label>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        defaultValue="Hola! esto es una Prueba!!"
                        type="textarea"
                      />
                      { shippingType === 'massive' &&
                        <>
                          <label className="form-control-label">Insertar campo especial</label>
                          <br />
                          <Button color="primary" size="sm">
                            %TELEFONO
                          </Button>
                          <Button color="primary" size="sm">
                            %NOMBRE
                          </Button>
                          <Button color="primary" size="sm">
                            %EDAD
                          </Button>
                        </>
                       }
                    </FormGroup>
                  </div>
                </CardBody>
              </Card>
              <Card className="shadow my-3">
                <CardHeader className="bg-white">
                  <h6 className="align-items-center d-flex heading mb-0">
                    <span 
                      className="align-items-center bg-info text-white d-flex justify-content-center mr-3 rounded-circle" 
                      style={{height: '25px', width: '25px'}}>
                      3
                    </span>
                    Cuándo
                  </h6>
                </CardHeader>
                <CardBody className="bg-secondary">
                  <div className="pl-lg-4">
                    <FormGroup>
                      <Row className="my-3">
                        <Col md="3">
                          <label
                            className="form-control-label pt-2"
                            htmlFor="input-send"
                          >
                            Momento del envio 
                          </label>
                        </Col>
                        <Col md="9">
                          <div className="btn-group btn-group-toggle" data-toggle="buttons">
                            <label className={`btn btn-secondary ${shippingTime === 'as_possible' ? 'active' : ''}`}>
                              <input onClick={event => setShippingTime(event.target.id)} type="radio" name="options" id="as_possible" defaultChecked /> Lo antes posible
                            </label>
                            <label className={`btn btn-secondary ${shippingTime === 'programmed' ? 'active' : ''}`}>
                              <input onClick={event => setShippingTime(event.target.id)} type="radio" name="options" id="programmed" /> Programado
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
                      </Row>
                    </FormGroup>
                  </div>
                </CardBody>
              </Card>
              <Card className="shadow my-3">
                <CardHeader className="bg-white">
                  <h6 className="align-items-center d-flex heading mb-0">
                    <span 
                      className="align-items-center bg-info text-white d-flex justify-content-center mr-3 rounded-circle" 
                      style={{height: '25px', width: '25px'}}>
                      4
                    </span>
                    Número de Envío
                  </h6>
                </CardHeader>
                <CardBody className="bg-secondary">
                  <div className="pl-lg-4">
                    <FormGroup>
                      <Row className="my-3">
                        <Col md="3">
                          <label
                            className="form-control-label pt-2"
                            htmlFor="input-phone"
                          >
                            Seleccione número de origen
                          </label>
                        </Col>
                        <Col md="9">
                          <select className="form-control">
                            <option defaultValue>Número de origen</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </Col>
                      </Row>
                    </FormGroup>
                  </div>
                </CardBody>
              </Card>
              {
                shippingType === 'massive' &&
                  <Card className="shadow my-3">
                    <CardHeader className="bg-white">
                      <h6 className="align-items-center d-flex heading mb-0">
                        <span 
                          className="align-items-center bg-info text-white d-flex justify-content-center mr-3 rounded-circle" 
                          style={{height: '25px', width: '25px'}}>
                          5
                        </span>
                        Mensaje de Prueba
                      </h6>
                    </CardHeader>
                    <CardBody className="bg-secondary">
                      <div className="pl-lg-4">
                        <FormGroup>
                          <Row className="my-3">
                            <Col md="3">
                              <label
                                className="form-control-label pt-2"
                                htmlFor="input-phone"
                              >
                                Número de teléfono 
                              </label>
                            </Col>
                            <Col md="9">
                              <Input
                                className="form-control-alternative"
                                id="input-phone"
                                placeholder="Número de teléfono"
                                type="text"
                              />
                            </Col>
                          </Row>
                        </FormGroup>
                      </div>
                    </CardBody>
                  </Card>
              }
              <Row className="mt-4">
                <Col className="text-left" xs="4">
                  <Button
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="md"
                  >
                    Enviar SMS
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col md="4">
            <h3 className="pb-3">Vista Previa</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
