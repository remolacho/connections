import React from "react";
import Axios from "axios";
import Toastr from 'toastr';
import { Link, Navigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { 
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Form,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  Button,
  Modal
} from "reactstrap";

export default function Send() {
  const [cookies] = useCookies(["authorization"])
  const [countries, setCountries] = React.useState([])
  const [selectedCountry, setSelectedCountry] = React.useState({})
  const [shippingType, setShippingType] = React.useState('individual')
  const [shippingTime, setShippingTime] = React.useState('as_possible')
  const [showModal, setShowModal] = React.useState(false)
  const [showModalPermissions, setShowModalPermissions] = React.useState(false)
  const [showModalBanned, setShowModalBanned] = React.useState(false)
  const [showModalInsertFile, setShowModalInsertFile] = React.useState(false)
  const [data, setData] = React.useState({
    dst_number: "",
    sms_content: "aaa",
    country_id: 1
  })

  React.useEffect(() => {
    Axios({
      method: "get",
      url: "/v1/addresses/countries/list",
    }).then(response => {
      if(response.data.success) {
        let listCountries = response.data.data
        setCountries(listCountries)
        setSelectedCountry(listCountries.find(country => country.id == parseInt(listCountries[0].id)))
      }
    }).catch(error => {
      console.log(error.response.data.message)
      setCountries([])
    })
  }, [])

  function handleSelectCountry(event){
    setData({ ...data, country_id: parseInt(event.target.value) })
    setSelectedCountry(countries.find(country => country.id == parseInt(event.target.value)))
  }

  function handleSendMessage(event){
    event.preventDefault()
    Axios({
      method: "post",
      url: "/v1/sms/send_individual",
      headers: { 'Authorization': cookies.authorization },
      data: {
        send_individual: {
          ...data,
          dst_number: selectedCountry.code + data.dst_number
        }
      }
    })
    .then(response => {
      if( response.data.success ){
        Toastr.options.closeButton = true;
        Toastr.options.timeOut = 5000;
        Toastr.options.extendedTimeOut = 1000;
        Toastr.options.positionClass = "toast-bottom-right";
        Toastr.success("Mensaje enviado");
        Navigate(`/sms/${response.data.unique_id}`)
      }
    }).catch(error => {
      Toastr.options.closeButton = true;
      Toastr.options.timeOut = 5000;
      Toastr.options.extendedTimeOut = 1000;
      Toastr.options.positionClass = "toast-bottom-right";
      Toastr.error(error.response.data.message);
    })
  }

  function handleType(event){
    setShippingType(event.target.id)
    if(event.target.id === 'massive') setShowModalPermissions(true)
  }

  return (
    <div className="pt-7">
      <Container fluid>
        <Row>
          <Col md="8">
            <h3 className="pb-3">Enviar SMS</h3>
            <Form onSubmit={event => handleSendMessage(event)} role="form" >
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
                              <input onClick={event => handleType(event)} type="radio" name="options" id="individual" defaultChecked /> Individual
                            </label>
                            <label className={`btn btn-secondary ${shippingType === 'massive' ? 'active' : ''}`}>
                              <input onClick={event => handleType(event)} type="radio" name="options" id="massive" /> Masivo
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
                              <select onChange={ event => handleSelectCountry(event) } className="form-control">
                                { countries.map((country, index) => (
                                  <option value={country.id} key={`C#${index}`} >{country.name}</option>
                                )) }
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
                              <div className="input-group has-validation">
                                <div className="input-group-prepend border-right">
                                  <span className="input-group-text">+{selectedCountry.code || '00'}</span>
                                </div>
                                <input 
                                  onChange={ event => setData({...data, dst_number: event.target.value})}
                                  value={ data.dst_number }
                                  type="text"
                                  className="form-control pl-2"
                                  maxLength={ selectedCountry.number_length }
                                  required
                                />
                              </div>
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
                              <button 
                                className="btn btn-block button--secondary"
                                type="button"
                                onClick={() => setShowModal(!showModal)}
                              >
                                Agregar Lista
                              </button>
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
                              <button 
                                className="btn btn-block button--secondary"
                                type="button"
                                onClick={() => setShowModalBanned(!showModalBanned)}
                              >
                                Editar
                              </button>
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
                      <button type="button" className="btn" onClick={() => setShowModalInsertFile(!showModalInsertFile)} style={{fontSize: "14px"}}>
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
                        onChange={e => setData({...data, sms_content: e.target.value})}
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        defaultValue={data.sms_content}
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
                <Col className="text-left" xs="12" md="4">
                  <button
                    type="submit"
                    className="btn button--primary"
                  >
                    Enviar SMS
                  </button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col md="4">
            <h3 className="pb-3">Vista Previa</h3>
            <div className="preview">
              <img
                className="preview__image"
                alt="phone preview"
                src={
                  require("assets/img/mobile.png")
                }
              />
              <div className="preview__content">
                <h3 className="preview__content__title h1">{data.dst_number}</h3>
                <span className="preview__content__date text-xs">Miercoles 4 de Agosto - 14:30</span>
                <p className="preview__content__message--sms p-3 rounded-right rounded-top text-white">
                  {data.sms_content}
                </p>
              </div>
            </div>
          </Col>
        </Row>
        
        <Modal
          className="modal-dialog-centered"
          size="lg"
          isOpen={showModal}
          toggle={() => setShowModal(!showModal)}
        >
          <div className="modal-header">
            <h6 className="modal-title text-lg" id="modal-title-default">
              Lista de contactos
            </h6>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => setShowModal(!showModal)}
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
                <label htmlFor="name-list" className="font-weight-600 text-sm">Mi lista de contactos</label>
                <input type="email" className="form-control" id="name-list" placeholder="Mi lista de contactos" />
              </div>
              <div className="form-group">
                <label htmlFor="file-list" className="font-weight-600 text-sm">Lista</label>
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
            <button 
              className="btn button--primary"
              type="button"
            >
              Aceptar
            </button>
            <Button
              className="ml-auto"
              color="link"
              data-dismiss="modal"
              type="button"
              onClick={() => setShowModal(!showModal)}
            >
              Cancelar
            </Button>
          </div>
        </Modal>

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
            <Link 
              to="/user/profile"
              className="btn button--primary"
              type="button"

            >
              Ir al perfil de usuario
            </Link>
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

        {/* Modal Banned - START */}
        <Modal
          className="modal-dialog-centered"
          size="lg"
          isOpen={showModalBanned}
          toggle={() => setShowModalBanned(!showModalBanned)}
        >
          <div className="modal-header">
            <h6 className="modal-title text-lg" id="modal-title-default">
              Editar lista de contactos
            </h6>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => setShowModalBanned(!showModalBanned)}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <p className="font-weight-600">Banear o desbanear números</p>
            <div className="alert fade show" role="alert" style={{ backgroundColor: "#C1D5FC", borderColor: "#C1D5FC" }}>
              <span className="d-inline-block">
                Escoja los números de su lista de contactos que desee <strong>bloquear o desbloquear</strong>
              </span>
              <button
                aria-label="Close Alert"
                className="close"
                type="button"
              >
                <span className="text-white" aria-hidden={true}>×</span>
              </button>
            </div>

            <Row>
              <div className="col">
                <Card className="shadow">
                  <CardHeader className="border-0">
                    <Row>
                      <Col md="7">
                        <h2>"Mi Lista.CSV"</h2>
                      </Col>
                      <Col md='5'>
                        <Input
                            className="form-control-alternative"
                            id="input-phone"
                            placeholder="Buscar"
                            type="text"
                          />
                      </Col>
                    </Row>
                  </CardHeader>
                  <Table className="align-items-center table-flush" responsive borderless>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col" className="text-center">Teléfono</th>
                        <th scope="col" className="text-center">Nombre</th>
                        <th scope="col" className="text-center">Hora</th>
                        <th scope="col" className="text-center">Bloquear</th>
                        <th scope="col" className="text-center">Desbloquear</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" className="mb-0 text-sm text-center d-block">
                          +568867005
                        </th>
                        <td className="text-center">Emanuel</td>
                        <td className="text-center">10:00</td>
                        <td className="text-center">
                          <div className="custom-control custom-control-alternative custom-radio ml-4">
                            <input
                              // onChange={() => ...}
                              className="custom-control-input"
                              id="customRadio1"
                              name="custom-radio-1"
                              type="radio"
                            />
                            <label className="custom-control-label" htmlFor="customRadio1">
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="custom-control custom-control-alternative custom-radio ml-4">
                            <input
                              // onChange={() => ...}
                              className="custom-control-input"
                              id="customRadio2"
                              name="custom-radio-1"
                              type="radio"
                              defaultChecked
                            />
                            <label className="custom-control-label" htmlFor="customRadio2">
                              &nbsp;
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="mb-0 text-sm text-center d-block">
                          +568867005
                        </th>
                        <td className="text-center">Emanuel</td>
                        <td className="text-center">10:00</td>
                        <td className="text-center">
                          <div className="custom-control custom-control-alternative custom-radio ml-4">
                            <input
                              // onChange={() => ...}
                              className="custom-control-input"
                              id="customRadio3"
                              name="custom-radio-2"
                              type="radio"
                              defaultChecked
                            />
                            <label className="custom-control-label" htmlFor="customRadio3">
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="custom-control custom-control-alternative custom-radio ml-4">
                            <input
                              // onChange={() => ...}
                              className="custom-control-input"
                              id="customRadio4"
                              name="custom-radio-2"
                              type="radio"
                            />
                            <label className="custom-control-label" htmlFor="customRadio4">
                              &nbsp;
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="mb-0 text-sm text-center d-block">
                          +568867005
                        </th>
                        <td className="text-center">Emanuel</td>
                        <td className="text-center">10:00</td>
                        <td className="text-center">
                          <div className="custom-control custom-control-alternative custom-radio ml-4">
                            <input
                              // onChange={() => ...}
                              className="custom-control-input"
                              id="customRadio5"
                              name="custom-radio-3"
                              type="radio"
                            />
                            <label className="custom-control-label" htmlFor="customRadio5">
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="custom-control custom-control-alternative custom-radio ml-4">
                            <input
                              // onChange={() => ...}
                              className="custom-control-input"
                              id="customRadio6"
                              name="custom-radio-3"
                              type="radio"
                              defaultChecked
                            />
                            <label className="custom-control-label" htmlFor="customRadio6">
                              &nbsp;
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="mb-0 text-sm text-center d-block">
                          +568867005
                        </th>
                        <td className="text-center">Emanuel</td>
                        <td className="text-center">10:00</td>
                        <td className="text-center">
                          <div className="custom-control custom-control-alternative custom-radio ml-4">
                            <input
                              // onChange={() => ...}
                              className="custom-control-input"
                              id="customRadio7"
                              name="custom-radio-4"
                              type="radio"
                              defaultChecked
                            />
                            <label className="custom-control-label" htmlFor="customRadio7">
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="custom-control custom-control-alternative custom-radio ml-4">
                            <input
                              // onChange={() => ...}
                              className="custom-control-input"
                              id="customRadio8"
                              name="custom-radio-4"
                              type="radio"
                            />
                            <label className="custom-control-label" htmlFor="customRadio8">
                              &nbsp;
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row" className="mb-0 text-sm text-center d-block">
                          +568867005
                        </th>
                        <td className="text-center">Emanuel</td>
                        <td className="text-center">10:00</td>
                        <td className="text-center">
                          <div className="custom-control custom-control-alternative custom-radio ml-4">
                            <input
                              // onChange={() => ...}
                              className="custom-control-input"
                              id="customRadio9"
                              name="custom-radio-5"
                              type="radio"
                              />
                            <label className="custom-control-label" htmlFor="customRadio9">
                              &nbsp;
                            </label>
                          </div>
                        </td>
                        <td className="text-center">
                          <div className="custom-control custom-control-alternative custom-radio ml-4">
                            <input
                              // onChange={() => ...}
                              className="custom-control-input"
                              id="customRadio10"
                              name="custom-radio-5"
                              type="radio"
                              defaultChecked
                            />
                            <label className="custom-control-label" htmlFor="customRadio10">
                              &nbsp;
                            </label>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <CardFooter className="py-4">
                    <nav aria-label="...">
                      <Pagination
                        className="pagination justify-content-end mb-0"
                        listClassName="justify-content-end mb-0"
                      >
                        <PaginationItem className="disabled">
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            tabIndex="-1"
                          >
                            <i className="fas fa-angle-left" />
                            <span className="sr-only">Previous</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem className="active">
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            1
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            2 <span className="sr-only">(current)</span>
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            3
                          </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-angle-right" />
                            <span className="sr-only">Next</span>
                          </PaginationLink>
                        </PaginationItem>
                      </Pagination>
                    </nav>
                  </CardFooter>
                </Card>
              </div>
            </Row>
            
          </div>
          <div className="modal-footer">
            <button 
              onClick={() => setShowModalBanned(!showModalBanned)}
              className="btn button--primary"
              type="button"
            >
              Finalizar
            </button>
            <Button
              className="ml-auto"
              color="link"
              data-dismiss="modal"
              type="button"
              onClick={() => setShowModalBanned(!showModalBanned)}
            >
              Cancelar
            </Button>
          </div>
        </Modal>
        {/* Modal Banned - END */}

        {/* Modal Insert Files - START */}
        <Modal
          className="modal-dialog-centered"
          size="lg"
          isOpen={showModalInsertFile}
          toggle={() => setShowModalInsertFile(!showModalInsertFile)}
        >
          <div className="modal-header">
            <h6 className="modal-title text-lg" id="modal-title-default">
              Insertar Archivo
            </h6>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => setShowModalInsertFile(!showModalInsertFile)}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="alert fade show" role="alert" style={{ backgroundColor: "#C1D5FC", borderColor: "#C1D5FC" }}>
              <span className="d-inline-block">
                Formatos adminisibles: PDF, JPEG, ZIP, Microsoft Office (Word, Excel y Power Point)
              </span>
              <button
                aria-label="Close Alert"
                className="close"
                type="button"
              >
                <span className="text-white" aria-hidden={true}>×</span>
              </button>
            </div>

            <Row>
              <div className="col">
                <Card className="shadow">
                  <CardHeader className="border-0">
                    <Row>
                      <Col md="7">
                        <h2>Archivos Adjuntos</h2>
                      </Col>
                    </Row>
                  </CardHeader>
                  <Table className="align-items-center table-flush" responsive borderless>
                    <thead className="thead-light">
                      <tr>
                        <th scope="col" className="text-center">Archivo</th>
                        <th scope="col" className="text-center">Link Corto</th>
                        <th scope="col" className="text-center">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row" className="mb-0 text-sm text-center d-block">
                          Screen Shot 2020-05-27.jpg
                        </th>
                        <td className="text-center">
                          <a href="#">
                            cnt.us/5Sdely
                          </a>
                        </td>
                        <td className="text-center text-danger">Eliminar</td>
                      </tr>
                      <tr>
                        <th scope="row" className="mb-0 text-sm text-center d-block">
                          Screen Shot 2020-05-27.jpg
                        </th>
                        <td className="text-center">
                          <a href="#">
                            cnt.us/5Sdely
                          </a>
                        </td>
                        <td className="text-center text-danger">Eliminar</td>
                      </tr>
                      <tr>
                        <th scope="row" className="mb-0 text-sm text-center d-block">
                          Screen Shot 2020-05-27.jpg
                        </th>
                        <td className="text-center">
                          <a href="#">
                            cnt.us/5Sdely
                          </a>
                        </td>
                        <td className="text-center text-danger">Eliminar</td>
                      </tr>
                      <tr>
                        <th scope="row" className="mb-0 text-sm text-center d-block">
                          Screen Shot 2020-05-27.jpg
                        </th>
                        <td className="text-center">
                          <a href="#">
                            cnt.us/5Sdely
                          </a>
                        </td>
                        <td className="text-center text-danger">Eliminar</td>
                      </tr>
                      <tr>
                        <th scope="row" className="mb-0 text-sm text-center d-block">
                          Screen Shot 2020-05-27.jpg
                        </th>
                        <td className="text-center">
                          <a href="#">
                            cnt.us/5Sdely
                          </a>
                        </td>
                        <td className="text-center text-danger">Eliminar</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card>
              </div>
            </Row>

            <Row className="my-2">
              <Col>
                <h2>Insertar Archivo</h2>
                <div className="form-group">
                  <label htmlFor="file-list" className="font-weight-600 text-sm">Subir e insertar archivo nuevo</label>
                  <input type="file" className="form-control-file" id="file-list" />
                </div>
              </Col>
            </Row>
            
          </div>
          <div className="modal-footer">
            <button 
              onClick={() => setShowModalInsertFile(!showModalInsertFile)}
              className="btn button--primary"
              type="button"
            >
              Finalizar
            </button>
            <Button
              className="ml-auto"
              color="link"
              data-dismiss="modal"
              type="button"
              onClick={() => setShowModalInsertFile(!showModalInsertFile)}
            >
              Cancelar
            </Button>
          </div>
        </Modal>
        {/* Modal Insert Files - END */}

      </Container>
    </div>
  );
}
