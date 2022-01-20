import React from "react";
import { Card, CardBody, Form, FormGroup, Input, Container, Row, Col, CardHeader, Button } from "reactstrap";

export default function SMS() {
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
                          <Input
                            className="form-control-alternative"
                            defaultValue="lucky.jesse"
                            id="input-send"
                            placeholder="send"
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
                            htmlFor="input-pais"
                          >
                            País 
                          </label>
                        </Col>
                        <Col md="9">
                          <select class="form-control">
                            <option selected>Choose...</option>
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
                          <select class="form-control">
                            <option selected>Elija un mensaje</option>
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
                          <Input
                            className="form-control-alternative"
                            defaultValue="lucky.jesse"
                            id="input-send"
                            placeholder="send"
                            type="text"
                          />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <label className="form-control-label pt-2">Calendar</label>
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
                          <select class="form-control">
                            <option selected>Número de origen</option>
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
