import React from 'react'
import Axios from "axios";
import Toastr from "toastr";
import { useParams } from "react-router-dom"
import { useCookies } from 'react-cookie';

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
  const [cookies] = useCookies(["authorization"])
  const [outgoing, setOutgoing] = React.useState({})

  if('id_unique' in params) {
    React.useEffect(() => {
      Axios({
        method: "get",
        url: `/v1/sms/validations/outgoing?id_unique=${params.id_unique}`,
        headers: { 'Authorization': cookies.authorization },
      })
      .then(response => {
        if(response.data.success) {
          Toastr.options.closeButton = true;
          Toastr.options.timeOut = 5000;
          Toastr.options.extendedTimeOut = 1000;
          Toastr.options.positionClass = "toast-bottom-right";
          Toastr.success(`El mensaje esta en ${response.data.data.status}`);
          setOutgoing(response.data.data)
        }
      }).catch(error => {
        Toastr.options.closeButton = true;
        Toastr.options.timeOut = 5000;
        Toastr.options.extendedTimeOut = 1000;
        Toastr.options.positionClass = "toast-bottom-right";
        Toastr.error('ERROR!');
      })
    }, [])
  }

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
                  <p className="text-muted">{params.id_unique}</p>
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
                  <p className="text-muted">+{outgoing.src_number}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="font-weight-600">Número de destino</p>
                </Col>
                <Col>
                  <p className="text-muted">+{outgoing.dst_number}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="font-weight-600">País de destino</p>
                </Col>
                <Col>
                  <p className="text-muted">{outgoing.dst_country}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="font-weight-600">Proveedor de destino</p>
                </Col>
                <Col>
                  <p className="text-muted">{outgoing.dst_provider}</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <p className="font-weight-600">Estado</p>
                </Col>
                <Col>
                  <p className="text-success">{outgoing.status}</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <p className="font-weight-600">Contenido</p>
                </Col>
                <Col>
                  <div className="bg-success p-3 rounded-right rounded-top text-white">
                    <p>{outgoing.sms_content}</p>
                  </div>
                  {/* <div className="content" dangerouslySetInnerHTML={{__html: sms.content }}></div> */}
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="font-weight-600">Mensajes equivalentes</p>
                </Col>
                <Col>
                  <p className="text-muted">{outgoing.multiplier}</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <p className="font-weight-600">Última actualización</p>
                </Col>
                <Col>
                  <p className="text-muted">{outgoing.updated_at}</p>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}