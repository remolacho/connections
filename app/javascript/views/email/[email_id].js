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

export default function EmailId(){
  const params = useParams()
  console.log(params) // {email_id: #}

  return (
    <Container className="pt-7" fluid>
      <div className="d-flex justify-content-between">
        <h1 className="mb-0">Email</h1>
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
                  <p className="text-muted">{params.email_id}</p>
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
                  <p className="font-weight-600">Correo de origen</p>
                </Col>
                <Col>
                  <p className="text-muted">no-reply@connectus.cl</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="font-weight-600">Correo de destino</p>
                </Col>
                <Col>
                  <p className="text-muted">luisjeanpierce@gmail.com</p>
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
                  <p className="font-weight-600">Asunto</p>
                </Col>
                <Col>
                  <p className="text-muted">Verificacion de correo Connectus</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <p className="font-weight-600">Contenido</p>
                </Col>
                <Col>
                  {/* <div className="content" dangerouslySetInnerHTML={{__html: email.content }}></div> */}
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
        <Col lg="4" xl="4">
          <Card className="shadow mb-4">
            <CardHeader>
              <h3 className="pt-2 pr-3">Evento</h3>
            </CardHeader>
            <CardBody>
              <Row>
                <Col>
                  <p className="font-weight-600">Clickeado</p>
                </Col>
                <Col>
                  <p className="text-muted">Clickeado el 30 nov. 2021 a las 15:35</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="font-weight-600">Abierto</p>
                </Col>
                <Col>
                  <p className="text-primary">Abierto el 30 nov. 2021 a las 15:35</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="font-weight-600">Rechazado</p>
                </Col>
                <Col>
                  <p className="text-muted">No</p>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}