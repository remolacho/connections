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
  Media,
  Modal
} from "reactstrap";

import useDisplayImage from 'utilities/useDisplayImage';

export default function Enterprise(){
  const [showModalAddEnterprise, setShowModalAddEnteprise] = React.useState(true)
  const [enterpriseData, setEnterpriseData] = React.useState({
    profile_image: null
  })
  const hiddenInputFile = React.useRef(null)
  const [result, uploader] = useDisplayImage();

  return (
    <Container className='pt-7' fluid>
      <div>
        <h1 className="mb-0">Brisaguas</h1>
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
                      { result ?
                        <span className="avatar rounded-circle mr-3 bg-green">
                          {<img src={result} alt="enterprise image" />}
                        </span>
                      :
                        <span className="avatar rounded-circle mr-3 bg-red"></span>
                      }
                      <Media>
                        <h2 className="mb-0">
                          Brisaguas
                        </h2>
                      </Media>
                    </Media>
                  </Col>
                  <Col className="text-right">
                    <Button
                      size="sm"
                      className="button--default"
                      onClick={() => hiddenInputFile.current.click()}
                    >
                      Cambiar Image
                    </Button>
                    <input
                      onChange={(event) => {
                        setEnterpriseData({...enterpriseData, profile_image: event.target.files[0]});
                        uploader(event);
                      }}
                      type="file"
                      name="profile_image"
                      ref={hiddenInputFile}
                      hidden
                    />
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
                <Button
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
        <Col className="mb-5 mb-xl-0" xl="8">
          <Card className="shadow my-3">
            <CardHeader className="bg-white">
              <h6 className="align-items-center d-flex heading mb-0">
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
                        <a href="#" className="button--default">Modificar</a>
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
                        <a href="#" className="button--default">Modificar</a>
                      </div>
                    </Row>
                    <Row className='border border-gray rounded-lg p-3 my-3'>
                      <div className="d-flex align-items-center">
                        <a href="#" className='font-weight-600 button--default'>+&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Agregar nueva empresa</a>
                      </div>
                    </Row>
                  </Col>
                </Row>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>


      {/* Modal Add Enterprise - START */}
      <Modal
        className="modal-dialog-centered"
        size="lg"
        isOpen={showModalAddEnterprise}
        toggle={() => setShowModalAddEnteprise(!showModalAddEnterprise)}
      >
        <div className="modal-header">
          <h6 className="modal-title text-lg" id="modal-title-default">
            Agregar Datos facturación empresa
          </h6>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setShowModalAddEnteprise(!showModalAddEnterprise)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <Form>
            <FormGroup>
              <Row className="my-3">
                <Col md="3">
                  <label
                    className="form-control-label pt-2"
                    htmlFor="input-razon-social"
                  >
                    Razon Social
                  </label>
                </Col>
                <Col md="9">
                  <Input
                    className="form-control-alternative"
                    id="input-razon-social"
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
                    htmlFor="input-comuna"
                  >
                    Comuna
                  </label>
                </Col>
                <Col md="9">
                  <Input
                    className="form-control-alternative"
                    id="input-comuna"
                    type="text"
                  />
                </Col>
              </Row>
            </FormGroup>
          </Form>
        </div>
        <div className="modal-footer">
          <button 
            onClick={() => setShowModalBanned(!showModalBanned)}
            className="btn button--primary"
            type="button"
          >
            Agregar
          </button>
          <Button
            className="ml-auto"
            color="link"
            data-dismiss="modal"
            type="button"
            onClick={() => setShowModalAddEnteprise(!showModalAddEnterprise)}
          >
            Cancelar
          </Button>
        </div>
      </Modal>
      {/* Modal Add Enterprise - END */}
    </Container>
  )
}