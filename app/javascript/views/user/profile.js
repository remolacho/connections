import React from 'react'
import { NavLink } from "react-router-dom";
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

export default function Profile(){
  return (
    <Container className='pt-7' fluid>
      <div className="d-flex justify-content-between">
        <h1 className="mb-0">Perfil de usuario</h1>
      </div>
      <hr className="mt-3"/>

      {/* content */}
      <Row className="mt-5">
        <Col className="mb-5 mb-xl-0" md="6">
          <Form>
            <Card className="shadow">
              <CardHeader>
                <Row className="align-items-center">
                  <Col>
                    <Media className="align-items-center">
                      <span className="avatar rounded-circle mr-3 bg-red"></span>
                      <Media>
                        <div className='d-flex flex-column'>
                          <h2 className="mb-0">
                            Enzo Zerega
                          </h2>
                          <h6 className="text-uppercase text-light ls-1 mb-1">
                            Admin Connectus
                          </h6>
                        </div>
                      </Media>
                    </Media>
                  </Col>
                  <Col className="text-right">
                    <Button
                      className='button--default'
                      color="white"
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
                        htmlFor="input-name"
                      >
                        Nombre
                      </label>
                    </Col>
                    <Col md="9">
                      <Input
                        className="form-control-alternative"
                        id="input-name"
                        placeholder="Nombre"
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
                        htmlFor="input-lastname"
                      >
                        Apellido
                      </label>
                    </Col>
                    <Col md="9">
                      <Input
                        className="form-control-alternative"
                        id="input-lastname"
                        placeholder="Apellido"
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
                        htmlFor="input-email"
                      >
                        Email
                      </label>
                    </Col>
                    <Col md="9">
                      <Input
                        className="form-control-alternative"
                        id="input-email"
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
                        htmlFor="input-telefono"
                      >
                        Teléfono
                      </label>
                    </Col>
                    <Col md="9">
                      <Input
                        className="form-control-alternative"
                        id="input-telefono"
                        placeholder="+568479974"
                        type="text"
                      />
                    </Col>
                  </Row>
                </FormGroup>
                <Button
                  to="/sms/send"
                  tag={NavLink}
                  color="info"
                  outline
                  size="md"
                  className='button--default'
                >
                  Modificar
                </Button>
              </CardBody>
            </Card>
          </Form>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col className="mb-5 mb-xl-0" md="6">
          <Form>
            <Card className="shadow">
              <CardHeader>
                <Row className="align-items-center">
                  <Col>
                    <h2 className="mb-0">
                      Información de la empresa
                    </h2>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Row className="my-3">
                    <Col md="3">
                      <label
                        className="form-control-label pt-2"
                        htmlFor="input-name-enterprise"
                      >
                        Empresa
                      </label>
                    </Col>
                    <Col md="9">
                      <Input
                        className="form-control-alternative"
                        id="input-name-enterprise"
                        placeholder="Nombre Empresa"
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
                        placeholder="RUT Empresa o Identif. Tributaria"
                        type="text"
                      />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row className="my-3">
                    <Col md="3">
                      <label htmlFor="file-list" className="font-weight-600 text-sm">Adjuntar documento legal</label>
                    </Col>
                    <Col md="9">
                      <Input type="file" className="form-control-file" id="file-list" />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row className="my-3">
                    <Col md="3">
                      <label
                        className="form-control-label pt-2"
                        htmlFor="input-rubro"
                      >
                        Rubro
                      </label>
                    </Col>
                    <Col md="9">
                      <Input
                        className="form-control-alternative"
                        id="input-rubro"
                        placeholder="rubro"
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
                        htmlFor="select-country"
                      >
                        País
                      </label>
                    </Col>
                    <Col md="9">
                      <select id="select-country" className="form-control">
                        <option value="chile" defaultValue>Chile</option>
                        <option value="argentina" >Argentina</option>
                        <option value="bolivia">Bolivia</option>
                        <option value="brasil">Brasil</option>
                        <option value="colombia">Colombia</option>
                        <option value="costa-rica">Costa Rica</option>
                        <option value="ecuador">Ecuador</option>
                        <option value="eeuu">EEUU</option>
                        <option value="espana">Espana</option>
                        <option value="guatemala">Guatemala</option>
                        <option value="mexico">Mexico</option>
                        <option value="paraguay">Paraguay</option>
                        <option value="peru">Peru</option>
                        <option value="suecia">Suecia</option>
                        <option value="uruguay">Uruguay</option>
                      </select>
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
                <FormGroup>
                  <Row className="my-3">
                    <Col md="3">
                      <label
                        className="form-control-label pt-2"
                        htmlFor="input-telefono"
                      >
                        Teléfono
                      </label>
                    </Col>
                    <Col md="9">
                      <Input
                        className="form-control-alternative"
                        id="input-telefono"
                        placeholder="+568479974"
                        type="text"
                      />
                    </Col>
                  </Row>
                </FormGroup>
                <Button
                  to="/sms/send"
                  tag={NavLink}
                  color="info"
                  outline
                  size="md"
                  className='button--default'
                >
                  Modificar
                </Button>
              </CardBody>
            </Card>
          </Form>
        </Col>
      </Row>

    </Container>
  )
}