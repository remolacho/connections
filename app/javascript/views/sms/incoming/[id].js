import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import axios from '../../../utilities/auth-axios'
import {
  Card,
  CardBody,
  CardHeader,
  Container,
  Row,
  Col,
} from "reactstrap";
import { formatTimeStamptToDate } from '../../../utilities/shared';

export default function SMSIncomingId(){
  const params = useParams()
  const [sms, setSMS] = useState({})

  async function setData(){
    await axios.get(`/sms/incoming/${params.id}`)
    .then(({data:{data:result}}) => {
      setSMS(result)
    })
  } 

  useEffect(() => setData(), [])
  
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
                  <p className="text-muted">{sms.id_unique}</p>
                </Col>
              </Row>
              
              <Row>
                <Col>
                  <p className="font-weight-600">Número de origen</p>
                </Col>
                <Col>
                  <p className="text-muted">{`+${sms.src_number}`}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="font-weight-600">Número de destino</p>
                </Col>
                <Col>
                  <p className="text-muted">{`+${sms.dst_number}`}</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <p className="font-weight-600">Proveedor de origen</p>
                </Col>
                <Col>
                  <p className="text-muted">{sms.src_provider}</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <p className="font-weight-600">Contenido</p>
                </Col>
                <Col>
                  <div className="bg-success px-3 py-1 rounded-right rounded-top text-white d-flex align-items-center">
                    <p className="m-0">{sms.sms_content}</p>
                  </div>
                  {/* <div className="content" dangerouslySetInnerHTML={{__html: sms.content }}></div> */}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <p className="font-weight-600">Recibido</p>
                </Col>
                <Col>
                  {sms.created_at && <p className="text-muted">{formatTimeStamptToDate(sms.created_at)}</p>}
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}