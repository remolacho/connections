import React from "react";
import { 
  Card,
  CardBody,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Container,
  Row,
  Col,
  CardHeader,
  Button,
  Modal,
  Alert
} from "reactstrap";

export default function Send() {
  const [shippingType, setShippingType] = React.useState('individual')
  const [shippingTime, setShippingTime] = React.useState('as_possible')
  const [showModalListContact, setShowModalListContact] = React.useState(false)
  const [showModalAddEmail, setShowModalAddEmail] = React.useState(false)
  const [showModalPermissions, setShowModalPermissions] = React.useState(false)

  return (
    <div className="pt-7">
      <Container fluid>
        <Row>
          <Col md="8">
            <h3 className="pb-3">Enviar Email</h3>
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
                                htmlFor="input-phone"
                              >
                                Correo destino 
                              </label>
                            </Col>
                            <Col md="9">
                              <InputGroup className="mb-4">
                                <InputGroupAddon addonType="prepend">
                                  <InputGroupText>
                                    <i className="fas fa-envelope" />
                                  </InputGroupText>
                                </InputGroupAddon>
                                <Input 
                                  id="input-phone"
                                  placeholder="Correo destino"
                                  type="email" 
                                />
                              </InputGroup>
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
                              <Button 
                                block 
                                className="btn-warning"
                                type="button"
                                onClick={() => setShowModalListContact(!showModalListContact)}
                              >
                                Agregar Lista
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
                    Contenido del Email
                  </h6>
                </CardHeader>
                <CardBody className="bg-secondary">
                  <div className="pl-lg-4">
                    <FormGroup>
                      <Row className="my-3">
                        <Col md="3">
                          <label
                            className="form-control-label pt-2"
                            htmlFor="input-sender-name"
                          >
                            Nombre del remitente
                          </label>
                        </Col>
                        <Col md="9">
                          <Input 
                            id="input-sender-name"
                            placeholder="Correo destino"
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
                            htmlFor="input-mail-origin"
                          >
                            Correo de origen
                          </label>
                        </Col>
                        <Col md="6">
                          <select className="form-control">
                            <option defaultValue>Elija un correo de origen</option>
                            <option value="1">one@gmail.com</option>
                            <option value="2">two@gmail.com</option>
                            <option value="3">three@gmail.com</option>
                          </select>
                        </Col>
                        <Col md="3">
                          <Button 
                            block 
                            className="btn-warning"
                            type="button"
                            onClick={() => setShowModalAddEmail(!showModalAddEmail)}
                          >
                            Agregar correo
                          </Button>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row className="my-3">
                        <Col md="3">
                          <label
                            className="form-control-label pt-2"
                            htmlFor="input-subject"
                          >
                            Asunto
                          </label>
                        </Col>
                        <Col md="9">
                          <Input 
                            id="input-subject"
                            placeholder="Asunto"
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
                            htmlFor="input-default-email"
                          >
                            Email Predefinido 
                          </label>
                        </Col>
                        <Col md="9">
                          <select className="form-control">
                            <option defaultValue>Elija un email predefinido</option>
                            <option value="1">one@gmail.com</option>
                            <option value="2">two@gmail.com</option>
                            <option value="3">three@gmail.com</option>
                          </select>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row className="my-3">
                        <Col md="3">
                          <label
                            className="form-control-label pt-2"
                            htmlFor="input-default-email"
                          >
                            Email Predefinido 
                          </label>
                        </Col>
                      </Row>
                    </FormGroup>
                    <Row>
                      <Col md="3" style={{ height: "170px"}}>
                        <div className="d-flex justify-content-center align-items-center bg-gradient-teal rounded px-2 h-100">
                          <p className="font-weight-600">Sin Tema</p>
                        </div>
                        <span className="d-block bg-green rounded mt-1" style={{ height: "5px"}}></span>
                      </Col>
                      <Col md="3" style={{ height: "170px"}}>
                        <div className="bg-gradient-teal rounded px-2 h-100">
                        </div>
                      </Col>
                      <Col md="3" style={{ height: "170px"}}>
                        <div className="bg-gradient-teal rounded px-2 h-100">
                        </div>
                      </Col>
                      <Col md="3" style={{ height: "170px"}}>
                        <div className="bg-gradient-teal rounded px-2 h-100">
                        </div>
                      </Col>
                    </Row>
                    <FormGroup className="my-3">
                      <label className="form-control-label pt-2">Contenido</label>
                      <Row>
                        <button type="button" className="btn" style={{fontSize: "14px"}}>
                          <i className="fa fa-save" />
                          <span className="ml-1 font-weight-300">Guardar como predefinido</span>
                        </button>
                      </Row>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        defaultValue="This is a WYSIWYG !!"
                        type="textarea"
                      />
                      <Row className="my-3">
                        <Col md="8">
                          <Row className='border border-gray rounded-lg p-3 my-3'>
                            <div className="d-flex w-100 align-items-center justify-content-between custom-control custom-checkbox mb-3">
                              <input
                                className="custom-control-input"
                                id="customCheck1"
                                type="checkbox"
                              />
                              <label className="custom-control-label ls-1 mb-1 font-weight-600 h6 d-inline-block" htmlFor="customCheck1">
                                <div className="d-flex">
                                  <span className="bg-gradient-teal rounded d-block mr-2" style={{ height: "60px", width: "60px"}}></span>
                                  <div>
                                    Nombre archivo
                                    <p className='m-0 text-xs font-weight-100'>
                                      Martes, 7 de diciembre de 2021 <br/> 4.56 KB 
                                    </p>
                                  </div>
                                </div>
                              </label>
                              <a href="#" className="d-inline-block">Link archivo</a>
                              <i className="far fa-eye text-black d-inline-block"></i>
                              <i className="fas fa-trash d-inline-block"></i>
                            </div>
                          </Row>
                          <Row className='border border-gray rounded-lg p-3 my-3'>
                            <div className="d-flex w-100 align-items-center justify-content-between custom-control custom-checkbox mb-3">
                              <input
                                className="custom-control-input"
                                defaultChecked
                                id="customCheck2"
                                type="checkbox"
                              />
                              <label className="custom-control-label ls-1 mb-1 font-weight-600 h6 d-inline-block" htmlFor="customCheck2">
                                <div className="d-flex">
                                  <span className="bg-gradient-teal rounded d-block mr-2" style={{ height: "60px", width: "60px"}}></span>
                                  <div>
                                    Nombre archivo
                                    <p className='m-0 text-xs font-weight-100'>
                                      Martes, 7 de diciembre de 2021 <br/> 4.56 KB 
                                    </p>
                                  </div>
                                </div>
                              </label>
                              <a href="#" className="d-inline-block">Link archivo</a>
                              <i className="far fa-eye text-black d-inline-block"></i>
                              <i className="fas fa-trash d-inline-block"></i>
                            </div>
                          </Row>
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
                      3
                    </span>
                    Archivos adjuntos
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
                            Lista de archivos
                          </label>
                        </Col>
                        <Col md="6">
                          <select className="form-control">
                            <option defaultValue>Elija un archivo</option>
                            <option value="1">Nombre de archivo / martes, 07 de diciembre de 2021 / 4.56 KB</option>
                            <option value="2">Nombre de archivo / martes, 07 de diciembre de 2021 / 4.56 KB</option>
                            <option value="3">Nombre de archivo / martes, 07 de diciembre de 2021 / 4.56 KB</option>
                          </select>
                        </Col>
                        <Col md="3">
                          <Button 
                            block 
                            className="btn-warning"
                            type="button"
                          >
                            Insertar archivo
                          </Button>
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
              <Row className="mt-4">
                <Col className="text-left" xs="4">
                  <Button
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="md"
                  >
                    Enviar EMAIL
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col md="4">
            <h3 className="pb-3">Vista Previa</h3>
          </Col>
        </Row>
        
        {/*  Modal List Contact - START  */}
        <Modal
          className="modal-dialog-centered"
          size="lg"
          isOpen={showModalListContact}
          toggle={() => setShowModalListContact(!showModalListContact)}
        >
          <div className="modal-header">
            <h6 className="modal-title text-lg" id="modal-title-default">
              Agregar Lista de contactos
            </h6>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => setShowModalListContact(!showModalListContact)}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <p className="align-items-center font-weight-600 text-sm d-flex">
              <span 
                className="align-items-center bg-info text-sm text-white d-flex justify-content-center mr-2 rounded-circle" 
                style={{height: '24px', width: '24px'}}>
                1
              </span>
              Crear Lista
            </p>
            <div className="alert fade show" role="alert" style={{ backgroundColor: "#C1D5FC", borderColor: "#C1D5FC" }}>
              <span className="d-inline-block">
                El primer encabezado de la <strong>primera columna</strong> deber decir <strong>"telefono" o "email"</strong>
              </span>
              <button
                aria-label="Close Alert"
                className="close"
                type="button"
              >
                <span className="text-white" aria-hidden={true}>×</span>
              </button>
            </div>
            <div className="alert fade show" role="alert" style={{ backgroundColor: "#C1D5FC", borderColor: "#C1D5FC" }}>
              <span className="d-inline-block">
                <strong>CSV</strong> El archivo en formato
              </span>
              <button
                aria-label="Close Alert"
                className="close"
                type="button"
              >
                <span className="text-white" aria-hidden={true}>×</span>
              </button>
            </div>
            <div className="my-4 text-center">
              <img
                alt="Ejemplo CSV"
                className=""
                src={require("assets/img/spreadsheet.png")}
              />
              <p className="my-2">Ejemplo CSV</p>
              <Button 
                color="warning" 
                type="button"
                className="my-2"
              >
                Descargar CSV Ejemplo
              </Button>
            </div>
            <p className="align-items-center font-weight-600 text-sm d-flex">
              <span 
                className="align-items-center bg-info text-sm text-white d-flex justify-content-center mr-2 rounded-circle" 
                style={{height: '24px', width: '24px'}}>
                2
              </span>
              Cargar Archivo
            </p>
            <form>
              <div className="form-group mb-2">
                <label for="name-list" className="font-weight-600 text-sm">Nombre de la lista</label>
                <input type="email" className="form-control" id="name-list" placeholder="Nombre de la lista" />
              </div>
              <div className="form-group">
                <label for="file-list" className="font-weight-600 text-sm">Lista</label>
                <input type="file" className="form-control-file" id="file-list" />
              </div>
            </form>
            <div className="text-center">
              <svg className="mx-2 mb-1 fill-current">
                <use xlinkHref="#error" />
              </svg>
              <p className="text-xl mb-1 font-weight-600">La lista no se cargó</p>
              <p>La lista ingresada tiene los siguientes errores...</p>
            </div>
            <div className="alert fade show" role="alert" style={{ backgroundColor: "#C1D5FC", borderColor: "#C1D5FC" }}>
              <span className="d-inline-block">
                La fila 43 presenta caracteres que <strong>no cumplen UTF-8</strong>
              </span>
              <button
                aria-label="Close Alert"
                className="close"
                type="button"
              >
                <span className="text-white" aria-hidden={true}>×</span>
              </button>
            </div>
            <div className="text-center">
              <svg className="mx-2 mb-1 fill-current">
                <use xlinkHref="#confirmation" />
              </svg>
              <p className="text-xl mb-1 font-weight-600">La lista fue cargada</p>
              <p>La lista ingresada fue cargada con éxito!</p>
            </div>
          </div>
          <div className="modal-footer">
            <Button color="info" type="button">
              Aceptar
            </Button>
            <Button
              className="ml-auto"
              color="link"
              data-dismiss="modal"
              type="button"
              onClick={() => setShowModalListContact(!showModalListContact)}
            >
              Cancelar
            </Button>
          </div>
        </Modal>
        {/*  Modal List Contact - END  */}

        {/*  Modal Add Email - START  */}
        <Modal
          className="modal-dialog-centered"
          isOpen={showModalAddEmail}
          toggle={() => setShowModalAddEmail(!showModalAddEmail)}
        >
          <div className="modal-header">
            <h6 className="modal-title text-lg" id="modal-title-default">
              Agregar Lista de contactos
            </h6>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => setShowModalAddEmail(!showModalAddEmail)}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group mb-2">
                <label for="name-list" className="font-weight-600 text-sm">Correo</label>
                <input type="email" className="form-control" id="name-list" placeholder="Ingrese el correo a agregar a la cuenta" />
              </div>
              <p className="font-weight-600 mb-0">Para agregar el correo a su cuenta, este deberá ser validado.</p>
              <p className="font-weight-600">Se le enviará un Email</p>
            </form>
          </div>
          <div className="modal-footer">
            <Button color="info" type="button">
              Enviar
            </Button>
            <Button
              className="ml-auto"
              color="link"
              data-dismiss="modal"
              type="button"
              onClick={() => setShowModalAddEmail(!showModalAddEmail)}
            >
              Cancelar
            </Button>
          </div>
        </Modal>
        {/*  Modal Add Email - END  */}

        {/* Modal Permissions - START */}
        <Modal
          className="modal-dialog-centered"
          size="md"
          isOpen={showModalPermissions}
          toggle={() => setShowModalPermissions(!showModalPermissions)}
        >
          <div className="modal-header">
            <h6 className="modal-title text-lg" id="modal-title-default">
              Habilitar envío de SMS masivo
            </h6>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => setShowModalPermissions(!showModalPermissions)}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <p>
              Para poder realizar envíos de SMS masivo, primero necesitamos verificar información referente a su empresa. 
              Por favor complete la información adicional para pasar al proceso de verificación 
              y posterior activación del servicio de SMS masivo.
            </p>
          </div>
          <div className="modal-footer">
            <Button 
              to="/user/profile"
              tag={NavLink}
              color="info"
              type="button"

            >
              Ir al perfil de usuario
            </Button>
            <Button
              className="ml-auto"
              color="link"
              data-dismiss="modal"
              type="button"
              onClick={() => setShowModalPermissions(!showModalPermissions)}
            >
              Cancelar
            </Button>
          </div>
        </Modal>
        {/* Modal Permissions - END */}

      </Container>
    </div>
  );
}
