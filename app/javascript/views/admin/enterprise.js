import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Container,
  Row,
  Col,
  Button,
  Input,
  Media
} from "reactstrap";

export default function Enterprise(){
  return (
    <Container className='pt-7' fluid>
      <div className="d-flex justify-content-between">
        <h1 className="mb-0">Brisaguas</h1>
        <Button className="btn-outline-danger">
          Agregar contacto
        </Button>
      </div>
      <hr className="mt-3"/>

      {/* content */}
      <Row className="mt-5">
        <Col className="mb-5 mb-xl-0" xl="8">
          <Form>
            <Card className="shadow">
              <CardHeader>
                <Row className="align-items-center">
                  <Col>
                    <Media className="align-items-center">
                      <span className="avatar rounded-circle mr-3 bg-red"></span>
                      <Media>
                        <h2 className="mb-0">
                          Brisaguas
                        </h2>
                      </Media>
                    </Media>
                  </Col>
                  <Col className="text-right">
                    <Button
                      color="white"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Cambiar Image
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
                        htmlFor="input-email-contacto"
                      >
                        Email Contacto
                      </label>
                    </Col>
                    <Col md="9">
                      <Input
                        className="form-control-alternative"
                        id="input-email-contacto"
                        placeholder="@mail.com"
                        type="email"
                      />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row className="my-3">
                    <Col md="3">
                      <label
                        className="form-control-label pt-2"
                        htmlFor="input-email-facturacion"
                      >
                        Email Facturación
                      </label>
                    </Col>
                    <Col md="9">
                      <Input
                        className="form-control-alternative"
                        id="input-email-facturacion"
                        placeholder="@mail.com"
                        type="email"
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
              </CardBody>
            </Card>
          </Form>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col className="mb-5 mb-xl-0" xl="8">
          <Card className="shadow my-3">
            <CardHeader className="bg-white">
              <h6 className="align-items-center d-flex heading mb-0">
                <span 
                  className="align-items-center bg-info text-white d-flex justify-content-center mr-3 rounded-circle" 
                  style={{height: '25px', width: '25px'}}>
                  2
                </span>
                Datos de Facturación
              </h6>
            </CardHeader>
            <CardBody>
              <div className="pl-lg-4">
                <p className='font-weight-600 text-sm'>Empresa y dirección</p>
                <Row className="my-3">
                  <Col md="8">
                    <Row className='border border-gray rounded-lg p-3 my-3'>
                      <div className="d-flex align-items-center custom-control custom-radio">
                        <input
                          onChange={() => setAddress('address1')}
                          className="custom-control-input"
                          defaultChecked
                          id="address1"
                          name="address"
                          type="radio"
                        />
                        <label className="custom-control-label ls-1 mb-1 font-weight-600 h6 d-inline-block" htmlFor="address1">
                          Brisaguas / 96.864.190-5
                          <p className='d-inline-block m-0 text-xs font-weight-100'>Arturo Pratt 1093, oficina 506 / Providencia</p>
                        </label>
                        <a href="#">Modificar</a>
                      </div>
                    </Row>
                    <Row className='border border-gray rounded-lg p-3 my-3'>
                      <div className="d-flex align-items-center custom-control custom-radio">
                        <input
                          onChange={() => setAddress('address2')}
                          className="custom-control-input"
                          defaultChecked
                          id="address2"
                          name="address"
                          type="radio"
                        />
                        <label className="custom-control-label ls-1 mb-1 font-weight-600 h6 d-inline-block" htmlFor="address2">
                          Claro SPA / 98.383.292-4
                          <p className='d-inline-block m-0 text-xs font-weight-100'>Arturo Pratt 1093, oficina 506 / Providencia</p>
                        </label>
                        <a href="#">Modificar</a>
                      </div>
                    </Row>
                    <Row className='border border-gray rounded-lg p-3 my-3'>
                      <div className="d-flex align-items-center">
                        <a href="#" className='font-weight-600'>+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Agregar nueva empresa</a>
                      </div>
                    </Row>
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>


    </Container>
  )
}