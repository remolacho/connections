import React from 'react'
import { useParams } from "react-router-dom"

import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function SMSId(){
  const params = useParams()
  console.log(params) // {sms_id: #}

  return (
    <Container className="pt-7" fluid>
      <div className="d-flex justify-content-between">
        <h1 className="mb-0">SMS</h1>
      </div>
      <hr className="mt-3"/>
      <Row>
        <Col lg="7" xl="7">
          <Card className="shadow mb-4">
            <CardHeader>
              <h3 className="pt-2 pr-3">Detalle</h3>
            </CardHeader>
            <CardBody>
              <Row>
                <Col>
                  <p className="font-weight-600">Identificador único</p>
                </Col>
                <Col>
                  <p className="text-muted">{params.sms_id}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="font-weight-600">Envio</p>
                </Col>
                <Col>
                  <p className="text-primary">Envío Uso PLATAFORMA - EMAIL, Jan Stillfried, mes de Noviembre</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="font-weight-600">Número de origen</p>
                </Col>
                <Col>
                  <p className="text-muted">+56442340010</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="font-weight-600">Número de destino</p>
                </Col>
                <Col>
                  <p className="text-muted">+56994412372</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="font-weight-600">País de destino</p>
                </Col>
                <Col>
                  <p className="text-muted">Chile</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="font-weight-600">Proveedor de destino</p>
                </Col>
                <Col>
                  <p className="text-muted">Movistar</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <p className="font-weight-600">Estado</p>
                </Col>
                <Col>
                  <p className="text-success">Entregado</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <p className="font-weight-600">Contenido</p>
                </Col>
                <Col>
                  <div className="bg-success p-3 rounded-right rounded-top text-white">
                    <p>Hola! esto es una prueba</p>
                  </div>
                  {/* <div className="content" dangerouslySetInnerHTML={{__html: sms.content }}></div> */}
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="font-weight-600">Mensajes equivalentes</p>
                </Col>
                <Col>
                  <p className="text-muted">1</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <p className="font-weight-600">Última actualización</p>
                </Col>
                <Col>
                  <p className="text-muted">09 feb. 2022 a las 09:27</p>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}