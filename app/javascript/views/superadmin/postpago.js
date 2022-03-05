import React from "react"
import {
  Card,
  CardHeader,
  CardFooter,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  Col,
  Button,
  Input,
  Modal,
} from "reactstrap";

export default function Postpago(){
  const [showModalShippingRate, setShowModalShippingRate] = React.useState(true)

  return (
    <Container className="pt-7" fluid>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h1 className="mb-0">Clientes Post Pago</h1>
        </div>
      </div>
      <hr className="mt-3"/>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row>
                <Col md="7">
                  <h2>Cierres seleccionados 
                    <Button
                      className="ml-4"
                      color="default"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Cierre Multiple
                    </Button>
                  </h2>
                </Col>
                <Col md='5'>
                  <Input
                      className="form-control-alternative"
                      id="input-phone"
                      placeholder="Buscar..."
                      type="text"
                    />
                </Col>
              </Row>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive borderless>
              <thead className="thead-light">
                <tr>
                  <th scope="col">
                    <input type="checkbox" id="all_cbox" value="first_checkbox" />
                  </th>
                  <th scope="col">Cliente</th>
                  <th scope="col" className="text-center">Consumo ultimo mes</th>
                  <th scope="col" className="text-center">Tipo de envio</th>
                  <th scope="col" className="text-center">Estado</th>
                  <th scope="col" className="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <input type="checkbox" id="cbox1" value="cbx-1" />
                  </th>
                  <td>
                    <Media className="align-items-center">
                      <a
                        className="avatar rounded-circle mr-3 bg-green"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                      >
                        {/* <img
                          alt="..."
                          src={
                            require("assets/img/theme/bootstrap.jpg")
                          }
                        /> */}
                      </a>
                      <Media>
                        <span className="mb-0 text-sm">
                          Claro Chile / 76.388.584-5
                        </span>
                      </Media>
                    </Media>
                  </td>
                  <td className="text-center text-info">
                    ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)}
                  </td>
                  <td className="text-center">
                    <a 
                      type="button" 
                      className="text-blue"
                      onClick={() => setShowModalShippingRate(!showModalShippingRate)}
                    >
                      183.484
                    </a>
                  </td>
                  <td className="text-center text-info">Abierto</td>
                  <td className="text-center">
                    <a href="#" type="button" className="d-inline-block mx-4">Generar Cierre</a>
                    <a href="#" type="button" className="d-inline-block mx-4">Editar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <input type="checkbox" id="cbox2" value="cbx-2" />
                  </th>
                  <td>
                    <Media className="align-items-center">
                      <a
                        className="avatar rounded-circle mr-3 bg-green"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                      >
                        {/* <img
                          alt="..."
                          src={
                            require("assets/img/theme/bootstrap.jpg")
                          }
                        /> */}
                      </a>
                      <Media>
                        <span className="mb-0 text-sm">
                          Brauna / 76.388.584-5
                        </span>
                      </Media>
                    </Media>
                  </td>
                  <td className="text-center text-info">
                    ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)}
                  </td>
                  <td className="text-center">
                    <a 
                      type="button" 
                      className="text-blue"
                      onClick={() => setShowModalShippingRate(!showModalShippingRate)}
                    >
                      183.484
                    </a>
                  </td>
                  <td className="text-center text-info">Abierto</td>
                  <td className="text-center">
                    <a href="#" type="button" className="d-inline-block mx-4">Generar Cierre</a>
                    <a href="#" type="button" className="d-inline-block mx-4">Editar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <input type="checkbox" id="cbox3" value="cbx-3" />
                  </th>
                  <td>
                    <Media className="align-items-center">
                      <a
                        className="avatar rounded-circle mr-3 bg-red"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                      >
                        {/* <img
                          alt="..."
                          src={
                            require("assets/img/theme/bootstrap.jpg")
                          }
                        /> */}
                      </a>
                      <Media>
                        <span className="mb-0 text-sm">
                          CTHC / 76.388.584-5
                        </span>
                      </Media>
                    </Media>
                  </td>
                  <td className="text-center text-info">
                    ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)}
                  </td>
                  <td className="text-center">
                    <a 
                      type="button" 
                      className="text-blue"
                      onClick={() => setShowModalShippingRate(!showModalShippingRate)}
                    >
                      183.484
                    </a>
                  </td>
                  <td className="text-center text-info">Abierto</td>
                  <td className="text-center">
                    <a href="#" type="button" className="d-inline-block mx-4">Generar Cierre</a>
                    <a href="#" type="button" className="d-inline-block mx-4">Editar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <input type="checkbox" id="cbox4" value="cbx-4" />
                  </th>
                  <td>
                    <Media className="align-items-center">
                      <a
                        className="avatar rounded-circle mr-3 bg-gray"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                      >
                        {/* <img
                          alt="..."
                          src={
                            require("assets/img/theme/bootstrap.jpg")
                          }
                        /> */}
                      </a>
                      <Media>
                        <span className="mb-0 text-sm">
                          RH Producciones / 76.388.584-5
                        </span>
                      </Media>
                    </Media>
                  </td>
                  <td className="text-center text-info">
                    ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)}
                  </td>
                  <td className="text-center">
                    <a 
                      type="button" 
                      className="text-blue"
                      onClick={() => setShowModalShippingRate(!showModalShippingRate)}
                    >
                      183.484
                    </a>
                  </td>
                  <td className="text-center text-success">Cerrado</td>
                  <td className="text-center">
                    <a href="#" type="button" className="mx-2 text-warning">
                      <i className="ni ni-cloud-upload-96 mr-2"></i>
                      Subir Factura
                    </a>
                    <a href="#" type="button" className="d-inline-block mx-4">Editar</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <input type="checkbox" id="cbox5" value="cbx-5" />
                  </th>
                  <td>
                    <Media className="align-items-center">
                      <a
                        className="avatar rounded-circle mr-3 bg-yellow"
                        href="#"
                        onClick={(e) => e.preventDefault()}
                      >
                        {/* <img
                          alt="..."
                          src={
                            require("assets/img/theme/bootstrap.jpg")
                          }
                        /> */}
                      </a>
                      <Media>
                        <span className="mb-0 text-sm">
                          CTHC / 76.388.584-5
                        </span>
                      </Media>
                    </Media>
                  </td>
                  <td className="text-center text-info">
                    ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(23574)}
                  </td>
                  <td className="text-center">
                    <a 
                      type="button" 
                      className="text-blue"
                      onClick={() => setShowModalShippingRate(!showModalShippingRate)}
                    >
                      183.484
                    </a>
                  </td>
                  <td className="text-center text-success">Cerrado</td>
                  <td className="text-center">
                    <a href="#" type="button" className="d-inline-block mx-4">Generar Cierre</a>
                    <a href="#" type="button" className="d-inline-block mx-4">Editar</a>
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

      <Modal
          className="modal-dialog-centered"
          size="xl"
          isOpen={showModalShippingRate}
          toggle={() => setShowModalShippingRate(!showModalShippingRate)}
        >
          <div className="modal-header">
            <h6 className="modal-title text-xl" id="modal-title-default">
              Beetrack
            </h6>
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={() => setShowModalShippingRate(!showModalShippingRate)}
            >
              <span aria-hidden={true}>×</span>
            </button>
          </div>
          <div className="modal-body">
            <Table className="align-items-center table-flush" responsive borderless>
              <thead className="thead-light">
                <tr>
                  <th scope="col" className="text-left">Pais / Servicio</th>
                  <th scope="col" className="text-center">
                    <svg className="mx-2 mb-1 fill-current" style={{width: "15px", height: "15px"}}>
                      <use xlinkHref="#sms" />
                    </svg>
                    SMS
                  </th>
                  <th scope="col" className="text-center">
                    <svg className="mx-2 mb-1 fill-current" style={{width: "15px", height: "15px"}}>
                      <use xlinkHref="#email" />
                    </svg>
                    Email
                  </th>
                  <th scope="col" className="text-center">
                    <svg className="mx-2 mb-1 fill-current" style={{width: "15px", height: "15px"}}>
                      <use xlinkHref="#whatsapp" />
                    </svg>
                    Whatsapp
                  </th>
                  <th scope="col" className="text-center">
                    <svg className="mx-2 mb-1 fill-current" style={{width: "15px", height: "15px"}}>
                      <use xlinkHref="#message-voice" />
                    </svg>
                    Voz
                  </th>
                  <th scope="col" className="text-center">Total</th>
                </tr>
              </thead>
              <tbody id="modal-rate" className="list">
                <tr className="border-bottom">
                  <th scope="row">
                    <span className="d-inline-block rounded-circle mr-2 bg-red" style={{ height: "7px", width: "7px" }}></span>
                    Chile
                  </th>
                  <td>
                    <div className="align-items-center d-flex justify-content-around">
                      <input type="text" className="form-control" style={{ height: "23px", width: "70px"}} />
                      <div>
                        <b>7.484</b>
                        <span className="d-block">${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-items-center d-flex justify-content-around">
                      <input type="text" className="form-control" style={{ height: "23px", width: "70px"}} />
                      <div>
                        <b>7.484</b>
                        <span className="d-block">${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-items-center d-flex justify-content-around">
                      <input type="text" className="form-control" style={{ height: "23px", width: "70px"}} />
                      <div>
                        <b>7.484</b>
                        <span className="d-block">${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-items-center d-flex justify-content-around">
                      <input type="text" className="form-control" style={{ height: "23px", width: "70px"}} />
                      <div>
                        <b>7.484</b>
                        <span className="d-block">${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <b>${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</b>
                  </td>
                </tr>
                <tr className="border-bottom">
                  <th scope="row">
                    <span className="d-inline-block rounded-circle mr-2 bg-blue" style={{ height: "7px", width: "7px" }}></span>
                    Colombia
                  </th>
                  <td>
                    <div className="align-items-center d-flex justify-content-around">
                      <input type="text" className="form-control" style={{ height: "23px", width: "70px"}} />
                      <div>
                        <b>96.72</b>
                        <span className="d-block">${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-items-center d-flex justify-content-around">
                      <input type="text" className="form-control" style={{ height: "23px", width: "70px"}} />
                      <div>
                        <b>7.484</b>
                        <span className="d-block">${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-items-center d-flex justify-content-around">
                      <input type="text" className="form-control" style={{ height: "23px", width: "70px"}} />
                      <div>
                        <b>7.484</b>
                        <span className="d-block">${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-items-center d-flex justify-content-around">
                      <input type="text" className="form-control" style={{ height: "23px", width: "70px"}} />
                      <div>
                        <b>7.484</b>
                        <span className="d-block">${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <b>${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</b>
                  </td>
                </tr>
                <tr className="border-bottom">
                  <th scope="row">
                    <span className="d-inline-block rounded-circle mr-2 bg-yellow" style={{ height: "7px", width: "7px" }}></span>
                    Estados Unidos
                  </th>
                  <td>
                    <div className="align-items-center d-flex justify-content-around">
                      <input type="text" className="form-control" style={{ height: "23px", width: "70px"}} />
                      <div>
                        <b>96.72</b>
                        <span className="d-block">${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-items-center d-flex justify-content-around">
                      <input type="text" className="form-control" style={{ height: "23px", width: "70px"}} />
                      <div>
                        <b>7.484</b>
                        <span className="d-block">${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-items-center d-flex justify-content-around">
                      <input type="text" className="form-control" style={{ height: "23px", width: "70px"}} />
                      <div>
                        <b>7.484</b>
                        <span className="d-block">${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-items-center d-flex justify-content-around">
                      <input type="text" className="form-control" style={{ height: "23px", width: "70px"}} />
                      <div>
                        <b>7.484</b>
                        <span className="d-block">${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <b>${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</b>
                  </td>
                </tr>
                <tr className="border-bottom">
                  <th scope="row">
                    <span className="d-inline-block rounded-circle mr-2 bg-red" style={{ height: "7px", width: "7px" }}></span>
                    Mexico
                  </th>
                  <td>
                    <div className="align-items-center d-flex justify-content-around">
                      <input type="text" className="form-control" style={{ height: "23px", width: "70px"}} />
                      <div>
                        <b>96.72</b>
                        <span className="d-block">${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-items-center d-flex justify-content-around">
                      <input type="text" className="form-control" style={{ height: "23px", width: "70px"}} />
                      <div>
                        <b>7.484</b>
                        <span className="d-block">${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-items-center d-flex justify-content-around">
                      <input type="text" className="form-control" style={{ height: "23px", width: "70px"}} />
                      <div>
                        <b>7.484</b>
                        <span className="d-block">${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-items-center d-flex justify-content-around">
                      <input type="text" className="form-control" style={{ height: "23px", width: "70px"}} />
                      <div>
                        <b>7.484</b>
                        <span className="d-block">${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <b>${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</b>
                  </td>
                </tr>
                <tr className="border-bottom">
                  <th scope="row">
                    <span className="d-inline-block rounded-circle mr-2 bg-green" style={{ height: "7px", width: "7px" }}></span>
                    Peru
                  </th>
                  <td>
                    <div className="align-items-center d-flex justify-content-around">
                      <input type="text" className="form-control" style={{ height: "23px", width: "70px"}} />
                      <div>
                        <b>96.72</b>
                        <span className="d-block">${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-items-center d-flex justify-content-around">
                      <input type="text" className="form-control" style={{ height: "23px", width: "70px"}} />
                      <div>
                        <b>7.484</b>
                        <span className="d-block">${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-items-center d-flex justify-content-around">
                      <input type="text" className="form-control" style={{ height: "23px", width: "70px"}} />
                      <div>
                        <b>7.484</b>
                        <span className="d-block">${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="align-items-center d-flex justify-content-around">
                      <input type="text" className="form-control" style={{ height: "23px", width: "70px"}} />
                      <div>
                        <b>7.484</b>
                        <span className="d-block">${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <b>${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</b>
                  </td>
                </tr>
                <tr className="border-bottom">
                  <th scope="row font-weight-600">Total</th>
                  <td className="text-right">
                    <b>${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</b>
                  </td>
                  <td className="text-right">
                    <b>${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</b>
                  </td>
                  <td className="text-right">
                    <b>${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</b>
                  </td>
                  <td className="text-right">
                    <b>${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</b>
                  </td>
                  <td className="text-center">
                    <b>${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(12484)}</b>
                  </td>
                </tr>
              </tbody>
            </Table>
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
              onClick={() => setShowModalShippingRate(!showModalShippingRate)}
            >
              Cancelar
            </Button>
          </div>
        </Modal>
    </Container>
  )
}