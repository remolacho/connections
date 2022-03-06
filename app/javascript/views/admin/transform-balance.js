import React from 'react'

import {
  Card,
  CardTitle,
  CardBody,
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

export default function TransformBalance(){
  return (
    <Container className="pt-7" fluid>
      <div className="d-flex justify-content-between">
        <h1 className="mb-0">Historial de compras</h1>
      </div>
      <hr className="mt-3"/>
      <Row>
        <Col lg="3" xl="3">
          <Card className="card-stats mb-4 mb-xl-0 shadow">
            <CardBody>
              <Row>
                <Col className="d-flex justify-content-between">
                  <div>
                    <CardTitle
                      tag="h5"
                      className="text-uppercase text-muted mb-0"
                    >
                      Saldo Disponible
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">
                      {new Intl.NumberFormat('de-DE', {minimumFractionDigits: 0, maximumFractionDigits: 0}).format(1380085)}
                      <br/>
                    </span>
                  </div>
                  <div>
                    <Button
                      color="secondary"
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      ...
                    </Button>
                  </div>
                </Col>
              </Row>
              <p className="mb-0 font-weight-600 text-xs">
                Ver más detalles
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col lg="4" xl="4">
          <Card className="card-stats mb-4 mb-xl-0 shadow p-4">
            <div className='align-items-baseline d-flex justify-content-between'>
              <select className="form-control" style={{ width: "100px" }}>
                <option value="sms" defaultValue>SMS</option>
                <option value="voz" >Voz</option>
              </select>
              <select className="form-control" style={{ width: "100px" }}>
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
              <p className='d-inline-block font-weight-600 text-sm'>Balance: 500 SMS</p>
            </div>
            <div className='border mt-3 py-2'>
              <p className='font-weight-600 text-lg text-center mb-0'>250</p>
              <span className='d-block text-center'>($xxxx PEN)</span>
            </div>
            <div className='align-items-center d-flex justify-content-center py-4'>
              <svg onClick={e => e.preventDefault() } className="bg-gray fill-current mb-1 mx-2 p-2 rounded" style={{width: "50px", height: "50px"}}>
                <use xlinkHref="#exchange" />
              </svg>
            </div>
            <div className='align-items-baseline d-flex justify-content-between'>
              <select className="form-control" style={{ width: "100px" }}>
                <option value="sms" >SMS</option>
                <option value="voz" defaultValue>Voz</option>
              </select>
              <select className="form-control" style={{ width: "100px" }}>
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
              <p className='d-inline-block font-weight-600 text-sm'>Balance: 50 Voz</p>
            </div>
            <div className='border mt-3 py-2'>
              <p className='font-weight-600 text-lg text-center mb-0'>100</p>
              <span className='d-block text-center'>($xxxx CLP)</span>
            </div>
            <p className='font-weight-600 text-left mb-0 mt-3'>Precio: $2,5 SMS por Voz</p>
            <div className='text-center'>
              <Button className="my-4" color="info" type="button" block>
                Transformar ahora
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}