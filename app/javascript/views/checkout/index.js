import React from 'react'
import {
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  CardText,
  Table,
  Container,
  Row,
  Col,
  Button,
  Input,
  Form,
  FormGroup
} from "reactstrap";

export default function Checkout(){
  const [type, setType] = React.useState("sms")
  const [address, setAddress] = React.useState("address1")
  const [payment, setPayment] = React.useState("payment1")
  const [step, setStep] = React.useState(1)

  return (
    <Container className="pt-7" fluid>
      <div className="d-flex justify-content-between">
        <h4 className="mb-0">Comprar Crédito</h4>
      </div>
      <Row>
        <Col md="8">
          <Form>
            <Card className="shadow my-3">
              <CardHeader className="bg-white">
                <h6 className="align-items-center d-flex heading mb-0">
                  <span 
                    className="align-items-center bg-info text-white d-flex justify-content-center mr-3 rounded-circle" 
                    style={{height: '25px', width: '25px'}}>
                    1
                  </span>
                  Carro
                </h6>
              </CardHeader>
              { step == 1 && 
                <CardBody>
                  <div className="pl-lg-4">
                    <Row className="my-3">
                      <Col md="2">
                        <label
                          className="form-control-label pt-2"
                          htmlFor="input-pais"
                        >
                          País 
                        </label>
                      </Col>
                      <Col md="5">
                        <select className="form-control">
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
                    <Table className="align-items-center table-flush" responsive borderless>
                      <thead className="thead-light">
                        <tr>
                          <th scope="col" className="text-left">Producto</th>
                          <th scope="col" className="text-center">Cantidad</th>
                          <th scope="col" className="text-center">c/u (CLP)</th>
                          <th scope="col" className="text-center">Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <i className="fas fa-comment fa-1x pr-2"></i>
                            SMS a Chile
                          </th>
                          <td className="text-center">
                            <Input
                              className="form-control-alternative"
                              placeholder="Ingresar Cantidad"
                              type="text"
                            />
                          </td>
                          <td className="text-center">
                            ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(19)}
                          </td>
                          <td className="text-center">
                            ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(19000)}
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <i className="fas fa-envelope fa-1x pr-2"></i>
                            Email a Chile
                          </th>
                          <td className="text-center">
                            <Input
                              className="form-control-alternative"
                              placeholder="Ingresar Cantidad"
                              type="text"
                            />
                          </td>
                          <td className="text-center">
                            ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(47)}
                          </td>
                          <td className="text-center">
                            ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(0)}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Row className="justify-content-end">
                      <Col md="6">
                        <div className="p-4 rounded-lg cn-bg-gray-1">
                          <div className='d-flex justify-content-between'>
                            <p className="d-inline-block m-0 font-weight-600">Total neto:</p>
                            <span className='d-inline-block'>
                              ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(19000)}
                            </span>
                          </div>
                          <div className='d-flex justify-content-between'>
                            <p className="d-inline-block font-weight-600">Impuesto (19%): </p>
                            <span className='d-inline-block'>
                              ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(3610)}
                            </span>
                          </div>
                          <div className='d-flex justify-content-between'>
                            <p className="d-inline-block m-0 h3">Total:</p>
                            <span className='d-inline-block h3 text-green'>
                              ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(22610)}
                            </span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mt-4 justify-content-end">
                      <Col md="4" className='text-right'>
                        <Button
                          color="info"
                          onClick={() => setStep(2)}
                          size="md"
                        >
                          Continuar
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              }
            </Card>
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
              { step == 2 && 
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
                    <Row className="mt-4 justify-content-end">
                      <Col md="4" className='text-right'>
                        <Button
                          color="info"
                          onClick={() => setStep(3)}
                          size="md"
                        >
                          Continuar
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              }
            </Card>
            <Card className="shadow my-3">
              <CardHeader className="bg-white">
                <h6 className="align-items-center d-flex heading mb-0">
                  <span 
                    className="align-items-center bg-info text-white d-flex justify-content-center mr-3 rounded-circle" 
                    style={{height: '25px', width: '25px'}}>
                    3
                  </span>
                  Datos de Facturación
                </h6>
              </CardHeader>
              { step == 3 &&
                <CardBody>
                  <div className="pl-lg-4">
                    <p className='font-weight-600 text-sm'>Medio de Pago</p>
                    <Row className="my-3">
                      <Col md="8">
                        <Row className='border border-gray rounded-lg p-3 my-3'>
                          <div className="d-flex align-items-center justify-content-between w-100 custom-control custom-radio">
                            <input
                              onChange={() => setPayment('payment1')}
                              className="custom-control-input"
                              defaultChecked
                              id="payment1"
                              name="payment"
                              type="radio"
                            />
                            {/* <label className="custom-control-label ls-1 mb-1 font-weight-600 h6 d-inline-block" htmlFor="address1">
                              Brisaguas / 96.864.190-5
                              <p className='d-inline-block m-0 text-xs font-weight-100'>Arturo Pratt 1093, oficina 506 / Providencia</p>
                            </label>
                            <a className='d-inline-block text-sm'>Válido para Chile</a> */}
                            <label className="custom-control-label ls-1 mb-1 font-weight-600 h6 d-inline-block" htmlFor="payment1">
                              Transferencia <br/> Bancaria
                            </label>
                            <p className='d-inline-block text-sm m-0'>Válido para Chile</p>
                          </div>
                        </Row>
                        <Row className='border border-gray rounded-lg p-3 my-3'>
                          <div className="d-flex align-items-center justify-content-between w-100 custom-control custom-radio">
                            <input
                              onChange={() => setPayment('payment2')}
                              className="custom-control-input"
                              defaultChecked
                              id="payment2"
                              name="payment"
                              type="radio"
                            />
                            <label className="custom-control-label ls-1 mb-1 font-weight-600 h6 d-inline-block" htmlFor="payment2">
                              Khipu (Logo)
                            </label>
                            <p className='d-inline-block text-sm m-0'>Incluye webpay (Chile)</p>
                          </div>
                        </Row>
                        <Row className='border border-gray rounded-lg p-3 my-3'>
                          <div className="d-flex align-items-center justify-content-between w-100 custom-control custom-radio">
                            <input
                              onChange={() => setPayment('payment3')}
                              className="custom-control-input"
                              defaultChecked
                              id="payment3"
                              name="payment"
                              type="radio"
                            />
                            <label className="custom-control-label ls-1 mb-1 font-weight-600 h6 d-inline-block" htmlFor="payment3">
                              Paypal (Logo)
                            </label>
                            <p className='d-inline-block text-sm m-0'>Incluye tarjetas de crédito en USD</p>
                          </div>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="mt-4 justify-content-end">
                      <Col md="4" className='text-right'>
                        <Button
                          color="info"
                          onClick={(e) => e.preventDefault()}
                          size="md"
                        >
                          Pagar
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </CardBody>
              }
            </Card>
          </Form>
        </Col>
        <Col md="4">
          <Card className="shadow my-3">
            <CardHeader className="border-bottom border-2">
              <h3 className="pt-2 pr-3">Resumen de la compra</h3>
            </CardHeader>
            <CardBody className='p-3'>
              <div className="p-4 rounded-lg cn-bg-gray-1">
                <div className='d-flex justify-content-between'>
                  <p className="d-inline-block m-0 font-weight-600">Total neto:</p>
                  <span className='d-inline-block'>
                    ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(19000)}
                  </span>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className="d-inline-block font-weight-600">Impuesto (19%): </p>
                  <span className='d-inline-block'>
                    ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(3610)}
                  </span>
                </div>
                <div className='d-flex justify-content-between'>
                  <p className="d-inline-block m-0 h3">Total:</p>
                  <span className='d-inline-block h3 text-green'>
                    ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(22610)}
                  </span>
                </div>
              </div>
            </CardBody>
          </Card>
          { step == 1 &&
            <Card className="shadow my-3">
              <CardHeader>
                <Row className="align-items-center">
                  <Col>
                    <h3 className="mb-0">Precios para Chile</h3>
                  </Col>
                  <Col className="text-right">
                    <Button
                      color="secondary"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Ver más
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="mb-4 cn-bg-gray-1">
                  <a type="button" onClick={() => setType("sms")} className={`px-3 py-2 ${ type == 'sms' ? 'text-default cn-bg-gray-2 cn-border-3 border-bottom border-info' : ''}`}>SMS</a>
                  <a type="button" onClick={() => setType("email")} className={`px-3 py-2 ${ type == 'email' ? 'text-default cn-bg-gray-2 cn-border-3 border-bottom border-info' : ''}`}>EMAIL</a>
                  <a type="button" onClick={() => setType("short-sms")} className={`px-3 py-2 ${ type == 'short-sms' ? 'text-default cn-bg-gray-2 cn-border-3 border-bottom border-info' : ''}`}>SMS CORTO</a>
                </div>
                <Table className="align-items-center table-flush" responsive borderless>
                  {/* Table sms pricing */}
                  { type == 'sms' &&
                    <>
                      <thead className="thead-light">
                        <tr>
                          <th scope="col" className="text-center">Cantidad de SMS</th>
                          <th scope="col" className="text-center">Valor unitario*</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1 a 10.000</th>
                          <td className="text-center">CLP 18,0 c/u</td>
                        </tr>
                        <tr>
                          <th scope="row">10.001 a 20.000</th>
                          <td className="text-center">CLP 17,0 c/u</td>
                        </tr>
                        <tr>
                          <th scope="row">20.001 a 60.000</th>
                          <td className="text-center">CLP 16,0 c/u</td>
                        </tr>
                        <tr>
                          <th scope="row">60.001 a 100.000</th>
                          <td className="text-center">CLP 15,0 c/u</td>
                        </tr>
                        <tr>
                          <th scope="row">100.001 a 250.000</th>
                          <td className="text-center">CLP 14,0 c/u</td>
                        </tr>
                        <tr>
                          <th scope="row">250.001 a más</th>
                          <td className="text-center">CLP 13,0 c/u</td>
                        </tr>
                      </tbody>
                    </>
                  }
                  {/* Table email pricing */}
                  { type == 'email' &&
                    <>
                      <thead className="thead-light">
                        <tr>
                          <th scope="col" className="text-center">Cantidad de EMAIL</th>
                          <th scope="col" className="text-center">Valor unitario*</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1 a 10.000</th>
                          <td className="text-center">CLP 18,0 c/u</td>
                        </tr>
                        <tr>
                          <th scope="row">10.001 a 20.000</th>
                          <td className="text-center">CLP 17,0 c/u</td>
                        </tr>
                        <tr>
                          <th scope="row">20.001 a 60.000</th>
                          <td className="text-center">CLP 16,0 c/u</td>
                        </tr>
                        <tr>
                          <th scope="row">60.001 a 100.000</th>
                          <td className="text-center">CLP 15,0 c/u</td>
                        </tr>
                        <tr>
                          <th scope="row">100.001 a 250.000</th>
                          <td className="text-center">CLP 14,0 c/u</td>
                        </tr>
                        <tr>
                          <th scope="row">250.001 a más</th>
                          <td className="text-center">CLP 13,0 c/u</td>
                        </tr>
                      </tbody>
                    </>
                  }
                  {/* Table short-sms pricing */}
                  { type == 'short-sms' &&
                    <>
                      <thead className="thead-light">
                        <tr>
                          <th scope="col" className="text-center">Cantidad de SMS <br/> Corto</th>
                          <th scope="col" className="text-center">Valor unitario*</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1 a 10.000</th>
                          <td className="text-center">CLP 18,0 c/u</td>
                        </tr>
                        <tr>
                          <th scope="row">10.001 a 20.000</th>
                          <td className="text-center">CLP 17,0 c/u</td>
                        </tr>
                        <tr>
                          <th scope="row">20.001 a 60.000</th>
                          <td className="text-center">CLP 16,0 c/u</td>
                        </tr>
                        <tr>
                          <th scope="row">60.001 a 100.000</th>
                          <td className="text-center">CLP 15,0 c/u</td>
                        </tr>
                        <tr>
                          <th scope="row">100.001 a 250.000</th>
                          <td className="text-center">CLP 14,0 c/u</td>
                        </tr>
                        <tr>
                          <th scope="row">250.001 a más</th>
                          <td className="text-center">CLP 13,0 c/u</td>
                        </tr>
                      </tbody>
                    </>
                  }
                </Table>
              </CardBody>
            </Card>
          }
          { (step == 2 || step == 3) &&
            <Card className="shadow my-3">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <Col>
                    <h3 className="mb-0">
                      Carro
                    </h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row className="mb-2">
                  <Col>
                    <h6 className="ls-1 mb-1">
                      1.000 SMS a Chile
                    </h6>
                    <p className="mb-0 font-weight-600">
                      ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(19000)}
                    </p>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <h6 className="ls-1 mb-1">
                      500 Emails a Chile
                    </h6>
                    <p className="mb-0 font-weight-600">
                      ${new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(2500)}
                    </p>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          }
          { step == 3 &&
            <Card className="shadow my-3">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <Col>
                    <h3 className="mb-0">
                      Facturación
                    </h3>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Row className="mb-2">
                  <Col>
                    <h6 className="ls-1 mb-1 font-weight-600">
                      Brisaguas / 96.864.190-5
                    </h6>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <p className="mb-1 text-xs">
                      Arturo Pratt 1093, oficina 506 / Providencia
                    </p>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col>
                    <p className="mb-1 text-xs">
                      pedro.serrano@brisaguas.cl
                    </p>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          }
        </Col>
      </Row>
    </Container>
  )
}