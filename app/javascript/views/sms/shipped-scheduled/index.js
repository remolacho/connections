import React from "react"
import { NavLink } from "react-router-dom";
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  Col,
  Button,
  Input
} from "reactstrap";

export default function ShippedScheduled(){
  return (
    <Container className="pt-7" fluid>
        <div className="d-flex justify-content-between">
          <h1 className="mb-0">Historial de envíos de SMS</h1>
          <Button className="btn-outline-danger">
            Enviar SMS
          </Button>
        </div>
        <hr className="mt-3"/>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row>
                <Col md="7">
                  <h2>Mensajes</h2>
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
                  <th scope="col" className="text-center">Nombre</th>
                  <th scope="col" className="text-center">Tipo</th>
                  <th scope="col" className="text-center">Fecha de creación (fecha programada)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    <NavLink to={`/sms/shipped-and-scheduled/${12312123}`} className="mb-0 text-sm text-center d-block">
                      Uso PLATAFORMA - SMS, Etiner Dev, mes de septiembre
                    </NavLink>
                  </th>
                  <td className="text-center">SMS individual plataforma</td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <NavLink to={`/sms/shipped-and-scheduled/${12312123}`} className="mb-0 text-sm text-center d-block">
                      Uso PLATAFORMA - SMS, Etiner Dev, mes de septiembre
                    </NavLink>
                  </th>
                  <td className="text-center">SMS individual plataforma</td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <NavLink to={`/sms/shipped-and-scheduled/${12312123}`} className="mb-0 text-sm text-center d-block">
                      Uso PLATAFORMA - SMS, Etiner Dev, mes de septiembre
                    </NavLink>
                  </th>
                  <td className="text-center">SMS individual plataforma</td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <NavLink to={`/sms/shipped-and-scheduled/${12312123}`} className="mb-0 text-sm text-center d-block">
                      Uso PLATAFORMA - SMS, Etiner Dev, mes de septiembre
                    </NavLink>
                  </th>
                  <td className="text-center">SMS individual plataforma</td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <NavLink to={`/sms/shipped-and-scheduled/${12312123}`} className="mb-0 text-sm text-center d-block">
                      Uso PLATAFORMA - SMS, Etiner Dev, mes de septiembre
                    </NavLink>
                  </th>
                  <td className="text-center">SMS individual plataforma</td>
                  <td className="text-center">
                    22/09/21 18:15
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </div>
      </Row>
    </Container>
  )
}